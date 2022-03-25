const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.ts',
  output: {
    filename: 'js/bunild.js',
    path: path.resolve(__dirname, 'dist'),
    pubilcPath: '/'
  },
  devServer: {
    hot: 'only',
    hot: true,
    port: 1209
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: []
      },
      {
        test: /\.less$/,
        use: []
      },
      {
        test: /\.jsx?$/,
        use: []
      },
      {
        test: /\.tsx?$/,
        use: []
      }
    ]
  },
  plugins: []
}