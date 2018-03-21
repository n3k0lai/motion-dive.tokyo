const path = require('path')

function cwd (file) {
  return path.join(process.cwd(), file || '')
}

module.exports = {
  entry: {
    entry: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'script.js'
  },
  resolve: {
    extensions: [ '.js', '.json' ],
    alias: {
      root: path.join(__dirname, '../src')
    },
    modules: [
      cwd('node_modules'),
      // this means you can get rid of dot hell
      // for example import 'components/Foo'
      // instead of import '../../components/Foo'
      cwd('src')
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}
