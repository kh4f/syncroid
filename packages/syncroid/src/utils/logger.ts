import type { LogLevel } from '@/types'

let logLevel: LogLevel = 'minimal'

export const setLogLevel = (value: LogLevel) => logLevel = value

export const log = (...args: unknown[]) => {
	if (logLevel !== 'silent') console.log('[syncroid]', ...args)
}

export const logVerbose = (...args: unknown[]) => {
	if (logLevel === 'verbose') log(...args)
}