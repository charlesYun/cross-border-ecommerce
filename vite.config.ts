import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
    // 开发环境 (serve) 使用 /，生产环境 (build) 使用 /cross-border-ecommerce/
    base: command === "build" ? "/cross-border-ecommerce/" : "/",
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
}));
