const express=require("express");
const Connection = require("./config/db");
const Messagecontroller = require("./routes/message.route");
const port=process.env.PORT || 8000;
const app=express();
const cors=require("cors")
const Pusher = require("pusher");
const { default: mongoose } = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
res.status(200).send("send success")
})

const db=mongoose.connection;
// once mongoose connection is open it will trigger a function check if any change happen 
// in the collection if something is change in the database the function is fired
db.once("open",()=>{
    console.log("db connected")
// now we will creating a collection 
const messagecollection=db.collection("messages");
//console.log(messagecollection)
const changestream=messagecollection.watch();

changestream.on("change",(change)=>{
    console.log(change);
    if(change.operationType==="insert"){
        const messageDetails=change.fullDocument;
        pusher.trigger("messages", "inserted", {
name:messageDetails.name,
message:messageDetails.message,
timestamp:messageDetails.timestamp,
received:messageDetails.received


          });
    }else{
        console.log("error in pusher trigger")
    }
})


})






const pusher = new Pusher({
    appId: "1470658",
    key: "cab4578339f56847755b",
    secret: "868bef5cf4eb65fcf424",
    cluster: "ap2",
    useTLS: true
  });

app.use('/message',Messagecontroller)

app.listen(port, async()=>{
try{
    await Connection;
    console.log("connected to the db")
}catch(err){
    console.log(err);

}
console.log(`listening to the port ${port}`)
})



