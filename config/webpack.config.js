const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(process.cwd(), 'src', 'index.ts'),
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'main.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'src', 'index.html'),
      inject: 'body'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
  }
}