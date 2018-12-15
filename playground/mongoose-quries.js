const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
var id='5c138e230cbcf8f4205580e411';
if(!ObjectID.isValid(id))
    {
        return console.log('id not valid');
    }

//Todo.find({
 //   _id:id
//}).then((todos)=>{
  //  console.log('Todos ',todos);
//});
//Todo.findOne({
  //   _id:id/
//}).then((todos)=>{
  //  console.log('Todos ',todos);
//});
Todo.findById(id).then((todos)=>{
    if(!todos)
        {
            return console.log('Id not found');
        }
    console.log('Todos BY ID: ',todos);
}).catch((e)=>console.log(e));