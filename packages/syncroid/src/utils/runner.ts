import { spawnSync } from 'node:child_process'

export const run = (command: string, args: string[] = []) => {
	const proc = spawnSync(command, args, { encoding: 'utf-8' })
	if (proc.stdout) process.stdout.write(`[syncroid] ${proc.stdout}`)
	if (proc.stderr) process.stderr.write(`[syncroid] ${proc.stderr}`)
}