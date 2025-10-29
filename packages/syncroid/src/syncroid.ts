import { basename, join } from 'node:path/posix'
import { run, resolveConfig, findPaths } from '@/utils'
import type { UserConfig } from '@/types'

export default function syncroid(config: UserConfig) {
	const resolvedConfig = resolveConfig(config)
	const entries = findPaths(resolvedConfig)

	for (const entry of entries) {
		if (entry.endsWith('/')) {
			run('adb', ['shell', 'rm', '-rf', join(resolvedConfig.dest, basename(entry))])
		}
	}

	run('adb', ['push', ...entries, resolvedConfig.dest, '--sync'])
}