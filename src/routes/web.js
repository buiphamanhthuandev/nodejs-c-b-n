const express = require('express');
const {getHomePage,getABC,getTheThao} = require('../controllers/homeController')
const router = express.Router();

//router.Method('/router',handler)
//ko khai báo route thì web biết bạn có những rou nào?
//hướng server đây chỉ là tên gọi thôi => chạy file controller thì mới chạy được
router.get('/', getHomePage);//việc không dùng dấu đóng mở ngoặc => express truyền biến req,res xuống
//route
router.get('/abc', getABC);
//route
router.get('/thethao',getTheThao)
module.exports = router;