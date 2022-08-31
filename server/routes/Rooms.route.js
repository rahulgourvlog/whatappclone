// const express=require("express");
// const Router=require("express");
// const Roomsmodel = require("../model/rooms.model");
// const Roomscontroller=Router();


// Roomscontroller.post("/post",async(req,res)=>{
//     const { name } = req.body;
// console.log(req.body);
// if (!name){
//     return res.json({ error: 'Choose a name for the Room' });
// }
       
// const rooms= new Roomsmodel(req.body)
//  await rooms.save((err,data)=>{
//     if(err){
//         console.log(err)
//       return   res.status(500).send("error in the server ")
//     }
//     else{
//        return   res.status(201).send({message:"created successfully",rooms})
//     }
// })
// })

// Roomscontroller.get("/get/",async(req,res)=>{
 

//     try {
//             const rooms = await Roomsmodel.find();
        
//              return res.status(200).json({ rooms });
//             } catch (err) {
//                  return res.status(500).json({ error: 'Error on server' });
//             };
     
// });



// module.exports=Messagecontroller;
