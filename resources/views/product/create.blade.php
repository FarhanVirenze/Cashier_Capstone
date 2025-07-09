<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Tambah Product Baru') }}
        </h2>
    </x-slot>

    <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                <div class="p-6 text-gray-800 dark:text-gray-100 space-y-6">

                    <form action="{{ route('product.store') }}" method="POST" enctype="multipart/form-data"
                          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        @csrf

                        {{-- Nama Product --}}
                        <div>
                            <x-input-label for="nama" value="Nama Product" class="text-sm text-gray-700 dark:text-gray-200" />
                            <input type="text" name="nama" id="nama" placeholder="Masukkan Nama Product"
                                   class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md text-sm px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   required>
                        </div>

                        {{-- Barcode --}}
                        <div>
                            <x-input-label for="barcode" value="Barcode" class="text-sm text-gray-700 dark:text-gray-200" />
                            <input type="text" name="barcode" id="barcode" placeholder="Masukkan Barcode"
                                   class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md text-sm px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   required>
                        </div>

                        {{-- Harga --}}
                        <div>
                            <x-input-label for="harga" value="Harga" class="text-sm text-gray-700 dark:text-gray-200" />
                            <input type="number" name="harga" id="harga" placeholder="Masukkan Harga"
                                   class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md text-sm px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   required>
                        </div>

                        {{-- Stok --}}
                        <div>
                            <x-input-label for="stok" value="Stok" class="text-sm text-gray-700 dark:text-gray-200" />
                            <input type="number" name="stok" id="stok" placeholder="Masukkan Jumlah Stok"
                                   class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md text-sm px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   required>
                        </div>

                        {{-- Foto Product --}}
                        <div>
                            <x-input-label for="foto" value="Foto Product" class="text-sm text-gray-700 dark:text-gray-200" />
                            <input type="file" name="foto" id="foto" accept="image/*"
                                   class="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md text-sm px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   required>
                        </div>

                        {{-- Tombol Aksi --}}
                        <div class="col-span-full flex justify-end gap-2 pt-2">
                            <x-primary-button class="text-sm bg-green-500 hover:bg-green-600">
                                Tambah Product
                            </x-primary-button>
                            <x-cancel-button href="{{ route('product.index') }}" class="text-sm" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</x-app-layout>
