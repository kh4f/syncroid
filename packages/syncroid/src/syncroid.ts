import { basename, join } from 'node:path/posix'
import { run, findPaths } from '@/utils'

export default function syncroid({
	root,
	include,
	exclude = [],
	dest,
}: {
	root: string
	include: RegExp[]
	exclude?: RegExp[]
	dest: string
}) {
	const entries = findPaths(root, include, exclude)

	for (const entry of entries) {
		if (entry.endsWith('/')) {
			run('adb', ['shell', 'rm', '-rf', join(dest, basename(entry))])
		}
	}

	run('adb', ['push', ...entries, dest, '--sync'])
}