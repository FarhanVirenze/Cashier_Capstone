<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PosController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query();

        // Jika ada input pencarian
        if ($request->has('product-search') && $request->input('product-search') != '') {
            $query->where('nama', 'like', '%' . $request->input('product-search') . '%');
        }

        $products = $query->latest()->paginate(6);

        $items = CartItem::with('product')->where('user_id', Auth::id())->get();

        return view('pos.index', compact('products', 'items'));
    }

    public function add(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'nullable|integer|min:1',
        ]);

        $quantity = $request->input('quantity', 1);
        $product = Product::findOrFail($request->product_id);

        // Validasi stok
        if ($product->stok <= 0) {
            return redirect()->route('pos.index')->with('error', "Stok produk '{$product->nama}' habis, tidak bisa ditambahkan ke keranjang.");
        }

        // Jika quantity lebih besar dari stok, batasi quantity sesuai stok
        if ($quantity > $product->stok) {
            return redirect()->route('pos.index')->with('error', "Jumlah produk '{$product->nama}' yang diminta melebihi stok tersedia.");
        }

        $item = CartItem::where('user_id', Auth::id())
            ->where('product_id', $request->product_id)
            ->first();

        if ($item) {
            // Pastikan total quantity tidak melebihi stok
            if ($item->quantity + $quantity > $product->stok) {
                return redirect()->route('pos.index')->with('error', "Jumlah produk '{$product->nama}' di keranjang melebihi stok tersedia.");
            }

            $item->increment('quantity', $quantity);
        } else {
            CartItem::create([
                'user_id' => Auth::id(),
                'product_id' => $request->product_id,
                'quantity' => $quantity,
            ]);
        }

        return redirect()->route('pos.index')->with('success', 'Produk berhasil ditambahkan ke keranjang');
    }
}
