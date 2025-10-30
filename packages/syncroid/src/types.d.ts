export interface UserConfig {
	root?: string
	include?: ['**']
	exclude?: FilterPattern[]
	dest?: string
	logLevel?: LogLevel
}

export type ResolvedConfig = Required<UserConfig>

export type FilterPattern = string | RegExp | (string | RegExp)[]

export type LogLevel = 'verbose' | 'minimal' | 'silent'