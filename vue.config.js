const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,


    // Config du proxy :
    devServer: {
      proxy: {
        '^/api':{
          target:'http://localhost:8080',
          changeOrigin:true
        },
      }
    }



})