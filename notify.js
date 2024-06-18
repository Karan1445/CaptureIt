const mongoose= require("mongoose");
const express=require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const Schema = require("./Schemas/NotifySchemas");

mongoose.connect("mongodb+srv://goheljitu164:Karan8141@cluster0.rzxbeqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    const app=express();
    app.use(cors());
    app.use(bodyParser.json());   
   
    //Cemera hire(requested not approved) request notification post
    app.post("/notapproved",async(req,res)=>{
        const Premsg="Your Request for Book Cemera "+req.body.cemname+" is raised succesfully!!"
        const data=await Schema({msg:Premsg,contact:req.body.contact,type:"booking"})
        const newData=data.save()
        res.json(newData)
    })

    //cemera request is declined
    app.post("/decline",async(req,res)=>{
        const Premsg="Your Request for Book Cemera "+req.body.cemname+" is declined by Owner!!"
        const data=await Schema({msg:Premsg,contact:req.body.contact,type:"decline"})
        const newData=data.save()
        res.json(newData)
    })
    //succes full boking conformed
    app.post("/success",async(req,res)=>{
        const Premsg="Cemera "+req.body.cemname+" is booked   succesfully check Rented section!!"
        const data=await Schema({msg:Premsg,contact:req.body.contact,type:"success"})
        const newData=data.save()
        res.json(newData)
    })
    app.post("/complete",async(req,res)=>{
        const Premsg="Cemera "+req.body.cemname+" is Hiring is succesfully complited!!"
        const data=await Schema({msg:Premsg,contact:req.body.contact,type:"success"})
        const newData=data.save()
        res.json(newData)
    })
    app.delete("/deldata/:contact",async(req,res)=>{
        const data=await Schema.deleteMany({contact:req.params.contact})
        res.json(data);
    })
    app.get("/notify/:contact",async(req,res)=>{
        const data=await Schema.find({contact:req.params.contact})
        res.json(data)
        
    })//warnings
    
    app.post("/warns",async(req,res)=>{
        const Premsg="This is warning from the admin Dont Do This thing otherwise you get banned!!"
        const data=await Schema({msg:Premsg,contact:req.body.contact,type:"warn"})
        const newData=data.save()
        res.json(newData)
    })//all with approval
    app.get("/acount",async(req,res)=>{
        const data=await Schema.find({type:"success"}).count()
        res.json(data/2+.5);
    })
    app.get("/dcount",async(req,res)=>{
        const data=await Schema.find({type:"decline"}).count()
        res.json(data);
    })

    // app.get("/del",async(req,res)=>{
    //     await Schema.deleteMany()
    //     res.json("yep")
    // })
    app.listen(4040,()=>{
        console.log("Node Startes//notification")
    });
})