const {ObjectID}=require('mongodb');
var express=require('express');
var bodyParser=require('body-parser')
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
app=express();
Const Port=process.env.PORT || 2000;
app.use(bodyParser.json());  
app.post('/todos',(req,res)=>{
var todo=new Todo({
    text:req.body.text
});
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
});
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
         res.send({todos});
    },(e)=>{
           res.status(400).send(e);
    })
})
    app.get('/todos/:id',(req,res)=>{
        var id=req.params.id;
        if(!ObjectID.isValid(id))
        {
        return console.log('id not valid');
        }
         Todo.findById(id).then((todos)=>{
        if(!todos)
            {
                return res.status(400).send();
            }
        res.send({todos});
    }).catch((e)=>{
        res.status(400).send();
    })
    });

app.listen(Port,()=>{
    console.log(`started on port ${Port}`)
});
module.exports={app};