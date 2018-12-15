const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoDb',(err,db)=>{
    if(err)
    {
        return console.log('enable to connect');        
    }
    
    console.log('connected');
 
    db.collection('Todos').findOneAndUpdate(
        {_id:4},{
            $set:{
                name:'swty s'
            },$inc:{
                age:1
            }
        },{
            returnOriginal:false
        }
                                           
    ).then((res)=>{
        console.log(res);
    })
    db.close();
});
