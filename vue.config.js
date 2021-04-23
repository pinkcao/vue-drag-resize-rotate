// vue.config.js
module.exports = {
  // 组件样式内联
  css: {
    extract: {
      filename: `lib/[name].css`,
      chunkFilename: `lib/[name].css`
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add('/packages/')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
