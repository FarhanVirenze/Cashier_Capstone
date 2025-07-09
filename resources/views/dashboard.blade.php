<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-6">
        <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-6">

            {{-- Ringkasan --}}
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div
                    class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg text-center">
                    <p class="text-lg font-medium">Total Produk Terjual</p>
                    <p class="text-3xl font-bold mt-2">{{ $produkTerjual }}</p>
                </div>
                <div
                    class="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg text-center">
                    <p class="text-lg font-medium">Total Pendapatan</p>
                    <p class="text-3xl font-bold mt-2">Rp {{ number_format($totalPendapatan, 0, ',', '.') }}</p>
                </div>
                <div
                    class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-2xl shadow-lg text-center">
                    <p class="text-lg font-medium">Jumlah Transaksi</p>
                    <p class="text-3xl font-bold mt-2">{{ $jumlahTransaksi }}</p>
                </div>
                <div
                    class="bg-gradient-to-r from-pink-500 to-rose-600 text-white p-6 rounded-2xl shadow-lg text-center">
                    <p class="text-lg font-medium">Jumlah Pengguna</p>
                    <p class="text-3xl font-bold mt-2">{{ $jumlahUser }}</p>
                </div>
            </div>

            {{-- Grafik Total Penjualan --}}
            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Total Penjualan (7 Hari Terakhir)
                </h3>
                <canvas id="penjualanChart" height="100"></canvas>
            </div>

            {{-- Grafik Jumlah Transaksi --}}
            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Jumlah Transaksi per Hari</h3>
                <canvas id="transaksiChart" height="100"></canvas>
            </div>

            {{-- Grafik Metode Pembayaran --}}
            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Distribusi Metode Pembayaran</h3>
                <canvas id="metodePembayaranChart" height="100"></canvas>
            </div>

            {{-- Produk Terlaris (Pie Chart) --}}
            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Top 5 Produk Terlaris</h3>
                <canvas id="produkTerlarisChart" height="100"></canvas>
            </div>

            {{-- Stok Tersedia (Pie Chart) --}}
            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Top 5 Stok Produk</h3>
                <canvas id="stokProdukChart" height="100"></canvas>
            </div>

        </div>
    </div>

    {{-- Chart.js --}}
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2"></script>
    <script>
        // Grafik Penjualan
        const ctxPenjualan = document.getElementById('penjualanChart').getContext('2d');
        const gradient = ctxPenjualan.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.6)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        new Chart(ctxPenjualan, {
            type: 'line',
            data: {
                labels: {!! json_encode($penjualanHarian->pluck('tanggal')) !!},
                datasets: [{
                    label: 'Total Penjualan',
                    data: {!! json_encode($penjualanHarian->pluck('total')) !!},
                    backgroundColor: gradient,
                    borderColor: 'rgba(37, 99, 235, 1)',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointRadius: 5,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#d1d5db' },
                        grid: { color: 'rgba(229, 231, 235, 0.3)' }
                    },
                    x: {
                        ticks: { color: '#d1d5db' },
                        grid: { display: false }
                    }
                }
            }
        });

        // Grafik Transaksi
        const ctxTransaksi = document.getElementById('transaksiChart').getContext('2d');
        new Chart(ctxTransaksi, {
            type: 'bar',
            data: {
                labels: {!! json_encode($transaksiHarian->pluck('tanggal')) !!},
                datasets: [{
                    label: 'Jumlah Transaksi',
                    data: {!! json_encode($transaksiHarian->pluck('jumlah')) !!},
                    backgroundColor: 'rgba(234, 179, 8, 0.7)',
                    borderColor: 'rgba(202, 138, 4, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        color: '#ffffff',
                        font: {
                            weight: 'bold'
                        },
                        formatter: (value) => value
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#d1d5db' },
                        grid: { color: 'rgba(229, 231, 235, 0.3)' }
                    },
                    x: {
                        ticks: { color: '#d1d5db' },
                        grid: { display: false }
                    }
                }
            },
            plugins: [ChartDataLabels]
        });

        // Grafik Metode Pembayaran
        const ctxMetode = document.getElementById('metodePembayaranChart').getContext('2d');
        new Chart(ctxMetode, {
            type: 'doughnut',
            data: {
                labels: {!! json_encode($metodePembayaran->pluck('metode_pembayaran')) !!},
                datasets: [{
                    data: {!! json_encode($metodePembayaran->pluck('total')) !!},
                    backgroundColor: [
                        'rgba(14, 165, 233, 0.7)', // QRIS
                        'rgba(234, 179, 8, 0.7)',  // Cash
                        'rgba(139, 92, 246, 0.7)'  // Others
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: '#d1d5db' }
                    },
                    datalabels: {
                        color: '#fff',
                        font: {
                            weight: 'bold'
                        },
                        formatter: (value) => value
                    }
                }
            },
            plugins: [ChartDataLabels]
        });

        // Produk Terlaris Pie Chart
        const ctxProdukTerlaris = document.getElementById('produkTerlarisChart').getContext('2d');
        new Chart(ctxProdukTerlaris, {
            type: 'pie',
            data: {
                labels: {!! json_encode($produkTerlaris->pluck('product.nama')) !!},
                datasets: [{
                    data: {!! json_encode($produkTerlaris->pluck('total')) !!},
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.7)',
                        'rgba(34, 197, 94, 0.7)',
                        'rgba(239, 68, 68, 0.7)',
                        'rgba(234, 179, 8, 0.7)',
                        'rgba(139, 92, 246, 0.7)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: '#d1d5db' }
                    },
                    datalabels: {
                        color: '#fff',
                        font: {
                            weight: 'bold'
                        },
                        formatter: (value) => value
                    }
                }
            },
            plugins: [ChartDataLabels]
        });


        // Stok Produk Pie Chart
        const ctxStokProduk = document.getElementById('stokProdukChart').getContext('2d');
        new Chart(ctxStokProduk, {
            type: 'pie',
            data: {
                labels: {!! json_encode($stokTersedia->pluck('nama')) !!},
                datasets: [{
                    data: {!! json_encode($stokTersedia->pluck('stok')) !!},
                    backgroundColor: [
                        'rgba(34, 197, 94, 0.7)',
                        'rgba(59, 130, 246, 0.7)',
                        'rgba(234, 179, 8, 0.7)',
                        'rgba(239, 68, 68, 0.7)',
                        'rgba(139, 92, 246, 0.7)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: '#d1d5db' }
                    },
                    datalabels: {
                        color: '#fff',
                        font: {
                            weight: 'bold'
                        },
                        formatter: (value) => value
                    }
                }
            },
            plugins: [ChartDataLabels]
        });

    </script>
</x-app-layout>