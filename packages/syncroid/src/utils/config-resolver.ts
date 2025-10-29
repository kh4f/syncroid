import type { ResolvedConfig, UserConfig } from '@/types'
import { defaultConfig } from '@/defaults'

export const resolveConfig = (userConfig: UserConfig): ResolvedConfig => ({
	...defaultConfig,
	...userConfig,
	include: [...new Set([...defaultConfig.include, ...(userConfig.include ?? [])])],
	exclude: [...new Set([...defaultConfig.exclude, ...(userConfig.exclude ?? [])])],
})