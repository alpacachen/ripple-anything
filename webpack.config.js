const path = require('path')
module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            { test: /\.css$/, use: 'style-loader' },
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
};
