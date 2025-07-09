<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pos extends Model
{
    // Nama tabel jika tidak mengikuti konvensi jamak Laravel (opsional jika tabel bernama 'poses')
    protected $table = 'pos';

    // Kolom yang boleh diisi secara mass-assignment
    protected $fillable = [
        'product_id',
        'quantity',
    ];

    // Relasi ke model Product
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
