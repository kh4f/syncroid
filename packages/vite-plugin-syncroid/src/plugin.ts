import type { Plugin } from 'vite'
import syncroidCore from 'syncroid'

export default (entries: string[], dest: string): Plugin => ({
	name: 'vite-plugin-syncroid',
	closeBundle: () => syncroidCore(entries, dest),
})