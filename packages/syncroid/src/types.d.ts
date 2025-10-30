export interface UserConfig {
	root?: string
	dest?: string
	logLevel?: LogLevel
}

export type ResolvedConfig = Required<UserConfig>

export type LogLevel = 'verbose' | 'minimal' | 'silent'