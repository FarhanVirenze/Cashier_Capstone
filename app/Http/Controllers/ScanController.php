<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScanController extends Controller
{
    // Hanya untuk mencari produk berdasarkan barcode
    public function index(Request $request)
    {
        if (!Auth::check()) {
            return response()->json([
                'success' => false,
                'message' => 'User belum login.'
            ], 401);
        }

        $barcode = $request->input('barcode');

        if (!$barcode) {
            return response()->json([
                'success' => false,
                'message' => 'Barcode tidak tersedia.'
            ], 422);
        }

        $product = Product::where('barcode', $barcode)
            ->orWhere('barcode', ltrim($barcode, '0'))
            ->first();

        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Produk tidak ditemukan.'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Produk ditemukan.',
            'product' => $product
        ]);
    }

    // Tambahkan produk ke CartItem
    public function add(Request $request)
{
    if (!Auth::check()) {
        return response()->json([
            'success' => false,
            'message' => 'User belum login.'
        ], 401);
    }

    $productId = $request->input('product_id');

    if (!$productId) {
        return response()->json([
            'success' => false,
            'message' => 'ID produk tidak tersedia.'
        ], 422);
    }

    try {
        $existing = CartItem::where('user_id', Auth::id())
            ->where('product_id', $productId)
            ->first();

        if ($existing) {
            $existing->increment('quantity');
        } else {
            CartItem::create([
                'user_id' => Auth::id(),
                'product_id' => $productId,
                'quantity' => 1
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Produk berhasil ditambahkan ke keranjang.'
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Gagal ke halaman pos.',
            'error' => $e->getMessage(),
        ], 500);
    }
}
}
