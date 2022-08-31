const express=require("express");
const Router=require("express");
const Message = require("../model/message.model");
const Messagecontroller=Router();


Messagecontroller.post("/post",async(req,res)=>{
console.log(req.body)
const message= new Message(req.body)
 await message.save((err,data)=>{
    if(err){
        console.log(err)
      return   res.status(500).send("error in the server ")
    }
    else{
       return   res.status(201).send({message:"created successfully",id:message.id,data:message})
    }
})
})

Messagecontroller.get("/get/sync",(req,res)=>{
    const {id}=req.params;
    console.log(id)
  Message.find((err,data)=>{
    if(err){
        return  res.status(400).send("error in getting",err)
     }
     else{
         return  res.status(200).send(data)
     }
     
});

})

module.exports=Messagecontroller;
