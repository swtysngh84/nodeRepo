var mongoose=require('mongoose');
var Todo=mongoose.model('Todo',{
    text:{
      type:String, 
      required: true,
      minlength: 1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
    type:Number,
        default:null
}
});
module.exports={Todo};

//var newTodo=new Todo({
  //  text:'some mognoose'
//});
//to save and it return promise
//newTodo.save().then((doc)=>{
  //  console.log(doc);
//},(e)=>{
  //   console.log(e);
//});