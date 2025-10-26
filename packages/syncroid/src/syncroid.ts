import { basename, join } from 'node:path/posix'
import { run, findPaths } from '@/utils'
import type { SyncroidOptions } from '@/types'

export default function syncroid(opts: SyncroidOptions) {
	const entries = findPaths(opts)

	for (const entry of entries) {
		if (entry.endsWith('/')) {
			run('adb', ['shell', 'rm', '-rf', join(opts.dest, basename(entry))])
		}
	}

	run('adb', ['push', ...entries, opts.dest, '--sync'])
}