import { basename, join } from 'node:path/posix'
import { run, resolveConfig, findPaths } from '@/utils'
import type { UserConfig } from '@/types'

export default function syncroid(config: UserConfig) {
	const resolvedConfig = resolveConfig(config)
	const entries = findPaths(resolvedConfig)

	const dirsToRemove: string[] = []
	for (const entry of entries)
		if (entry.endsWith('/'))
			dirsToRemove.push(join(resolvedConfig.dest, basename(entry)))

	if (dirsToRemove.length) run('adb', ['shell', 'rm', '-rf', ...dirsToRemove])

	run('adb', ['push', ...entries, resolvedConfig.dest, '--sync'])
}