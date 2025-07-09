<x-app-layout>
    <x-slot name="header">
        <div class="flex justify-between items-center">
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ __('Point of Sale') }}
            </h2>
            <div class="flex items-center space-x-4 gap-3">

                <!-- Icon Scan Barcode -->
                <a href="{{ route('scanner.index') }}" class="relative">
                    <svg class="w-7 h-7 text-gray-800 dark:text-white" fill="none" stroke="currentColor"
                        stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 4a1 1 0 011-1h3M17 3h3a1 1 0 011 1v3M21 20a1 1 0 01-1 1h-3M4 21a1 1 0 01-1-1v-3M7 12h.01M11 12h.01M15 12h.01" />
                    </svg>
                </a>

                <!-- Icon Keranjang -->
                <a href="{{ route('cart.index') }}" class="relative">
                    <svg class="w-7 h-7 text-gray-800 dark:text-white" fill="none" stroke="currentColor"
                        stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2L17 13M7 13h10" />
                    </svg>
                    @if($items->count() > 0)
                        <span
                            class="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 leading-none select-none">
                            {{ $items->sum('quantity') }}
                        </span>
                    @endif
                </a>
            </div>
    </x-slot>

    <div class="py-6 text-white">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div
                class="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg border border-gray-200 dark:border-gray-700">
                <div class="px-6 pt-6 mb-1 pb-4 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">

                    {{-- Notifikasi --}}
                    @if (session('success'))
                        <p x-data="{ show: true }" x-show="show" x-transition x-init="setTimeout(() => show = false, 3000)"
                            class="pb-1 mb-4 ml-1 text-xs text-green-600 dark:text-green-400">
                            {{ session('success') }}
                        </p>
                    @endif

                    @if (session('error'))
                        <p x-data="{ show: true }" x-show="show" x-transition x-init="setTimeout(() => show = false, 3000)"
                            class="pb-1 mb-4 ml-1 text-xs text-red-600 dark:text-red-400">
                            {{ session('error') }}
                        </p>
                    @endif

                    @if (request('product-search'))
                        <h2
                            class="mb-4 text-sm font-semibold leading-tight bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white">
                            Hasil pencarian untuk: <strong>{{ request('product-search') }}</strong>
                        </h2>
                    @endif

                    <form method="GET" action="{{ route('pos.index') }}" class="flex items-center gap-3">
                        <x-text-input id="product-search" name="product-search" type="text"
                            class="w-full mr-2 text-sm py-2 px-3 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Cari berdasarkan nama produk..." value="{{ request('product-search') }}"
                            autofocus />
                        <x-primary-button type="submit" class="text-xs px-4 py-2 whitespace-nowrap">
                            {{ __('Search') }}
                        </x-primary-button>
                        @if (request('product-search'))
                            <a href="{{ route('pos.index') }}"
                                class="text-xs text-gray-300 hover:underline whitespace-nowrap">
                                Reset
                            </a>
                        @endif
                    </form>
                </div>
                <div class="p-4 text-gray-900 dark:text-gray-100">
                    <!-- Daftar Produk -->
                    <div id="product-list" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        @forelse($products as $product)
                            <div
                                class="relative group bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                                <form action="{{ route('pos.add') }}" method="POST" class="absolute inset-0 z-10">
                                    @csrf
                                    <input type="hidden" name="product_id" value="{{ $product->id }}">
                                    <input type="hidden" name="quantity" value="1">
                                    <button type="submit" class="w-full h-full" title="Tambah ke keranjang"></button>
                                </form>

                                <div class="w-full h-28 overflow-hidden rounded-md mb-3">
                                    <img src="{{ asset('storage/' . $product->foto) }}" alt="{{ $product->nama }}"
                                        class="w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-300" />
                                </div>

                                <h5 class="text-sm font-semibold truncate w-full text-center">{{ $product->nama }}</h5>
                                <p class="text-xs text-gray-600 dark:text-gray-300 mt-1">Rp
                                    {{ number_format($product->harga, 0, ',', '.') }}
                                </p>
                            </div>
                        @empty
                            <p class="col-span-full text-center text-gray-500 dark:text-gray-400 py-10">
                                Produk tidak ditemukan.
                            </p>
                        @endforelse
                    </div>
                    {{-- Pagination Links --}}
                    <div class="mt-6 flex justify-center">
                        {{ $products->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    @push('scripts')
        <script>
            // Fitur pencarian produk live di client side
            const searchInput = document.getElementById('product-search');
            const productCards = document.querySelectorAll('#product-list > div');

            searchInput.addEventListener('input', function () {
                const keyword = this.value.toLowerCase().trim();
                productCards.forEach(card => {
                    const name = card.querySelector('h5').textContent.toLowerCase();
                    card.style.display = name.includes(keyword) ? '' : 'none';
                });
            });

            // Submit form saat tekan Enter
            searchInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.form.submit();
                }
            });
        </script>
    @endpush
</x-app-layout>