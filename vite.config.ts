import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from "url";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: 3000,
        open: true,
    },
    base: "/qrcode/",
    publicDir: "public",
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['schedule.ico'],
            manifest: {
                name: 'Activity Planner',
                short_name: 'Planner',
                description: 'Plan activities with integrated todo lists',
                theme_color: '#6366f1',
                start_url: "/qrcode/",
                scope: '/qrcode/',
                icons: [
                    {
                        src: '/qrcode/schedule.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ]
});
