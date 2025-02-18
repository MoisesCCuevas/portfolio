const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "app.js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json'],
    alias: {
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Pages': path.resolve(__dirname, 'src/pages/'),
      '@Types': path.resolve(__dirname, 'src/types/'),
      '@Store': path.resolve(__dirname, 'src/store/'),
      '@Api': path.resolve(__dirname, 'src/api/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new Dotenv({
      path: './.env.dev',
    }),
  ],
  devServer: {
    compress: true,
    port: 3000
  }
}