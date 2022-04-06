/* eslint-disable */
const resolveApp = require('dwj-react-build/utils/paths')

module.exports = {
  entry: resolveApp('src/index.tsx'),
  devServer: {
    open: true
  }
}
