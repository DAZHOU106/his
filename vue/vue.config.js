const path = require('path')
const webpack = require('webpack')
function resolve (dir) {{
  return path.join(__dirname,dir)
}}
module.exports = {

   publicPath:'/',
   outputDir:'dist',
   assetsDir: '',
   chainWebpack: config=> {
      config.resolve.alias
      .set('images',resolve('src/assets/images'))
   },
   css:{
    loaderOptions:{
      sass:{
        prependData:`@import "~@/styles/variable.scss";`
      }
    
    }
   }
    // devServer: {
        
    //     host: '192.168.0.3',
    //     port: 8088,
    //     https: false,
    //     hotOnly: false,
    // }
  }