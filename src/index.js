const express = require('express') // common js
const path = require('path')//common js giải quyết đường dẫn tương đối ,tuyệt đối
const app = express() // app của express
const port = 8081 //port 
//config template engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.send('Hello World!'))//ko khai báo route thì làm web biết bạn có những rou nào?

app.get('/abc', (req, res) => {
    res.send('Hello World heahe!')
})
app.get('/thethao', (req, res) => {
    //res.send('<h1>Hello World heahe!</h1>')
    //render tạo view động
    res.render('sample.ejs')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))