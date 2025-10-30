import { spawnSync } from 'node:child_process'

export const run = (command: string, args: string[] = []): string => {
	const proc = spawnSync(command, args, { encoding: 'utf-8' })
	if (proc.stderr && proc.status !== 0) throw new Error(proc.stderr.trim())
	return proc.stdout.trim()
}