import { spawn } from 'node:child_process'
import { basename, join } from 'node:path/posix'

const run = (command: string, args: string[] = []) => {
	const proc = spawn(command, args)
	proc.stdout.on('data', data => process.stdout.write(`${data}`))
	proc.stderr.on('data', data => process.stderr.write(`${data}`))
}

export default function syncroid(entries: string[], dest: string) {
	for (const entry of entries) {
		if (entry.endsWith('/')) {
			run('adb', ['shell', 'rm', '-rf', join(dest, basename(entry))])
		}
	}
	run('adb', ['push', ...entries, dest, '--sync'])
}