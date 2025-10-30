import type { Plugin } from 'vite'
import syncroidCore from 'syncroid'

export default (args: Parameters<typeof syncroidCore>): Plugin => ({
	name: 'vite-plugin-syncroid',
	closeBundle: () => syncroidCore(...args),
})