const mongoose=require("mongoose");
const {model,Schema}=require("mongoose");

const messageSchema=new Schema({
message:String,
name:String,
timestamp:String,
received:Boolean

})

const Message=model("messages",messageSchema);
module.exports=Message;