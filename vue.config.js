/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-08 14:29:30
 * @LastEditors: tao
 * @LastEditTime: 2021-02-14 17:04:28
 */
module.exports = {
  configureWebpack: {
    resolve: {
      //省略文件后缀名
      extensions: ['js', 'css', 'vue'],
      alias: {
        'components': '@/components',
        'views': '@/views',
        'assets': '@/assets',
        'network': '@/network',
        'router': '@/router',
        'ant': '@/ant',
        'common': '@/common',
        'store': '@/store'
      }
    }
  },
  publicPath: './',
  assetsDir: 'static',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#7546C9',
            'link-color': '#7546C9',
            'border-radius-base': '20px'
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  devServer: {
    open: true, //是否自动弹出浏览器页面
    proxy: {
      '/api': {
        target: 'http://localhost:9004', //API服务器的地址
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: { //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/api': ''
        }
      }
    },
  }
}