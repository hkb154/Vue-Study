const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  // 开启代理服务器（方式一）
  // devServer: {
  //   proxy:'http://localhost:5000'
  // },

  // 开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/ks': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/ks' : ''},
        // ws: true, //用于支持WebSocket
        // changeOrigin: true  //用于控制请求头中的host值
      },
      '/xj': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/xj' : ''},
        //下面两个属性不写默认就为true
        // ws: true, //用于支持WebSocket
        // changeOrigin: true  //用于控制请求头中的host值
      }
    }
  }
})
