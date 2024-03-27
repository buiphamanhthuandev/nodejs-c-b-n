const express = require('express');// common js
const path = require('path');//common js giải quyết đường dẫn tương đối ,tuyệt đối
require('dotenv').config();//common js gọi thư viện env => lấy giá trị
const app = express(); // app của express

//nếu port undefine thì nên dùng || 8888 thì sẽ chạy 8888 tránh ứng dụng ko chạy đc
const port = process.env.PORT || 8888; //port => hardcode . uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')//tạo html bằng js

app.get('/', (req, res) => res.send('Hello World!'))//ko khai báo route thì làm web biết bạn có những rou nào?

app.get('/abc', (req, res) => {
    res.send('Hello World heahe!')
})
app.get('/thethao', (req, res) => {
    //res.send('<h1>Hello World heahe!</h1>')
    //render tạo view động
    res.render('sample.ejs')
})
app.listen(port,hostname, () => console.log(`Example app listening on port ${port}!`))
