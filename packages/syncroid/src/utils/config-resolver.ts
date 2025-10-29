import type { ResolvedConfig, UserConfig } from '@/types'
import { defaultConfig } from '@/defaults'

export const resolveConfig = (userConfig: UserConfig): ResolvedConfig => {
	return { ...defaultConfig, ...userConfig }
}