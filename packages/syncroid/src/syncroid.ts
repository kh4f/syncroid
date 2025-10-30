import { join, relative } from 'node:path/posix'
import { run, resolveConfig, findAllFiles, filterPaths } from '@/utils'
import type { UserConfig } from '@/types'
import { setLogLevel } from '@/utils'

export default function syncroid(config: UserConfig) {
	const resolvedConfig = resolveConfig(config)
	const { source, include, exclude, dest, logLevel } = resolvedConfig
	setLogLevel(logLevel)

	const sourceFiles = filterPaths(findAllFiles(source), include, exclude)
	console.log(sourceFiles)
	const destFiles = filterPaths(run('adb', ['shell', `test -d ${dest} && find ${dest} -type f`]).split('\n')
		.map(p => relative(dest, p.trim())), include, exclude)

	const filesToRemove: string[] = []
	for (const destFile of destFiles)
		if (!sourceFiles.includes(destFile)) filesToRemove.push(destFile)

	if (filesToRemove.length) run('adb', ['shell', 'rm', '-rf', ...filesToRemove])

	for (const sourceFile of sourceFiles)
		run('adb', ['push', sourceFile, join(resolvedConfig.dest, sourceFile), '--sync'])
}