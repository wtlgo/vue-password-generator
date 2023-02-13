import { ManifestOptions } from "vite-plugin-pwa";

export const manifest: Partial<ManifestOptions> = {
    name: "Password Generator",
    short_name: "PG",
    background_color: "#000000",
    display: "standalone",
    icons: [
        {
            src: "/favicon.ico",
            type: "image/x-icon",
            sizes: "16x16 32x32",
        },
        {
            src: "/icons/icon-192.png",
            type: "image/png",
            sizes: "192x192",
        },
        {
            src: "/icons/icon-512.png",
            type: "image/png",
            sizes: "512x512",
        },
        {
            src: "/icons/icon-192-maskable.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "maskable",
        },
        {
            src: "/icons/icon-512-maskable.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "maskable",
        },
    ],
};
