const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const removeFilePart = dirname => path.parse(dirname).dir;
const RemovePlugin = require('remove-files-webpack-plugin');
const webpack = require('webpack');

const devExtraFiles = new RegExp(/(\.css\.js|\.css\.js\.map)$/, 'm');
const prodExtraFiles = new RegExp(/(\.css\.js|\.css\.js\.map|\.js\.map|\.css\.map)$/, 'm');

// console.log(glob.sync(`{./src/templates/**/head-scripts.es.js,./src/templates/**/index.es.js,./src/templates/**/*.scss}`).reduce((x, y) => {
//   return path.basename(y).indexOf('head-scripts.es') < 0 ? Object.assign(x, { [removeFilePart(y) + '/index']: y }) : Object.assign(x, {[removeFilePart(y) + '/head-scripts']: y})
// }, {}));

module.exports = (env, argv) => {
  return {
    entry: glob.sync(`{./src/templates/**/head-scripts.es.js,./src/templates/**/index.es.js,./src/templates/**/*.scss}`).reduce((x, y) => {
      return path.basename(y).indexOf('head-scripts.es') < 0 ? Object.assign(x, { [removeFilePart(y) + '/index']: y }) : Object.assign(x, {[removeFilePart(y) + '/head-scripts']: y})
    }, {}),
    mode: 'development',
    output: {
      path: path.resolve(__dirname),
      filename: (pathData) => {
        return pathData.chunk.name.indexOf('/styles/') < 0 ? '[name].js' : '[name].css.js';
      }
    },
    devtool: 'inline-source-map',
    target: ['web', 'es5'],
    module: {
      rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './src/assets/webfonts',
                publicPath: '../../../../assets/webfonts'
              }
            }
          ]
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
        },
      ]
    },
    plugins: [
      new ProgressBarPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
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
          // parameters for 'before normal compilation' stage.
        },
        watch: {
          // parameters for 'before watch compilation' stage.
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