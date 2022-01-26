const fs = require('fs')
const path = require('path')

const rootPath = process.cwd()
const buildScriptPath = path.join('build', 'index.js')
const testPath = path.join(rootPath, 'test')
const outputScriptPath = path.join(testPath, buildScriptPath)

const outputText = fs.readFileSync(outputScriptPath).toString()

if (!outputText.includes('./test/index.js')) {
    throw new Error('No input source found in build')
}

if (!outputText.includes("console.log('Yeah Script1')") || !outputText.includes("console.log('Yeah Script2')")) {
    throw new Error('No external bundle paths source found in build')
}

console.log('This plugin is fine to be used.')
