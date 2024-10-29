const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const path = require('path')

module.exports = {
  node: {
    fs: 'empty'
  },
  entry: ['./src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      filename: '[path][query]',
      algorithm: 'gzip',
      deleteOriginalAssets: false
    }),
    new NodePolyfillPlugin()
  ]
}
