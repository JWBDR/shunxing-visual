// dist打包后放入 dist/ 目录下，可浏览页面
// cli : node server
var express = require('express')
var app = express()
// hostname指的是访问的ip,这里是localhost代表本机
const hostname = 'localhost'
const port = 8080
app.use(express.static('./'))
app.listen(port, hostname, () => {
  console.log('server is running , url : http://localhost:8080/index')
})
