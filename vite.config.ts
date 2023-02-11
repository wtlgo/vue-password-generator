import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                name: "Password Generator",
                short_name: "PG",
                icons: [
                    {
                        src: "/favicon.ico",
                        type: "image/x-icon",
                        sizes: "16x16 32x32",
                    },
                    {
                        src: "/icon-192.png",
                        type: "image/png",
                        sizes: "192x192",
                    },
                    {
                        src: "/icon-512.png",
                        type: "image/png",
                        sizes: "512x512",
                    },
                    {
                        src: "/icon-192-maskable.png",
                        type: "image/png",
                        sizes: "192x192",
                        purpose: "maskable",
                    },
                    {
                        src: "/icon-512-maskable.png",
                        type: "image/png",
                        sizes: "512x512",
                        purpose: "maskable",
                    },
                ],
            },
        }),
        vue(),
    ],
});
