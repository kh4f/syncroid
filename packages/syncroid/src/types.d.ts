export interface UserConfig {
	root?: string
	include?: RegExp[]
	exclude?: RegExp[]
	dest?: string
	aggregatePaths?: boolean
}

export type ResolvedConfig = Required<UserConfig>