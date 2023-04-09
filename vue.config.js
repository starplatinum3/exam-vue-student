'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: String.raw`D:\proj\springBoot\exam-sys-db2\src\main\resources\static\student`,
  assetsDir: 'static',
//   overlay: {
//     warnings: false,
//     errors: false
// },

  // lintOnSave: true,
    lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8001,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        // target: 'http://localhost:8000',
        // target: 'http://localhost:8001',
        
        target: 'http://43.142.150.223:8003',
        // target: 'http://localhost:8003',
        // 这是 打包了之后的配置吗
        changeOrigin: true
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack (config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
