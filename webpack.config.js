const path = require('path');

module.exports = {
  entry: './src/jupyter_hover_tooltip/static/index.js',  // Entry point
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',  // Bundled JS file
  },
  mode: 'production',  // or 'development'
  // Additional Webpack configurations (loaders, plugins, etc.)
};
