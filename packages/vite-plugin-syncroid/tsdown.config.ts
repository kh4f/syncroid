import { defineConfig } from 'tsdown'

const isProd = process.argv.includes('--production')

export default defineConfig({
	entry: 'src/index.ts',
	sourcemap: isProd ? false : 'inline',
	minify: isProd,
})