export interface UserConfig {
	root: string
	include?: RegExp[]
	exclude?: RegExp[]
	dest: string
}