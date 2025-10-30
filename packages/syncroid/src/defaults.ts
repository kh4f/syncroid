import type { ResolvedConfig } from '@/types'

export const defaultConfig: ResolvedConfig = {
	source: '.',
	include: ['**'],
	exclude: ['**/node_modules/**', '**/.git/**'],
	dest: '/storage/emulated/0/documents/syncroid',
	logLevel: 'minimal',
	configPath: 'syncroid.config.ts',
}