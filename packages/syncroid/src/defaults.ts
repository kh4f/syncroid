import type { ResolvedConfig } from '@/types'

export const defaultConfig: ResolvedConfig = {
	root: '.',
	includePattern: [],
	excludePatterns: [],
	dest: '/storage/emulated/0/Syncroid',
	aggregatePaths: false,
}