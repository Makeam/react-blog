/* eslint-disable */

var path = require('path');

var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],

    output: {
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.(eot|png|ttf|svg|woff|woff2)$/,
            loader: 'url-loader'
          },
          {
            test: /\.css$/,
            use:[
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options:{
                  importLoaders: 1
                }
              }
            ]
          }
        ]
    },
    resolve:{
        modules: [
             path.join(__dirname, "src"),
             "node_modules"
        ]
    
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally
  
      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR updates
    ]
};
