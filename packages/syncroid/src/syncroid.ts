import { basename, join } from 'node:path/posix'
import { run, resolveConfig, findPaths } from '@/utils'
import type { UserConfig } from '@/types'
import { setLogLevel } from '@/utils'

export default function syncroid(config: UserConfig) {
	const resolvedConfig = resolveConfig(config)
	setLogLevel(resolvedConfig.logLevel)
	const entries = findPaths(resolvedConfig)

	const dirsToRemove: string[] = []
	for (const entry of entries)
		if (entry.endsWith('/'))
			dirsToRemove.push(join(resolvedConfig.dest, basename(entry)))

	if (dirsToRemove.length)
		if (run('adb', ['shell', 'rm', '-rf', ...dirsToRemove]).status !== 0) return

	for (const entry of entries)
		if (run('adb', ['push', entry, join(resolvedConfig.dest, entry), '--sync']).status !== 0) return
}