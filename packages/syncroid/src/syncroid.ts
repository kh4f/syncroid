import { join, relative } from 'node:path/posix'
import { run, resolveConfig, findAllFiles } from '@/utils'
import type { UserConfig } from '@/types'
import { setLogLevel } from '@/utils'

export default function syncroid(config: UserConfig) {
	const resolvedConfig = resolveConfig(config)
	setLogLevel(resolvedConfig.logLevel)

	const sourceFiles = findAllFiles(resolvedConfig.root)
	const destFiles = run('adb', ['shell', 'find', resolvedConfig.dest, '-type', 'f']).split('\n').map(s => s.trim())

	const filesToRemove: string[] = []
	for (const destFile of destFiles) {
		const sourceEntry = relative(resolvedConfig.dest, destFile)
		if (!sourceFiles.includes(sourceEntry)) filesToRemove.push(destFile)
	}
	if (filesToRemove.length) run('adb', ['shell', 'rm', '-rf', ...filesToRemove])

	for (const sourceFile of sourceFiles)
		run('adb', ['push', sourceFile, join(resolvedConfig.dest, sourceFile), '--sync'])
}