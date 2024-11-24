const path = require('path');

module.exports = {
    entry: './src/jupyter_hover_tooltip/static/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'amd',  // Added: Required for Jupyter compatibility
        publicPath: 'auto'     // Added: Helps with asset loading
    },
    mode: 'development',       // Changed: Better for debugging
    devtool: 'source-map',    // Added: Helps with debugging
    module: {                  // Added: Required for processing different file types
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
        '@jupyterlab/cells': '@jupyterlab/cells',
        '@jupyterlab/application': '@jupyterlab/application',
        '@jupyterlab/notebook': '@jupyterlab/notebook',
        '@jupyterlab/services': '@jupyterlab/services',
        '@lumino/widgets': '@lumino/widgets'
    }
};