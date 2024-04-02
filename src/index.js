const express = require('express');// common js
const path = require('path');//common js giải quyết đường dẫn tương đối ,tuyệt đối
require('dotenv').config();//common js gọi thư viện env => lấy giá trị
const app = express(); // app của express
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

//nếu port undefine thì nên dùng || 8888 thì sẽ chạy 8888 tránh ứng dụng ko chạy đc
const port = process.env.PORT || 8888; //port => hardcode . uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);
//khai báo route 
app.use('/',webRoutes);//tham số đầu tiên phân biệt các route và điểm khác biệt giữa các route


app.listen(port,hostname, () => console.log(`Example app listening on port ${port}!`))
