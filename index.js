const express = require('express')
const app = express()
const ejs = require('ejs')
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
let tasks = []

app.get('/',(req, res)=>{
    res.render('index', {tasks: tasks})

})

app.post('/add',(req, res)=>{
    console.log(req.body);
    const newtask = req.body
    tasks.push(newtask)
    res.redirect('/')
})
app.post("/delete/:index",(req,res)=>{
    let index = req.params.index
    console.log(index);
    tasks.splice(index,1)
    res.redirect("/")
})














const port = 1300

app.listen(port,()=>{
    console.log(`app started on ${port}`);

})