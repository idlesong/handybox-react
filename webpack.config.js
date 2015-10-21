var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './js/index.js'
  ],
  output: {
    path: __dirname + '/static/',
    publicPath: '/static/',
    filename: 'bundle.js',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.woff/,   loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.woff2$/,   loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf/,    loader: 'file-loader' },
      { test: /\.eot/,    loader: 'file-loader' },
      { test: /\.svg/,    loader: 'file-loader' }
      // { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?module!cssnext-loader') }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
