const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const fs = require('fs');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const removeFilePart = dirname => path.parse(dirname).dir;
const RemovePlugin = require('remove-files-webpack-plugin');
const webpack = require('webpack');

const devExtraFiles = new RegExp(/(\.css\.js|\.css\.js\.map)$/, 'm');
const prodExtraFiles = new RegExp(/(\.css\.js|\.css\.js\.map|\.js\.map|\.css\.map)$/, 'm');

console.log(glob.sync(`{./src/templates/**/*.es.js,./src/templates/**/*.scss}`).reduce((x, y) => Object.assign(x, {
  [removeFilePart(y) + '/index']: y,
}), {}));

module.exports = (env, argv) => {
  return {
    entry: glob.sync(`{./src/templates/**/*.es.js,./src/templates/**/*.scss}`).reduce((x, y) => Object.assign(x, {
      [removeFilePart(y) + '/index']: y,
    }), {}),
    output: {
      path: path.resolve(__dirname),
      filename: (pathData) => {
        return pathData.chunk.name.indexOf('/styles/') < 0 ? '[name].js' : '[name].css.js';
      }
    },
    devtool: false,
    module: {
      rules: [{
          test: /\.es.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }),
      new webpack.SourceMapDevToolPlugin({
        filename: '[name][ext].map',
        exclude: new RegExp(/(\.css\.js|\.es\.js)$/, 'm')
      }),
      new RemovePlugin({
        before: {
          // parameters for "before normal compilation" stage.
        },
        watch: {
          // parameters for "before watch compilation" stage.
        },
        after: {
          test: [{
            folder: './src/templates',
            method: (absoluteItemPath) => {
              return argv.mode === 'development' ? devExtraFiles.test(absoluteItemPath) : prodExtraFiles.test(absoluteItemPath)
            },
            recursive: true
          }]
        }
      })
    ],
    optimization: {
      minimize: false
    }
  };
};