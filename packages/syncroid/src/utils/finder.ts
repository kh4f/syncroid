import { readdirSync } from 'node:fs'
import { join } from 'node:path/posix'
import { minimatch } from 'minimatch'
import type { ResolvedConfig } from '@/types'

const matchesPattern = (value: string, pattern: string | RegExp) => {
	if (typeof pattern === 'string') return minimatch(value, pattern)
	return pattern.test(value)
}

export const findPaths = (config: ResolvedConfig): string[] => {
	const walk = (dir: string): [boolean, string[]] => {
		const entries = readdirSync(dir, { withFileTypes: true })
		let isFullyIncluded = true
		const paths: string[] = []

		for (const entry of entries) {
			const path = join(dir, entry.name)

			const isPathExcluded = config.exclude.some(p => matchesPattern(path, p))
			if (isPathExcluded) continue

			if (entry.isDirectory()) {
				const [isSubdirFullyIncluded, subPaths] = walk(path)
				if (config.aggregatePaths && isSubdirFullyIncluded && subPaths.length > 0) {
					paths.push(path)
				} else {
					paths.push(...subPaths)
					isFullyIncluded = false
				}
			} else {
				const isPathIncluded = config.include.some(p => matchesPattern(path, p))
				if (isPathIncluded) paths.push(path)
				else isFullyIncluded = false
			}
		}

		if (config.aggregatePaths && isFullyIncluded && paths.length > 0) return [true, [dir]]

		return [isFullyIncluded, paths]
	}

	const [, paths] = walk(config.root)
	return paths
}