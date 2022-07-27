import Webpack, { Compiler } from 'webpack'

const PLUGIN_NAME = 'BundleMoreWebpackPlugin'

const DEFAULT_ENTRY_NAME = 'client'

function injectEntry(
	options: Compiler['options'],
	entryName: string,
	injectFilepath: string[],
): void {
	const entry: any =
		typeof options.entry === 'function' ? options.entry() : Promise.resolve(options.entry)

	options.entry = () =>
		entry.then((e: any) => {
			const injectEntry: typeof e[string] | undefined = e[entryName]

			if (!injectEntry?.import) {
				throw new Error(
					`Could not find an entry named '${entryName}'. See https://webpack.js.org/concepts/entry-points/ for an overview of webpack entries.`,
				)
			}

			injectEntry.import.unshift(...injectFilepath)

			return e
		})
}
export class BundleMoreWebpackPlugin {
	entryName: string
	paths: string[]

	constructor(paths: string[], entryName = DEFAULT_ENTRY_NAME) {
		this.paths = paths
		this.entryName = entryName
	}

	apply(compiler: Webpack.Compiler) {
		injectEntry(compiler.options, this.entryName, this.paths)
	}
}
