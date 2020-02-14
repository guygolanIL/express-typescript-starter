const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

const OUTPUT_FOLDER = 'dist';

const config = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, OUTPUT_FOLDER),
  },
};

if (config.mode !== 'production') {
  config.plugins.push(new WebpackShellPlugin({onBuildEnd: [`nodemon ${OUTPUT_FOLDER}/bundle.js`]}));
}

module.exports = config;