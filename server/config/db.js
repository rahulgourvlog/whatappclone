const mongoose=require("mongoose");

const Connection=mongoose.connect("mongodb+srv://rahul1234:kaushal123@cluster0.sqs2lsx.mongodb.net/?retryWrites=true&w=majority");
module.exports=Connection;