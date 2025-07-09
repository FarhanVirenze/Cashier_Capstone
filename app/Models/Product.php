<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    // Gunakan nama tabel khusus
    protected $table = 'products';

    // timestamps aktif (default true, jadi baris ini opsional, tapi bisa ditulis untuk kejelasan)
    public $timestamps = true;

    // Kolom yang boleh diisi secara massal
    protected $fillable = [
        'nama',
        'barcode',
        'harga',
        'foto',
        'stok',
    ];

    // Relasi dengan Pos
    public function posItems()
    {
        return $this->hasMany(Pos::class);
    }

    // Cast kolom harga ke float
    protected $casts = [
        'harga' => 'float',
        'stok' => 'integer',
    ];
}