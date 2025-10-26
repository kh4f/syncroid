export interface FinderOptions {
	root: string
	include: RegExp[]
	exclude?: RegExp[]
}

export interface UserConfig extends FinderOptions {
	dest: string
}