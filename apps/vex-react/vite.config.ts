import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
	tanstackRouter({
		target: "react",
		autoCodeSplitting: true,
	}),
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
