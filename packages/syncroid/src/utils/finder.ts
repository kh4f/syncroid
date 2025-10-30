import { readdirSync } from 'node:fs'
import { join } from 'node:path/posix'

export const findAllFiles = (dir: string, fileList: string[] = []) => {
	const entries = readdirSync(dir, { withFileTypes: true })
	for (const entry of entries) {
		const entryPath = join(dir, entry.name)
		if (entry.isDirectory()) findAllFiles(entryPath, fileList)
		else fileList.push(entryPath)
	}
	return fileList
}