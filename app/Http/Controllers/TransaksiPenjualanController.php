<?php

namespace App\Http\Controllers;

use App\Models\TransaksiPenjualan;
use Illuminate\Http\Request;

class TransaksiPenjualanController extends Controller
{
    // Tampilkan semua transaksi
    public function index()
    {
        $transaksi = TransaksiPenjualan::latest()->paginate(6);
        return view('transaksi.index', compact('transaksi'));
    }

    // Hapus transaksi dan detailnya
    public function destroy($id)
    {
        $user = auth()->user();

        if (!$user->is_admin) {
            abort(403, 'Hanya admin yang dapat menghapus transaksi.');
        }

        $transaksi = TransaksiPenjualan::findOrFail($id);
        $transaksi->detailPenjualan()->delete(); // hapus detail dulu
        $transaksi->delete();

        return redirect()->route('transaksi.index')->with('success', 'Transaksi berhasil dihapus.');
    }

    // Cetak / preview struk
    public function cetakTransaksi($id)
    {
        $transaksi = TransaksiPenjualan::with('detailPenjualan')->findOrFail($id);
        return view('transaksi.cetak', compact('transaksi'));
    }
}
