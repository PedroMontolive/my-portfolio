import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
const ASSET_URL = process.env.ASSET_URL || '';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    base: `${ASSET_URL}`,
    optimizeDeps: {
        esbuildOptions: {
            target: ['es2020', 'safari14'],
        },
        include: ['esm-dep > cjs-dep']
    },
    resolve: {
        alias: {
            ziggy: 'vendor/tightenco/ziggy/dist/vue.es.js',
        },
    },
    server: {
        cors: true
    },
    build: {
        target: ['es2020', 'safari14'],
        minify: true,
    },
});
