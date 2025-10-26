export interface UserConfig {
	root?: string
	include?: RegExp[]
	exclude?: RegExp[]
	dest?: string
}

export type ResolvedConfig = Required<UserConfig>