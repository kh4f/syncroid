import { type UserConfig } from 'relion'

export const baseConfig: UserConfig = {
	_default: {
		lifecycle: 'all',
		bump: ['package.json'],
		changelog: { review: true },
		commit: {
			gpgSign: true,
			message: 'release({{package.name}}): v{{newVersion}}',
		},
		tag: { gpgSign: true },
	},
	_github: {
		lifecycle: ['changelog'],
		logLevel: 'silent',
		context: { commitRefLinks: false, footerChangelogUrl: true, isMonorepo: true },
		changelog: {
			output: 'stdout',
			commitRange: 'latest-release',
			header: '',
			partials: { header: '', body: '{{fromFile}}' },
		},
	},
}