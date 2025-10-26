import { spawnSync } from 'node:child_process'
import { basename, join } from 'node:path/posix'
import { findPaths } from '@/utils/finder'

const run = (command: string, args: string[] = []) => {
	const proc = spawnSync(command, args, { encoding: 'utf-8' })
	if (proc.stdout) process.stdout.write(`[syncroid] ${proc.stdout}`)
	if (proc.stderr) process.stderr.write(`[syncroid] ${proc.stderr}`)
}

export default function syncroid(root: string, include: RegExp[], dest: string) {
	const entries = findPaths(root, include)

	for (const entry of entries) {
		if (entry.endsWith('/')) {
			run('adb', ['shell', 'rm', '-rf', join(dest, basename(entry))])
		}
	}

	run('adb', ['push', ...entries, dest, '--sync'])
}