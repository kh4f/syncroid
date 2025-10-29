export interface UserConfig {
	root?: string
	includePattern?: (RegExp | string)[]
	excludePatterns?: (RegExp | string)[]
	dest?: string
	aggregatePaths?: boolean
}

export type ResolvedConfig = Required<UserConfig>