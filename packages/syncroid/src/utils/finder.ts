import { readdirSync } from 'node:fs'
import { join } from 'node:path/posix'
import { minimatch } from 'minimatch'
import type { ResolvedConfig } from '@/types'

const matchesPattern = (value: string, pattern: string | RegExp) =>
	typeof pattern === 'string' ? minimatch(value, pattern) : pattern.test(value)

const matchesAllPatterns = (value: string, patterns: (string | RegExp)[]) =>
	patterns.every(p => matchesPattern(value, p))

const matches = (value: string, patterns: (string | RegExp | (string | RegExp)[])[]) =>
	patterns.some(p => Array.isArray(p) ? matchesAllPatterns(value, p) : matchesPattern(value, p))

export const findPaths = (config: ResolvedConfig): string[] => {
	const walk = (dir: string): [boolean, string[]] => {
		const entries = readdirSync(dir, { withFileTypes: true })
		let isFullyIncluded = true
		const paths: string[] = []
		for (const entry of entries) {
			const path = join(dir, entry.name)
			const isPathExcluded = matches(path, config.exclude)
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
				const isPathIncluded = matches(path, config.include)
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