import { basename, join } from 'node:path/posix'
import { run, findPaths } from '@/utils'
import type { SyncroidOptions } from '@/types'

export default function syncroid({ root, include, exclude = [], dest }: SyncroidOptions) {
	const entries = findPaths(root, include, exclude)

	for (const entry of entries) {
		if (entry.endsWith('/')) {
			run('adb', ['shell', 'rm', '-rf', join(dest, basename(entry))])
		}
	}

	run('adb', ['push', ...entries, dest, '--sync'])
}