export interface UserConfig {
	root?: string
	includePattern?: RegExp[]
	excludePatterns?: RegExp[]
	dest?: string
	aggregatePaths?: boolean
}

export type ResolvedConfig = Required<UserConfig>