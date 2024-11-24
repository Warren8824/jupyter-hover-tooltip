const path = require('path');

module.exports = {
    entry: './src/jupyter_hover_tooltip/static/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'amd',
        publicPath: 'auto'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    externals: {
        '@jupyterlab/application': {
            commonjs: '@jupyterlab/application',
            commonjs2: '@jupyterlab/application',
            amd: '@jupyterlab/application'
        },
        '@jupyterlab/notebook': {
            commonjs: '@jupyterlab/notebook',
            commonjs2: '@jupyterlab/notebook',
            amd: '@jupyterlab/notebook'
        },
        '@lumino/widgets': {
            commonjs: '@lumino/widgets',
            commonjs2: '@lumino/widgets',
            amd: '@lumino/widgets'
        },
        '@jupyterlab/cells': {
            commonjs: '@jupyterlab/cells',
            commonjs2: '@jupyterlab/cells',
            amd: '@jupyterlab/cells'
        },
        '@jupyterlab/services': {
            commonjs: '@jupyterlab/services',
            commonjs2: '@jupyterlab/services',
            amd: '@jupyterlab/services'
        }
    }
};