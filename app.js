const express = require("express")
const querystring = require('querystring')
const mysql = require('mysql')
// const pool = mysql.createPool({
//   host:'',
//   port:'',
//   user:'',
//   password:'',
//   databases:'',
// })
const app = express()
// ↓ - 设置本地服务器端口
app.listen(8099, () => {
  console.log('The server has been started on 8099 o(*￣▽￣*)ブ');
})
// ↓ - 将请求数据解析为对象
app.use(express.urlencoded({ extended:false }))
// ↓ - 设置静态资源目录
app.use(express.static( "./static" ))
// ↓ - 设置主页地址
app.get( '/', function(req,res){
  res.sendFile(__dirname + "/static/html/index.html")
})