export interface FinderOptions {
	root: string
	include: RegExp[]
	exclude?: RegExp[]
}

export interface SyncroidOptions extends FinderOptions {
	dest: string
}