const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 语法检查
  devServer: {
    port: 3001, // 设置端口号
    proxy: {
      '/api': {
        target: 'http://localhost:8088',
        pathRewrite: { '^/api': '' },
        ws: true, // 用于支持websocket
        changeOrigin: true, // 用于控制请求值中的host字段
      },
    },
  },
})
