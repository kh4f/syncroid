import { defineConfig } from 'relion'
import { baseConfig } from '../../relion.config'

export default defineConfig({
	...baseConfig,
	tagPrefix: 'vite-plugin-syncroid@',
})