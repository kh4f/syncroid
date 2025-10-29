export interface UserConfig {
	root?: string
	include?: (string | RegExp | (string | RegExp)[])[]
	exclude?: (string | RegExp | (string | RegExp)[])[]
	dest?: string
	aggregatePaths?: boolean
}

export type ResolvedConfig = Required<UserConfig>