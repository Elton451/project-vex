/// <reference types="vitest" />
import path from "node:path";
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
    include: ["**/*.{test,spec}.{js,ts,tsx,jsx}"],
  },
  resolve: {
    alias: {
      "@shared/assets": path.resolve(__dirname, "./src/shared/assets"),
      "@shared/components/ui": path.resolve(
        __dirname,
        "./src/shared/components/ui",
      ),
      "@shared/components": path.resolve(__dirname, "./src/shared/components"),
      "@shared/hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@shared/utils": path.resolve(__dirname, "./src/shared/utils"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@lib": path.resolve(__dirname, "./lib"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
});
