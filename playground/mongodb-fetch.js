const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoDb',(err,db)=>{
    if(err)
    {
        return console.log('enable to connect');        
    }
    
    console.log('connected');
 
    db.collection('Todos').find({name:'soni'}).toArray().then((doc)=>{
       // console.log('Todos count : ',count);
        console.log(JSON.stringify(doc,undefined,2));
    },(err)=>{
        console.log('Unable to Fetch');
    });
    db.close();
});
