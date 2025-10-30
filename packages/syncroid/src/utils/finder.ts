import { readdirSync } from 'node:fs'
import { join } from 'node:path/posix'
import { minimatch } from 'minimatch'
import type { FilterPattern } from '@/types'

const matchesPattern = (value: string, pattern: string | RegExp) =>
	typeof pattern === 'string' ? minimatch(value, pattern) : pattern.test(value)

const matchesAllPatterns = (value: string, patterns: (string | RegExp)[]) =>
	patterns.every(p => matchesPattern(value, p))

const matches = (value: string, patterns: (string | RegExp | (string | RegExp)[])[]) =>
	patterns.some(p => Array.isArray(p) ? matchesAllPatterns(value, p) : matchesPattern(value, p))

export const filterPaths = (paths: string[], include: FilterPattern[] = [], exclude: FilterPattern[] = []) =>
	paths.filter(p => matches(p, include) && !matches(p, exclude))

export const findAllFiles = (dir: string, fileList: string[] = []) => {
	const entries = readdirSync(dir, { withFileTypes: true })
	for (const entry of entries) {
		const entryPath = join(dir, entry.name)
		if (entry.isDirectory()) {
			findAllFiles(entryPath, fileList)
		} else {
			fileList.push(entryPath)
		}
	}
	return fileList
}