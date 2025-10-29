import type { ResolvedConfig } from '@/types'

export const defaultConfig: ResolvedConfig = {
	root: '.',
	include: ['**'],
	exclude: ['**/node_modules', '**/.git'],
	dest: '/storage/emulated/0/Syncroid',
	aggregatePaths: false,
}