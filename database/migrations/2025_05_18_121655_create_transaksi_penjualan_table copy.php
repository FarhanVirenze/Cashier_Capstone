<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('transaksi_penjualan', function (Blueprint $table) {
            $table->id();
            $table->date('tanggal');
            $table->string('nama_pelanggan')->nullable();
            $table->string('nama_user');
            $table->enum('metode_pembayaran', ['cash', 'qris']);
            $table->decimal('jumlah_bayar', 15, 2);
            $table->decimal('total', 15, 2);           // tambahan ini
            $table->decimal('kembalian', 15, 2);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi_penjualan');
    }
};
