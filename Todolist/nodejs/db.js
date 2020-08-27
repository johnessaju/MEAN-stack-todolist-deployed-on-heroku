const mongoose = require('mongoose');

//mongodb://localhost:27017/taskdb

mongoose.connect("mongodb+srv://johnes:johnes@cluster0.wh92o.mongodb.net/johnesbase?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log('connected to database');
    }
    else
    console.log('cannot connect to database '+JSON.stringify(err,undefined,5));
});

module.exports= mongoose;