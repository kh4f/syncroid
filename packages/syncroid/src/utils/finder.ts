import { readdirSync } from 'node:fs'
import { join } from 'node:path/posix'
import type { ResolvedConfig } from '@/types'

export const findPaths = (config: ResolvedConfig): string[] => {
	const result: string[] = []

	const walk = (dir: string) => {
		const entries = readdirSync(dir, { withFileTypes: true })

		for (const entry of entries) {
			const path = join(dir, entry.name)

			const isPathExcluded = config.exclude.some(r => r.test(path))
			if (isPathExcluded) continue

			if (entry.isDirectory()) {
				walk(path)
			} else {
				const isPathIncluded = config.include.some(r => r.test(path))
				if (isPathIncluded) result.push(path)
			}
		}
	}

	walk(config.root)
	return result
}