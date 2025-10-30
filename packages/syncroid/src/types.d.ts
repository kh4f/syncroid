export interface UserConfig {
	root?: string
	include?: (string | RegExp | (string | RegExp)[])[]
	exclude?: (string | RegExp | (string | RegExp)[])[]
	dest?: string
	aggregatePaths?: boolean
	logLevel?: LogLevel
}

export type ResolvedConfig = Required<UserConfig>

export type LogLevel = 'verbose' | 'minimal' | 'silent'