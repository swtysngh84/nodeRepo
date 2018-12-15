const {ObjectID}=require('mongodb');
var {mongoose}=require('./../server/db/mongoose');
var {Todo}=require('./models/todo');
//Todo.remove({}).then((result)=>{
//    console.log(result)
//});