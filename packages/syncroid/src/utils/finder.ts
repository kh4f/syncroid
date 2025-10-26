import { readdirSync } from 'node:fs'
import { join } from 'node:path/posix'
import type { ResolvedConfig } from '@/types'

export const findPaths = (config: ResolvedConfig): string[] => {
	const walk = (dir: string): [boolean, string[]] => {
		const entries = readdirSync(dir, { withFileTypes: true })
		let isFullyIncluded = true
		const paths: string[] = []

		for (const entry of entries) {
			const path = join(dir, entry.name)

			const isPathExcluded = config.excludePatterns.some(r => r.test(path))
			if (isPathExcluded) continue

			if (entry.isDirectory()) {
				const [isSubdirFullyIncluded, subPaths] = walk(path)
				if (config.aggregatePaths && isSubdirFullyIncluded) {
					paths.push(path)
				} else {
					paths.push(...subPaths)
					isFullyIncluded = false
				}
			} else {
				const isPathIncluded = config.includePattern.some(r => r.test(path))
				if (isPathIncluded) paths.push(path)
				else isFullyIncluded = false
			}
		}

		if (config.aggregatePaths && isFullyIncluded) return [true, [dir]]

		return [isFullyIncluded, paths]
	}

	const [, paths] = walk(config.root)
	return paths
}