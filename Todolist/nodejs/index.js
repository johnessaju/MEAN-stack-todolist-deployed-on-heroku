const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');

var path = require('path');//for loading static page path.join 

const mongoose= require('./db');
var rout= require('./routercontroller/taskcontroller');

const app=express();

var port = process.env.PORT||3000;

app.get('/',(req,res)=>{ // set all get reuest to index.html in dist
    res.sendFile(path.join(__dirname,'dist/todolist/index.html'))
});

app.use(express.static(path.join(__dirname,'dist/todolist'))); // to load static pages from

app.use(cors()); // so it can be accessed from different domain
app.use(bodyparser.json());
app.use('/tasks',rout);
app.listen(port,()=>{console.log("server started at port:"+port)});
