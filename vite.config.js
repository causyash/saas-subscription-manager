import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  
  // Production optimizations
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: mode === "development",
    minify: mode === "production" ? "esbuild" : false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          charts: ["recharts"],
          utils: ["axios"]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  
  // Development server
  server: {
    port: 5173,
    host: true,
    open: true
  },
  
  // Preview server
  preview: {
    port: 4173,
    host: true
  },
  
  // Environment variables
  define: {
    __APP_ENV__: JSON.stringify(mode)
  },
  
  // Resolve aliases
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@lib": resolve(__dirname, "./src/lib"),
      "@context": resolve(__dirname, "./src/context")
    }
  }
}));

