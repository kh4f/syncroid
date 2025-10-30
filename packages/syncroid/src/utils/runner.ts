import { spawnSync } from 'node:child_process'
import { logVerbose, throwError } from '@/utils'

export const run = (command: string, args: string[] = []): string => {
	const proc = spawnSync(command, args, { encoding: 'utf-8' })
	if (proc.stderr) {
		if (proc.status === 0) logVerbose(proc.stderr.trim())
		else throwError(proc.stderr.trim())
	}
	return proc.stdout.trim()
}