import { basename, join } from 'node:path/posix'
import { run, findPaths } from '@/utils'
import type { UserConfig } from '@/types'
import { defaultConfig } from '@/defaults'

export default function syncroid(config: UserConfig) {
	const resolvedConfig = { ...defaultConfig, ...config }
	const entries = findPaths(resolvedConfig)

	for (const entry of entries) {
		if (entry.endsWith('/')) {
			run('adb', ['shell', 'rm', '-rf', join(resolvedConfig.dest, basename(entry))])
		}
	}

	run('adb', ['push', ...entries, resolvedConfig.dest, '--sync'])
}