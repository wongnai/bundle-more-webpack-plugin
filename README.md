# Bundle More Webpack Plugin

[![semantic-release](https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Webpack Plugin to bundle extra sources to your app.

ps. Support Webpack >= 5

## Installation

```
yarn add --dev bundle-more-webpack-plugin
```

### Usage

#### In your webpack config

```js
const { BundleMoreWebpackPlugin } = require('bundle-more-webpack-plugin')

module.exports = {
    ...
    plugins: [
        ...,
        new BundleMoreWebpackPlugin(
            ['file-path-to-bundle']
        )
    ]
}
```

custom entry name

```js
const { BundleMoreWebpackPlugin } = require('bundle-more-webpack-plugin')

module.exports = {
    ...
    plugins: [
        ...,
        new BundleMoreWebpackPlugin(
            ['file-path-to-bundle']
            , 'main' // default 'client'
        )
    ]
}
```
