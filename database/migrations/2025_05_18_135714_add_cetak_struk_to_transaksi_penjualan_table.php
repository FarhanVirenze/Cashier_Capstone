<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    // database/migrations/xxxx_xx_xx_add_cetak_struk_to_transaksi_penjualan_table.php
    public function up()
    {
        Schema::table('transaksi_penjualan', function (Blueprint $table) {
            $table->boolean('cetak_struk')->default(false);
        });
    }

    public function down()
    {
        Schema::table('transaksi_penjualan', function (Blueprint $table) {
            $table->dropColumn('cetak_struk');
        });
    }
};
