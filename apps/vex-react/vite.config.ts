/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/tests/setup.ts",
		include: ["**/*.{test,spec}.{js,ts,tsx,jsx}"],
	},
  plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
