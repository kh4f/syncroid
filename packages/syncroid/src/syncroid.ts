import { basename, join } from 'node:path/posix'
import { findPaths } from '@/utils/finder'
import { run } from '@/utils/runner'

export default function syncroid(root: string, include: RegExp[], dest: string) {
	const entries = findPaths(root, include)

	for (const entry of entries) {
		if (entry.endsWith('/')) {
			run('adb', ['shell', 'rm', '-rf', join(dest, basename(entry))])
		}
	}

	run('adb', ['push', ...entries, dest, '--sync'])
}