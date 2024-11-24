const path = require('path');

module.exports = {
  entry: './src/jupyter_hover_tooltip/static/index.js', // Your main JS file
  output: {
    path: path.resolve(__dirname, 'lib'), // Output directory
    filename: 'index.js', // Output file name
  },
  mode: 'production', // or 'development' depending on your stage
  resolve: {
    extensions: ['.js', '.json'], // Resolve JavaScript files
  },
  externals: {
    // Exclude JupyterLab core libraries from bundling (since they're already available in the JupyterLab environment)
    '@jupyterlab/cells': '@jupyterlab/cells', // Keep this external
  },
};
