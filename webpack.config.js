const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = (argv) => {
  const prod = argv.mode === 'production';

  return {
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'hidden-source-map' : 'eval',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'index.js'
    },
    devServer: {
      // 개발 서버 설정
      static: path.resolve(__dirname, 'public'),
      port: 3000,
      hot: true, // 핫 모듈 교체(HMR) 활성화
      compress: true,
      open: false,
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/i,
          exclude: /node_modules/,
          use: ['babel-loader', 'ts-loader']
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      }),
      new webpack.ProvidePlugin({
        React: 'react'
      }),
      new InterpolateHtmlPlugin({ PUBLIC_URL: '' }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'public/index.html'),
        minify:
          prod === 'production'
            ? {
                collapseWhitespace: true,
                removeComments: true
              }
            : false,
        favicon: path.resolve(__dirname, 'public/favicon.ico')
      }),
      new CleanWebpackPlugin()
    ]
  };
};
