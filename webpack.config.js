var path = require('path')
var webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV
const { VueLoaderPlugin } = require('vue-loader')
console.log(NODE_ENV)

module.exports = {
  entry: NODE_ENV == 'development' ? './src/main.js' : './src/index.js',
  // entry: './src/main.js',
  output: {
    // path: path.resolve(__dirname, './dist'),
    // publicPath: '/dist/',
    // filename: 'vue-drag-resize-rotate.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: NODE_ENV == 'development' ? 'build.js' : 'vue-drag-resize-rotate.js',
    // filename: 'build.js',
    libraryTarget:'umd',
    umdNamedDefine:true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm-browser.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: 'eval-cheap-module-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
