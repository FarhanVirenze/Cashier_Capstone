<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-lg text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Transaksi Penjualan') }}
        </h2>
    </x-slot>

    <div class="py-4">
        <div class="max-w-5xl mx-auto sm:px-4 lg:px-6">
            <div class="space-y-4">

                {{-- Notifikasi --}}
                @if (session('success'))
                    <p x-data="{ show: true }" x-show="show" x-transition x-init="setTimeout(() => show = false, 3000)"
                        class="text-sm text-green-600 dark:text-green-400 font-medium">
                        {{ session('success') }}
                    </p>
                @endif

                @forelse ($transaksi as $trx)
                    <div
                        class="bg-white dark:bg-gray-800 shadow rounded border border-gray-200 dark:border-gray-700 p-4 flex flex-col space-y-3 text-gray-700 dark:text-gray-300 text-sm">

                        {{-- Header: tanggal & kasir --}}
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-2 text-gray-800 dark:text-gray-200 font-semibold">
                                {{-- Calendar Icon --}}
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{{ \Carbon\Carbon::parse($trx->tanggal)->translatedFormat('d F Y') }}</span>
                            </div>
                            <div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400 font-medium">
                                {{-- User Icon --}}
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5.121 17.804A10.97 10.97 0 0112 15c2.761 0 5.27 1.12 7.121 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Kasir: {{ $trx->nama_user }}</span>
                            </div>
                        </div>

                        {{-- Detail info transaksi --}}
                        <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                            <div class="flex items-center space-x-2">
                                <span><strong>Pelanggan:</strong> {{ $trx->nama_pelanggan ?? '-' }}</span>
                            </div>

                            <div class="flex items-center space-x-2">
                                <span><strong>Nomor:</strong> {{ $trx->nomor_pelanggan ?? '-' }}</span>
                            </div>

                            <div class="flex items-center space-x-2">
                                <span><strong>Metode:</strong> {{ $trx->metode_pembayaran }}</span>
                            </div>

                            <div class="flex items-center space-x-2">
                                <span><strong>Total:</strong> Rp{{ number_format($trx->total, 0, ',', '.') }}</span>
                            </div>

                            <div class="flex items-center space-x-2">
                                <span><strong>Bayar:</strong> Rp{{ number_format($trx->jumlah_bayar, 0, ',', '.') }}</span>
                            </div>

                            <div class="flex items-center space-x-2">
                                <span><strong>Kembalian:</strong> Rp{{ number_format($trx->kembalian, 0, ',', '.') }}</span>
                            </div>
                        </div>

                        {{-- Aksi tombol --}}
                        <div class="flex space-x-6 mt-3">
                            <a href="{{ route('transaksi.cetak', $trx->id) }}" target="_blank"
                                class="flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200">
                                {{-- Printer Icon --}}
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6 9v6h12V9M6 9v-2a2 2 0 012-2h8a2 2 0 012 2v2m-6 7v4m-4-4h8" />
                                </svg>
                                Cetak
                            </a>

                            @auth
                                @if (auth()->user()->is_admin)
                                    <form action="{{ route('transaksi.destroy', $trx->id) }}" method="POST" class="inline-block"
                                        onsubmit="return confirm('Yakin ingin menghapus transaksi ini?')">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit"
                                            class="flex items-center ml-2 text-red-600 hover:text-red-800 font-semibold text-sm transition-colors duration-200">
                                            {{-- Trash Icon --}}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a1 1 0 011 1v1H9V4a1 1 0 011-1z" />
                                            </svg>
                                            Hapus
                                        </button>
                                    </form>
                                @endif
                            @endauth
                        </div>
                    </div>
                @empty
                    <div class="text-center text-gray-500 dark:text-gray-400 text-sm font-medium">
                        Tidak ada data transaksi.
                    </div>
                @endforelse

                {{-- Pagination --}}
                <div class="mt-6">
                    {{ $transaksi->links() }}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>