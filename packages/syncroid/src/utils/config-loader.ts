import { join } from 'node:path/posix'
import { pathToFileURL } from 'node:url'
import type { UserConfig } from '@/types'

export const loadConfigFile = async (configPath: string): Promise<UserConfig | undefined> => {
	try {
		const configFileURL = pathToFileURL(join(process.cwd(), configPath)).href
		return ((await import(configFileURL)) as { default: UserConfig }).default
	} catch {
		return undefined
	}
}