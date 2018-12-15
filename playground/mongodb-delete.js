const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoDb',(err,db)=>{
    if(err)
    {
        return console.log('enable to connect');        
    }
    
    console.log('connected');
 
//delete many
    //db.collection('Todos').deleteMany({name:'soni'}).then((res)=>{
    //   console.log(res);
//   })

    //delete one
   // db.collection('Todos').deleteOne({name:'soni'}).then((res)=>{
     //   console.log(res);
    //})
    //findoneAndDelete
    db.collection('Todos').findOneAndDelete({name:'soni'}).then((res)=>{
        console.log(res);
    })
    db.close();
});