const path = require('path');
const express = require('express');

const configViewEngine = (app)=>{
    //console.log(">>> check __dirname: ", path.join('./src','views'))
    app.set('views', path.join('./src','views'))
    app.set('view engine', 'ejs')//tạo html bằng ejs
    //config static files
    //express tự động biết tất cả các static
    app.use(express.static(path.join('./src','public')));
}
module.exports = configViewEngine;