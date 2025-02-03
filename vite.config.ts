import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		ViteImageOptimizer({
			test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
			includePublic: true,
			logStats: true,
			ansiColors: true,
			svg: {
				multipass: true,
			},
			png: {
				// https://sharp.pixelplumbing.com/api-output#png
				quality: 100,
			},
			jpeg: {
				// https://sharp.pixelplumbing.com/api-output#jpeg
				quality: 100,
			},
			jpg: {
				// https://sharp.pixelplumbing.com/api-output#jpeg
				quality: 100,
			},
			tiff: {
				// https://sharp.pixelplumbing.com/api-output#tiff
				quality: 100,
			},
			// gif does not support lossless compression
			// https://sharp.pixelplumbing.com/api-output#gif
			gif: {},
			webp: {
				// https://sharp.pixelplumbing.com/api-output#webp
				lossless: true,
			},
			avif: {
				// https://sharp.pixelplumbing.com/api-output#avif
				lossless: true,
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	css: {
		modules: { localsConvention: 'camelCaseOnly' },
	},
	esbuild: {
		drop: ['console', 'debugger'],
	},
	build: {
		chunkSizeWarningLimit: 1000, // Set limit to 1000 KB
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return 'vendor' // Split vendor libraries
					}
				},
			},
		},
	},
})
