<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PosController;
use App\Http\Controllers\ScanController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\TransaksiPenjualanController;
use App\Http\Controllers\DetailPenjualanController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');
    
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/pos', [PosController::class, 'index'])->name('pos.index');
    Route::post('/pos/add', [PosController::class, 'add'])->name('pos.add');

    Route::get('/scanner', function () {
        return view('scanner');
    })->name('scanner.index');
    Route::post('/scan', [ScanController::class, 'index'])->name('scan.index');
    Route::post('/scan/add', [ScanController::class, 'add'])->name('scan.add');

    // Cart
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart/checkout', [CartController::class, 'checkout'])->name('cart.checkout');
    Route::patch('/cart/{cartItem}', [CartController::class, 'update'])->name('cart.update');
    Route::delete('/cart/{cartItem}', [CartController::class, 'destroy'])->name('cart.destroy');

    Route::post('/clear-print-session', function () {
        session()->forget('print_transaksi');
        return response()->json(['status' => 'success']);
    })->name('clear.print.session');

    // Transaksi Penjualan
    Route::get('/transaksi', [TransaksiPenjualanController::class, 'index'])->name('transaksi.index');
    Route::delete('/transaksi/{id}', [TransaksiPenjualanController::class, 'destroy'])->name('transaksi.destroy');
    Route::get('/transaksi/cetak/{id}', [TransaksiPenjualanController::class, 'cetakTransaksi'])->name('transaksi.cetak');

    // Detail Penjualan
    Route::get('/detail', [DetailPenjualanController::class, 'index'])->name('detailpenjualan.index');
    Route::delete('/detail/{id}', [DetailPenjualanController::class, 'destroy'])->name('detailpenjualan.destroy');
});

Route::middleware('auth', 'admin')->group(function () {
    Route::resource('product', ProductController::class)->except(['show']);
    Route::get('/product', [ProductController::class, 'index'])->name('product.index');
    Route::get('/product/{barcode}', [ProductController::class, 'showByBarcode']);
    Route::get('/product/create', [ProductController::class, 'create'])->name('product.create');
    Route::post('/product', [ProductController::class, 'store'])->name('product.store');
    Route::put('/product/{id}', [ProductController::class, 'update'])->name('product.update');
    Route::delete('/product/{id}', [ProductController::class, 'destroy'])->name('product.destroy');
    Route::resource('user', UserController::class)->except(['show']);
    Route::get('/user', [UserController::class, 'index'])->name('user.index');
    Route::patch('/user/{user}/makeadmin', [UserController::class, 'makeadmin'])->name('user.makeadmin');
    Route::patch('/user/{user}/removeadmin', [UserController::class, 'removeadmin'])->name('user.removeadmin');
    Route::delete('/user/{user}', [UserController::class, 'destroy'])->name('user.destroy');
    Route::get('/user/{user}/edit', [UserController::class, 'edit'])->name('user.edit');
    Route::patch('/user/{user}', [UserController::class, 'update'])->name('user.update');
});

require __DIR__ . '/auth.php';
