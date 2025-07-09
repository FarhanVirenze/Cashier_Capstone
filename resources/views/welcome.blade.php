<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>UMKM Store</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        @vite('resources/css/app.css')
    </head>
    <body class="min-h-screen flex flex-col items-center p-6 lg:p-12 bg-gradient-to-b from-[#fefefe] to-[#f0f4f8] dark:from-[#0a0a0a] dark:to-[#1a1a1a] text-[#1b1b18]">

        <!-- Navbar -->
        <header class="w-full max-w-6xl flex justify-between items-center mb-10">
            <h1 class="text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-wide">UMKM Store</h1>

            @if (Route::has('login'))
                <nav class="flex items-center gap-4 text-sm">
                    @auth
                        <a href="{{ url('/dashboard') }}"
                            class="px-4 py-2 rounded border border-transparent dark:text-white hover:border-gray-400">
                            Dashboard
                        </a>
                    @else
                        <a href="{{ route('login') }}"
                            class="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700">
                            Login
                        </a>
                    @endauth
                </nav>
            @endif
        </header>

        <!-- Hero Section -->
        <main class="flex-grow flex flex-col justify-center items-center text-center px-6r">
            <h2 class="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
                Sistem Kasir UMKM Modern
            </h2>
            <p class="text-gray-700 dark:text-gray-300 max-w-xl mb-8 text-lg">
                Kelola transaksi, Cetak Struk, Scanning Barcode langsung dari Kamera Smartphone, Laporan Penjualan, Manajemen Produk, dan Sistem Admin dan Kasir. Dibuat untuk mendukung digitalisasi usaha kecil.
            </p>
        </main>

        <!-- Feature Section -->
        <section id="fitur" class="w-full max-w-5xl mx-auto grid md:grid-cols-3 gap-8 p-6">
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition">
                <h3 class="text-xl font-semibold text-blue-700 dark:text-blue-400">Pemindaian Barcode</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Scan produk langsung pakai kamera smartphone tanpa alat tambahan.
                </p>
            </div>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition">
                <h3 class="text-xl font-semibold text-blue-700 dark:text-blue-400">Cetak Struk</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Langsung cetak bukti transaksi dari browser, dukung printer thermal.
                </p>
            </div>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition">
                <h3 class="text-xl font-semibold text-blue-700 dark:text-blue-400">Pembayaran QRIS</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Terima pembayaran dengan QRIS langsung dari sistem kasir.
                </p>
            </div>
        </section>

        <!-- Footer -->
        <footer class="text-center text-sm text-gray-500 dark:text-gray-400 mt-8 mb-4">
            &copy; {{ date('Y') }} UMKM Store. Semua Hak Dilindungi.
        </footer>
    </body>
</html>
