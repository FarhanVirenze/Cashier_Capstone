<?php

namespace App\Http\Controllers;

use App\Models\DetailPenjualan;
use Illuminate\Http\Request;

class DetailPenjualanController extends Controller
{
    // Tampilkan semua detail penjualan (jika dibutuhkan global)
    public function index()
    {
        $details = DetailPenjualan::with('transaksi', 'product')->get();

        // Hitung subtotal dari semua data
        $subtotal = $details->sum('total');

        return view('detailpenjualan.index', compact('details', 'subtotal'));
    }

    // Hapus detail penjualan
    public function destroy($id)
    {
        $detail = DetailPenjualan::findOrFail($id);
        $detail->delete();

        return back()->with('success', 'Detail penjualan berhasil dihapus.');
    }
}
