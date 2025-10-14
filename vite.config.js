import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add this server configuration for client-side routing
  server: {
    historyApiFallback: true,
  },
  // Add this build configuration for production
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // This is the key part - handle all routes by serving index.html
  preview: {
    historyApiFallback: true,
  },
});