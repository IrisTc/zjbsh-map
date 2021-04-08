module.exports = {
    devServer: {
        proxy: 'http://zjbsh.zjhwrc.com'
    }
        // proxy: {
        //     '/api': {
        //       target: 'http://zjbsh.zjhwrc.com', // 你要代理的域名和端口号，要加上http
        //       changeOrigin: true, // 跨域
        //       pathRewrite: {
        //         '^/api': '' // 这里用‘/api’代替target里面的地址，组件中调用接口时直接用api代替 比如我要调用'http://xxx.com:8080/api/NEWS/getNews.json?page=1&pageSize=1
        //       }
        //     }
        // } 
}
  