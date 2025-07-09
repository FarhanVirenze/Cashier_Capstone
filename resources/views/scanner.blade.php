<x-app-layout>
    <div class="relative w-screen h-screen bg-black overflow-hidden">
        <!-- Tombol Kembali -->
        <a href="{{ route('pos.index') }}"
            class="absolute top-4 left-4 z-50 bg-white/80 text-black text-sm px-3 py-1 rounded-md shadow-md hover:bg-white transition duration-200">
            ← Kembali
        </a>

        <!-- Kamera Preview -->
        <video id="preview" class="w-full h-full object-cover scale-x-[-1]" autoplay playsinline></video>

        <!-- Frame Bidikan Barcode -->
        <div class="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
            <div class="relative w-2/3 h-1/3 border-2 border-white rounded-xl">
                <!-- Garis Animasi Scan -->
                <div class="absolute top-0 left-0 w-full h-0.5 bg-red-500 animate-scan-line"></div>
            </div>
        </div>
    </div>

    <!-- Tambahkan CSRF Token & Script -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="pos-url" content="{{ route('pos.index') }}">
    @vite(['resources/js/scanner.js']) {{-- Pastikan file JS kamu sudah diatur di Vite --}}
</x-app-layout>