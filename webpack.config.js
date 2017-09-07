const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');

const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLess = new ExtractTextPlugin({
    filename: "./css/[name].[contenthash].css",
    disable: !debug
});

// might want lodash
// mockaroo (for creating fake data)

const devRules = [
  {
    test: /\.css$/,
    //exclude: /(node_modules|bower_components)/,
    loader: 'style-loader!css-loader'
  },
  {
    test: /\.less$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'style-loader!css-loader!less-loader'
  },
]

const prodRules = [
  {
    test: /\.less$/,
    exclude: /(node_modules|bower_components)/,
    use: extractLess.extract({
      use: [{
        loader: "css-loader"
      }, {
        loader: "less-loader"
      }],
      // use style-loader in development
      fallback: "style-loader"
    })
  },
  {
    test: /\.css$/,
    use: extractLess.extract({
      use: [{
        loader: "css-loader"
      }],
      // use style-loader in development
      fallback: "style-loader"
    })
  }
]

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./src/js/client.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.svg|\.jpg|\.png/,
        loader: 'file-loader?name=images/[hash].[ext]'
        //loader: 'url-loader?name=images/[hash].[ext]'
        //loader: 'url-loader?publicPath=../&name=./images/[hash].[ext]'
      },
      {
        test: /\.woff|\.woff2|.eot|\.ttf/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      },
      
    ].concat(debug ? devRules : prodRules)
  },
  output: {
    path: __dirname + "/public",
    publicPath: "/public/",
    filename: debug ? "js/client.min.js" : "js/client-[hash:6].min.js"
  },
  devServer:{
      contentBase: 'public',
      historyApiFallback: true
  },
  plugins: debug ? [
    extractLess,
  ] : [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    
    new VisualizerPlugin({
      filename: '../stats.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index-prod.html'
    }),
    extractLess,
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ 
      mangle: true, 
      sourcemap: false,
      compress: {
        warnings: false,
      } 
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
};