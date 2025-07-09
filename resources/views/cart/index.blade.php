<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-lg text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Keranjang Belanja') }}
        </h2>
    </x-slot>

    <div class="py-4">
        <div class="max-w-5xl mx-auto sm:px-4 lg:px-6">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-4 text-gray-900 dark:text-gray-100 text-sm">

                    @if(session('success'))
                        <div x-data="{ show: true }" x-show="show" x-init="setTimeout(() => show = false, 3000)"
                            x-transition class="mb-4 p-3 text-green-600 dark:text-green-400  shadow">
                            {{ session('success') }}
                        </div>
                    @endif

                    @if(session('error'))
                        <div x-data="{ show: true }" x-show="show" x-init="setTimeout(() => show = false, 4000)"
                            x-transition class="mb-4 p-3 text-red-600 dark:text-red-400 shadow">
                            {{ session('error') }}
                        </div>
                    @endif

                    @if($items->isEmpty())
                        <p class="text-center text-gray-500 dark:text-gray-400 italic">Keranjang kosong.</p>
                    @else
                        <div class="space-y-4">
                            @foreach($items as $item)
                                <div
                                    class="relative p-3 bg-gray-50 dark:bg-gray-700 rounded-md shadow hover:shadow-lg transition-shadow duration-300 group">

                                    <div class="flex items-center justify-between gap-3">

                                        <!-- Gambar produk dengan tombol silang di pojok kanan atas gambar -->
                                        <div class="relative inline-block">
                                            <img src="{{ asset('storage/' . $item->product->foto) }}"
                                                alt="{{ $item->product->nama }}"
                                                class="w-14 h-14 object-cover rounded border border-gray-200 dark:border-gray-600" />
                                            @if(Auth::user()->is_admin)
                                                <form action="{{ route('cart.destroy', $item) }}" method="POST"
                                                    class="absolute top-0 right-0 z-10 transform translate-x-1/2 -translate-y-1/2">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit"
                                                        onclick="return confirm('Yakin ingin menghapus item ini?')"
                                                        class="bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:scale-110 transition p-1 rounded-full shadow w-5 h-5 flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none"
                                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </form>
                                            @endif
                                        </div>

                                        <!-- Info produk -->
                                        <div class="flex-1 min-w-0">
                                            <h5 class="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
                                                {{ $item->product->nama }}
                                            </h5>
                                            <p class="text-xs text-gray-600 dark:text-gray-300">
                                                Rp {{ number_format($item->product->harga, 0, ',', '.') }}
                                            </p>

                                            @if(Auth::user()->is_admin)
                                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                                    <small>User: {{ $item->user->name ?? 'Unknown' }}</small>
                                                </p>
                                            @endif
                                        </div>

                                        @if(!Auth::user()->is_admin)
                                        <!-- Kontrol jumlah hanya untuk user biasa -->
                                        <form action="{{ route('cart.update', $item) }}" method="POST"
                                            class="flex items-center gap-3 justify-center -ml-1">
                                            @csrf
                                            @method('PATCH')

                                            <button type="button"
                                                onclick="
                                                    let input = this.closest('form').querySelector('input[name=quantity]');
                                                    let val = parseInt(input.value);
                                                    if(val > 1) {
                                                        input.value = val - 1;
                                                        input.form.submit();
                                                    }"
                                                class="w-8 h-8 bg-red-200 dark:bg-red-600 text-red-800 dark:text-white rounded text-base flex items-center justify-center hover:bg-red-300 dark:hover:bg-red-500"
                                                aria-label="Kurangi jumlah">−</button>

                                            <input type="number" name="quantity" value="{{ $item->quantity }}" min="1"
                                                onchange="this.form.submit()"
                                                class="w-16 px-3 py-1 text-center text-sm border border-gray-300 rounded dark:bg-white dark:text-black focus:outline-none focus:ring focus:ring-indigo-300" />

                                            <button type="button"
                                                onclick="
                                                    let input = this.closest('form').querySelector('input[name=quantity]');
                                                    let val = parseInt(input.value);
                                                    input.value = val + 1;
                                                    input.form.submit();"
                                                class="w-8 h-8 mr-3 bg-indigo-200 dark:bg-indigo-600 text-indigo-800 dark:text-white rounded text-base flex items-center justify-center hover:bg-indigo-300 dark:hover:bg-indigo-500"
                                                aria-label="Tambah jumlah">+</button>
                                        </form>
                                        @endif
                                    </div>
                                </div>
                            @endforeach
                        </div>

                        @if(!Auth::user()->is_admin)
                        <!-- Total Harga & Form Checkout hanya untuk user biasa -->
                        <div class="mt-6 text-right text-sm font-semibold text-gray-900 dark:text-gray-100 border-t pt-4">
                            @php
                                $total = $items->reduce(function ($carry, $item) {
                                    return $carry + ($item->product->harga * $item->quantity);
                                }, 0);
                            @endphp
                            Total: Rp {{ number_format($total, 0, ',', '.') }}
                        </div>

                        <!-- Form Checkout -->
                        <form action="{{ route('cart.checkout') }}" method="POST" class="mt-6 space-y-4">
                            @csrf

                            <div class="grid md:grid-cols-3 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Nama
                                        Pelanggan</label>
                                    <input type="text" name="nama_pelanggan"
                                        class="mt-1 block w-full rounded-md dark:bg-gray-100 dark:text-black border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Opsional">
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Nomor
                                        Pelanggan</label>
                                    <input type="text" name="nomor_pelanggan"
                                        class="mt-1 block w-full rounded-md dark:bg-gray-100 dark:text-black border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Opsional">
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Metode
                                        Pembayaran</label>
                                    <select name="metode_pembayaran" required
                                        class="mt-1 block w-full rounded-md dark:bg-gray-100 dark:text-black border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                        <option value="cash">Cash</option>
                                        <option value="qris">QRIS</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Jumlah
                                        Bayar</label>
                                    <input type="number" step="0.01" name="jumlah_bayar" required
                                        class="mt-1 block w-full rounded-md dark:bg-gray-100 dark:text-black border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="Contoh: 50000">
                                </div>
                            </div>

                            <div class="text-right">
                                <button type="submit"
                                    class="inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-white hover:bg-green-700 transition ease-in-out duration-150">
                                    Cetak Struk & Simpan
                                </button>
                            </div>
                        </form>
                        @endif
                    @endif
                </div>
            </div>
        </div>
    </div>

    <style>
        .hidden-print {
            visibility: hidden;
            position: absolute;
            z-index: -9999;
        }

        @media print {
            body *:not(#print-area):not(#print-area *) {
                visibility: hidden !important;
            }
        }

        #print-area,
        #print-area * {
            visibility: visible !important;
        }

        #print-area {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 320px;
            /* atau ganti dengan 58mm jika pakai printer thermal roll */
            padding: 20px;
            background: #fff;
            font-family: monospace;
            font-size: 18px;
            line-height: 1.6;
            border: 1px solid #000;
        }

        #print-area h2 {
            font-size: 22px;
            text-transform: uppercase;
            margin: 0 0 5px 0;
        }

        #print-area table {
            width: 100%;
            border-collapse: collapse;
        }

        #print-area hr {
            border: none;
            border-top: 2px dashed #000;
            margin: 12px 0;
        }

        @page {
            margin: 0;
        }
    </style>

    @if(session('print_transaksi'))
        <div id="print-area" class="hidden-print">
            <div style="text-align: center; margin-bottom: 10px;">
                <h2>UMKM STORE</h2>
                <small style="font-size: 16px;">{{ session('print_transaksi')->tanggal }}</small>
            </div>

            <p style="margin-bottom: 12px;">
                <strong>Pelanggan:</strong> {{ session('print_transaksi')->nama_pelanggan ?? '-' }}<br>
                <strong>Kasir:</strong> {{ session('print_transaksi')->nama_user }}<br>
                <strong>Pembayaran:</strong> {{ strtoupper(session('print_transaksi')->metode_pembayaran) }}
            </p>

            <table style="margin-bottom: 12px;">
                @foreach(session('print_transaksi')->details as $item)
                    <tr>
                        <td colspan="2" style="border-bottom: 1px dashed #000; padding-bottom: 3px;">
                            <strong style="text-transform: uppercase;">{{ $item->nama_product }}</strong>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 60%;">{{ $item->jumlah }} x Rp{{ number_format($item->harga, 0, ',', '.') }}</td>
                        <td style="width: 40%; text-align: right;">Rp{{ number_format($item->total, 0, ',', '.') }}</td>
                    </tr>
                @endforeach
            </table>

            <hr>

            <table style="font-weight: bold;">
                <tr>
                    <td>Total</td>
                    <td style="text-align: right;">Rp{{ number_format(session('print_transaksi')->total, 0, ',', '.') }}
                    </td>
                </tr>
                <tr>
                    <td>Bayar</td>
                    <td style="text-align: right;">
                        Rp{{ number_format(session('print_transaksi')->jumlah_bayar, 0, ',', '.') }}</td>
                </tr>
                <tr>
                    <td>Kembali</td>
                    <td style="text-align: right;">Rp{{ number_format(session('print_transaksi')->kembalian, 0, ',', '.') }}
                    </td>
                </tr>
            </table>

            <p style="text-align: center; margin-top: 25px; text-transform: uppercase;">
                *** Terima kasih ***<br>
                UMKM Store
            </p>
        </div>

        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const printArea = document.getElementById('print-area');
                printArea.classList.remove('hidden-print');
                window.print();
                printArea.classList.add('hidden-print');

                fetch('{{ route('clear.print.session') }}', {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': '{{ csrf_token() }}'
                    }
                });
            });
        </script>
    @endif
</x-app-layout>