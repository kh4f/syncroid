import { join, relative } from 'node:path/posix'
import { run, resolveConfig, findAllFiles, filterPaths } from '@/utils'
import { setLogLevel, log } from '@/utils'
import type { UserConfig } from '@/types'

export default function syncroid(config: UserConfig) {
	const resolvedConfig = resolveConfig(config)
	const { source, include, exclude, dest, logLevel } = resolvedConfig
	setLogLevel(logLevel)

	log('Syncing...')

	const sourceFiles = filterPaths(findAllFiles(source).map(p => relative(source, p)), include, exclude)
	const destFiles = filterPaths(run('adb', ['shell', `test -d ${dest} && find ${dest} -type f`]).split('\n')
		.map(p => relative(dest, p.trim())), include, exclude)

	const filesToRemove: string[] = []
	for (const destFile of destFiles)
		if (!sourceFiles.includes(destFile)) filesToRemove.push(destFile)

	if (filesToRemove.length) run('adb', ['shell', 'rm', '-rf', ...filesToRemove])

	for (const sourceFile of sourceFiles)
		run('adb', ['push', join(source, sourceFile), join(dest, sourceFile), '--sync'])

	log(`Pushed: ${sourceFiles.length}${filesToRemove.length ? `, removed: ${filesToRemove.length}` : ''}`)
}