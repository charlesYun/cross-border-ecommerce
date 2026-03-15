import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
    // 开发环境使用 /，生产环境使用 /cross-border-ecommerce/
    base: process.env.NODE_ENV === "production" ? "/cross-border-ecommerce/" : "/",
    build: {
        outDir: "dist",
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom", "react-router-dom"],
                    ui: ["lucide-react"],
                },
            },
        },
    },
});
