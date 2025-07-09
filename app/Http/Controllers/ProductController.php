<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Picqer\Barcode\BarcodeGenerator;
use Picqer\Barcode\BarcodeGeneratorPNG;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query();

        // Filter pencarian berdasarkan nama
        if ($request->has('search') && $request->search != '') {
            $query->where('nama', 'like', '%' . $request->search . '%');
        }

        // Ambil data dengan pagination
        $product = $query->latest()->paginate(5);

        // Format URL foto
        $product->getCollection()->transform(function ($product) {
            $product->foto = $product->foto ? asset("storage/uploads/" . basename($product->foto)) : null;
            return $product;
        });

        return view('product.index', compact('product'));
    }

    public function create()
    {
        return view('product.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'barcode' => 'required|string|unique:products,barcode',
            'harga' => 'required|numeric',
            'stok' => 'required|integer|min:0',
            'foto' => 'required|image|max:2048', // 2MB max
        ]);

        // Simpan file ke storage/app/public/uploads
        $fotoPath = $request->file('foto')->store('uploads', 'public');

        // Simpan data ke DB
        $product = Product::create([
            'nama' => $request->nama,
            'barcode' => $request->barcode,
            'harga' => $request->harga,
            'stok' => $request->stok,
            'foto' => $fotoPath, // disimpan sebagai path relatif
        ]);

        return redirect()->route('product.index')->with('success', 'Product berhasil ditambahkan');
    }

    public function show($id)
    {
        $item = Product::findOrFail($id);
        return view('barcode', compact('item'));
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        $request->validate([
            'nama' => 'required|string|max:255',
            'barcode' => 'required|string|unique:products,barcode,' . $id,
            'harga' => 'required|numeric',
            'stok' => 'required|integer|min:0',
            'foto' => 'nullable|image|max:2048',
        ]);

        $updateData = $request->only(['nama', 'barcode', 'harga', 'stok']);

        if ($request->hasFile('foto')) {
            // Hapus foto lama jika ada
            if ($product->foto && Storage::disk('public')->exists($product->foto)) {
                Storage::disk('public')->delete($product->foto);
            }

            $fotoPath = $request->file('foto')->store('uploads', 'public');
            $source = storage_path('app/public/' . $fotoPath);
            $destination = public_path('storage/uploads/' . basename($fotoPath));
            File::copy($source, $destination);
            $updateData['foto'] = $fotoPath;
        }

        $product->update($updateData);

        return redirect()->route('product.index')->with('success', 'Product berhasil diperbarui');
    }

    public function destroy($id)
    {
        $product = Product::find($id);

        // Hapus foto dari penyimpanan
        if ($product->foto && Storage::disk('public')->exists($product->foto)) {
            Storage::disk('public')->delete($product->foto);
        }

        $product->delete();

        return redirect()->route('product.index')->with('success', 'Product berhasil dihapus');
    }
}