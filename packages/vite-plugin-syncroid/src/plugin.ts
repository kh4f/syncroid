import type { Plugin } from 'vite'
import syncroidCore, { type UserConfig } from 'syncroid'

export default (config: UserConfig): Plugin => ({
	name: 'vite-plugin-syncroid',
	closeBundle: () => syncroidCore(config),
})