const path = require('path');

module.exports = {
  entry: './src/jupyter_hover_tooltip/static/index.js',  // Entry point
  output: {
    path: path.resolve(__dirname, 'lib'),  // Bundled output
    filename: 'index.js',  // Output bundled JS file
  },
  mode: 'production',  // or 'development'
  resolve: {
    extensions: ['.js', '.json']  // Handle JavaScript and JSON files
  }
};
