<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\TransaksiPenjualan;
use App\Models\DetailPenjualan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index()
    {
        if (Auth::user()->is_admin) {
            // Admin melihat semua cart items dengan user dan produk
            $items = CartItem::with(['product', 'user'])->get();
        } else {
            // User biasa hanya melihat cart miliknya sendiri
            $items = CartItem::with('product')->where('user_id', Auth::id())->get();
        }

        return view('cart.index', compact('items'));
    }

    public function checkout(Request $request)
    {
        $request->validate([
            'nama_pelanggan' => 'nullable|string|max:255',
            'nomor_pelanggan' => 'nullable|string|max:50',
            'metode_pembayaran' => 'required|in:cash,qris',
            'jumlah_bayar' => 'required|numeric|min:0',
        ]);

        $items = CartItem::with('product')->where('user_id', Auth::id())->get();

        if ($items->isEmpty()) {
            return back()->with('error', 'Keranjang kosong');
        }

        $totalBayar = $items->sum(fn($item) => $item->product->harga * $item->quantity);

        if ($request->jumlah_bayar < $totalBayar) {
            return back()->with('error', 'Jumlah bayar kurang dari total');
        }

        $kembalian = $request->jumlah_bayar - $totalBayar;

        $transaksi = null;

        DB::transaction(function () use ($items, $request, $totalBayar, $kembalian, &$transaksi) {
            $transaksi = TransaksiPenjualan::create([
                'tanggal' => now()->toDateString(),
                'nama_pelanggan' => $request->nama_pelanggan,
                'nomor_pelanggan' => $request->nomor_pelanggan,
                'nama_user' => Auth::user()->name,
                'metode_pembayaran' => $request->metode_pembayaran,
                'jumlah_bayar' => $request->jumlah_bayar,
                'total' => $totalBayar,
                'kembalian' => $kembalian,
                'cetak_struk' => true,
            ]);

            foreach ($items as $item) {
                DetailPenjualan::create([
                    'transaksi_penjualan_id' => $transaksi->id,
                    'product_id' => $item->product->id,
                    'nama_product' => $item->product->nama,
                    'harga' => $item->product->harga,
                    'jumlah' => $item->quantity,
                    'total' => $item->product->harga * $item->quantity,
                ]);

                $item->product->decrement('stok', $item->quantity);
            }

            CartItem::where('user_id', Auth::id())->delete();
        });

        $transaksi->load('details');

        session(['print_transaksi' => $transaksi]);

        return redirect()->route('cart.index')->with([
            'success' => 'Struk dicetak. Kembalian: Rp ' . number_format($kembalian, 0, ',', '.'),
        ]);
    }

    public function update(Request $request, CartItem $cartItem)
    {
        // User biasa hanya bisa update keranjang miliknya sendiri
        if (!Auth::user()->is_admin && $cartItem->user_id !== Auth::id()) {
            abort(403);
        }

        $request->validate([
            'quantity' => 'required|integer',
        ]);

        $quantity = $request->quantity;

        if ($quantity < 1) {
            return back()->with('error', 'Jumlah minimal adalah 1.');
        }

        $product = $cartItem->product;

        if ($quantity > $product->stok) {
            return back()->with('error', 'Jumlah melebihi stok tersedia (' . $product->stok . ').');
        }

        $cartItem->update(['quantity' => $quantity]);

        return back()->with('success', 'Jumlah produk diperbarui.');
    }

    public function destroy(CartItem $cartItem)
    {
        // Admin boleh hapus semua cart item
        if (!Auth::user()->is_admin) {
            return back()->with('error', 'Hanya admin yang dapat menghapus item dari keranjang.');
        }

        $cartItem->delete();

        return back()->with('success', 'Produk dihapus dari keranjang');
    }
}
