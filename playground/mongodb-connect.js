const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoDb',(err,db)=>{
    if(err)
    {
        return console.log('enable to connect');        
    }
    
    console.log('connected');
    db.collection('Todos').insertOne({
          _id:2,
        name:'soni',
        age:20
      
    },(err,result)=>{
        if(err){
            return console.log('error',err);  
        }  console.log(JSON.stringify(result.ops,undefined,2));  
    });
    db.close();
});
