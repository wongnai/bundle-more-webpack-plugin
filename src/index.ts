import Webpack from 'webpack'
import InjectPlugin from 'webpack-inject-plugin'
import fs from 'fs'

const PLUGIN_NAME = 'BundleMoreWebpackPlugin'

export class BundleMoreWebpackPlugin{
    paths: string[]

    constructor(paths: string[]) {
        this.paths = paths
    }

    apply(compiler: Webpack.Compiler) {
        this.paths.forEach(path => {
            new InjectPlugin(() => {
                return fs.readFileSync(path, 'utf8')
            }).apply(compiler)
        })
    }
}
