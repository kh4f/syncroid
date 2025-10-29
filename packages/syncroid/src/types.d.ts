export interface UserConfig {
	root?: string
	include?: (RegExp | string)[]
	exclude?: (RegExp | string)[]
	dest?: string
	aggregatePaths?: boolean
}

export type ResolvedConfig = Required<UserConfig>