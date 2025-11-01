import { type UserConfig } from 'relion'

export const baseConfig: UserConfig = {
	context: { isMonorepo: true },
	_default: {
		lifecycle: 'all',
		bump: ['package.json'],
		changelog: {
			review: true,
			partials: { releaseTitle: 'v{{newVersion}}' },
		},
		commit: {
			gpgSign: true,
			message: 'release({{package.name}}): v{{newVersion}}',
		},
		tag: { gpgSign: true },
	},
	_github: {
		lifecycle: ['changelog'],
		logLevel: 'silent',
		context: { commitRefLinks: false, footerChangelogUrl: true },
		changelog: {
			output: 'stdout',
			commitRange: 'latest-release',
			header: '',
			partials: { header: '', body: '{{fromFile}}' },
		},
	},
}