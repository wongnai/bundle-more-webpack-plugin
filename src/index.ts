import { Compiler } from 'webpack'

const PLUGIN_NAME = 'BundleMoreWebpackPlugin'

const DEFAULT_ENTRY_NAME = 'client'

function injectEntry(entryImport: string[] | undefined, newEntrys: string[]) {
	if (!entryImport) {
		throw new Error(
			`Could not find an entry named. See https://webpack.js.org/concepts/entry-points/ for an overview of webpack entries.`,
		)
	}
	entryImport.unshift(...newEntrys)
}

export class BundleMoreWebpackPlugin {
	entryName: string
	paths: string[]

	constructor(paths: string[], entryName = DEFAULT_ENTRY_NAME) {
		this.paths = paths
		this.entryName = entryName
	}

	apply(compiler: Compiler) {
		compiler.hooks.entryOption.tap('BundleMoreWebpackPlugin', (_, entry): any => {
			if (typeof entry !== 'function') {
				injectEntry(entry[this.entryName].import, this.paths)
			} else if (typeof entry === 'function') {
				const entryPromise = entry()

				entry = () =>
					entryPromise.then(e => {
						injectEntry(e[this.entryName].import, this.paths)
						return e
					})
			}
		})
	}
}
