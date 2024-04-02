const getHomePage = (req,res)=>{
    res.send('Hello World!');
}
const getABC = (req,res)=>{
    res.send('Hello World heahe! abc')
}
const getTheThao = (req,res)=>{
    res.render('sample.ejs')
}
//exports ra nhiều biến => dùng object {}
module.exports = {
    getHomePage,getABC,getTheThao
}