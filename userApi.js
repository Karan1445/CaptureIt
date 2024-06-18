const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const Schmeas=require("./Schemas/SchemasUser");
const express=require("express");
const SchemasUser = require("./Schemas/SchemasUser");
const app=express()

mongoose.connect("mongodb+srv://goheljitu164:Karan8141@cluster0.rzxbeqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
   app.use(cors());
   app.use(bodyParser.json());



   app.post("/addUser",async(req,res)=>{
    const datas=await Schmeas.find({contactNumber:req.body.contactNumber})

    if(datas.length===0){

        console.log(datas.length)
        const data=await Schmeas(req.body);
        const resPonse=data.save();
        res.json(resPonse);
    }
    else{
        console.log(datas.length)
        res.status(404);
    }
  
    });

    app.get("/login/:contactNumber",async(req,res)=>{
    const data=await Schmeas.find({contactNumber:req.params.contactNumber});
    res.json(data);
    });

    app.put("/update",async(req,res)=>{
        const data=await Schmeas.updateOne({contactNumber:req.body.contactNumber},req.body)
        res.json(data)
    })
    app.get("/all",async(req,res)=>{
        const data=await Schmeas.find()
        res.json(data)

    })
    app.delete("/del/:id",async(req,res)=>{
        const data=await Schmeas.deleteOne({_id:req.params.id})
        res.json(data)
    })
    app.listen(8080,()=>{
        console.log("Node Startes//User")
    })
});

// {
//     "userName":"Karan Gohel",
//     "passWord":"123456",
//     "contactNumber":"8141953822",
//     "emailAddress":"goheljitu164@gmail.com",
//     "city":"rajkot"
// }