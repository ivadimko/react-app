const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postCssConfig = require('./config/postcss.config');

const context = path.resolve(__dirname, 'src');
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const cssPlugin = new ExtractTextPlugin('css/[name].css');


module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        exclude: /(node_modules)/,
        include: path.resolve(context, 'styles'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 3,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: postCssConfig
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'compact',
                sourceMap: true,
                sourceComments: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [ htmlPlugin, cssPlugin ],
  resolve: {
    extensions: [ ".js", ".jsx" ],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
};