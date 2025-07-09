<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TransaksiPenjualan;
use App\Models\Product;
use App\Models\DetailPenjualan;
use App\Models\User;
use Carbon\Carbon;
use DB;

class DashboardController extends Controller
{
    public function index()
    {
        $penjualanHarian = TransaksiPenjualan::select(
            DB::raw('DATE(tanggal) as tanggal'),
            DB::raw('SUM(total) as total')
        )
            ->groupBy(DB::raw('DATE(tanggal)'))
            ->orderBy('tanggal', 'ASC')
            ->take(7)
            ->get();

        $transaksiHarian = TransaksiPenjualan::select(
            DB::raw('DATE(tanggal) as tanggal'),
            DB::raw('COUNT(*) as jumlah')
        )
            ->groupBy(DB::raw('DATE(tanggal)'))
            ->orderBy('tanggal', 'ASC')
            ->take(7)
            ->get();

        $jumlahUser = User::count();
        $produkTerjual = DetailPenjualan::sum('jumlah');
        $stokTersedia = Product::orderBy('stok', 'DESC')->take(5)->get();
        $produkTerlaris = DetailPenjualan::select('product_id', DB::raw('SUM(jumlah) as total'))
            ->groupBy('product_id')
            ->orderBy('total', 'DESC')
            ->with('product')
            ->take(5)
            ->get();

        // Metode pembayaran (cash, QRIS) jumlah transaksi
        $metodePembayaran = TransaksiPenjualan::select('metode_pembayaran', DB::raw('COUNT(*) as total'))
            ->groupBy('metode_pembayaran')
            ->get();

        $totalPendapatan = TransaksiPenjualan::sum('total');
        $jumlahTransaksi = TransaksiPenjualan::count();

        return view('dashboard', compact(
            'penjualanHarian',
            'transaksiHarian',
            'produkTerjual',
            'stokTersedia',
            'produkTerlaris',
            'totalPendapatan',
            'jumlahTransaksi',
            'jumlahUser',
            'metodePembayaran',
        ));
    }
}
