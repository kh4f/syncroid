import { readdirSync } from 'node:fs'
import { join } from 'node:path/posix'

export function findPaths(root: string, include: RegExp[], exclude: RegExp[] = []): string[] {
	const result: string[] = []

	function walk(dir: string) {
		const entries = readdirSync(dir, { withFileTypes: true })

		for (const entry of entries) {
			const path = join(dir, entry.name)

			const isPathExcluded = exclude.some(r => r.test(path))
			if (isPathExcluded) continue

			if (entry.isDirectory()) {
				walk(path)
			} else {
				const isPathIncluded = include.some(r => r.test(path))
				if (isPathIncluded) result.push(path)
			}
		}
	}

	walk(root)
	return result
}