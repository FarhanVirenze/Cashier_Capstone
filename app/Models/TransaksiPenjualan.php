<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransaksiPenjualan extends Model
{
    use HasFactory;

    protected $table = 'transaksi_penjualan';

    protected $fillable = [
        'tanggal',
        'nama_pelanggan',
        'nomor_pelanggan',  
        'nama_user',
        'metode_pembayaran',
        'jumlah_bayar',
        'total',
        'kembalian',
        'cetak_struk', 
    ];

    public function detailPenjualan()
    {
        return $this->hasMany(DetailPenjualan::class);
    }
    public function details()
    {
        return $this->hasMany(DetailPenjualan::class, 'transaksi_penjualan_id');
    }
}
