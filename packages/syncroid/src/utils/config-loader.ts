import { pathToFileURL, resolve } from 'node:url'
import type { UserConfig } from '@/types'

export const loadConfigFile = async (configPath: string): Promise<UserConfig | undefined> => {
	try {
		const configFileURL = pathToFileURL(resolve(process.cwd(), configPath)).href
		return ((await import(configFileURL)) as { default: UserConfig }).default
	} catch {
		return undefined
	}
}