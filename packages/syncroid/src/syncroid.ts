import { spawn } from 'node:child_process'

const run = (command: string, args: string[] = []) => {
	const proc = spawn(command, args)
	proc.stdout.on('data', data => process.stdout.write(`${data}`))
	proc.stderr.on('data', data => process.stderr.write(`${data}`))
}

export default function syncroid(entries: string[], dest: string) {
	run('adb', ['push', ...entries, dest])
}