import { spawnSync } from 'node:child_process'
import { log, logVerbose, logError } from '@/utils'

export const run = (command: string, args: string[] = []) => {
	const proc = spawnSync(command, args, { encoding: 'utf-8' })
	if (proc.stdout) log(proc.stdout.trim())
	if (proc.stderr) {
		if (proc.status === 0) logVerbose(proc.stderr.trim())
		else logError(proc.stderr.trim())
	}
}