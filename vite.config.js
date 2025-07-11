import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/js/scanner.js',
                'resources/js/accessibility-widget.ts' // sudah benar
            ],
            refresh: true,
        }),
    ],
    build: {
        minify: false, // ← jika ingin hasil build tetap readable
    }
});
