const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const Schmeas=require("./Schemas/CemeraSchema");
const express=require("express");
const SchemasUser = require("./Schemas/SchemasUser");

const app=express()

mongoose.connect("mongodb+srv://goheljitu164:Karan8141@cluster0.rzxbeqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
   app.use(cors());
   app.use(bodyParser.json());
//add cemera
    app.post("/addCemera",async(req,res)=>{
        const data=await Schmeas(req.body)
        const newData=data.save()
        res.json(newData)
    })
//get all
    app.get("/getAllCemeras",async(req,res)=>{
        const data=await Schmeas.find({avail:"t"})
        res.json(data);

    })
    app.get("/getAll",async(req,res)=>{
        const data=await Schmeas.find()
        res.json(data);

    })
    //GetPerticularUSersCemera
    app.get("/UsersCemera/:contact_number",async(req,res)=>{
        const data=await Schmeas.find({ownerContact:req.params.contact_number})
        res.json(data)
    })
    //getPerticularCemera
    app.get("/myCemera/:id",async(req,res)=>{
        const data=await Schmeas.findOne({_id:req.params.id})
        res.json(data)
    })
    //deleteOne
    app.delete("/myCemera/:id",async(req,res)=>{
        const data=await Schmeas.deleteOne({_id:req.params.id})
        res.json(data)
    })
    // app.put("/like",async(req,res)=>{
    //     const likesupdate=await Schmeas.find({_id:req.body.id})
    //     console.log(likesupdate)
    //     const newobj=likesupdate.like+1;
    //     const data=await Schmeas.updateOne({_id:req.body.id},newobj)
    //     res.json(data)
    // })

    //update feild for process hiring in Hirecem.js page
    app.put("/HireCemera",async(req,res)=>{
        const data=await Schmeas.updateOne({_id:req.body._id},req.body)
        res.json(data);
    })
    //get Users rented cemera
    app.get("/UserHiredCem/:contact_number",async(req,res)=>{
        const data=await Schmeas.find({reqContact:req.params.contact_number,"approval":"done"})
        res.json(data);
    })
    //For Approval
    app.get("/Approve/:contact_number",async(req,res)=>{
        const data=await Schmeas.find({ownerContact:req.params.contact_number,"approval":"inProgress"})
        res.json(data);
    })
    //Cemera approval Agreee
    app.put("/AgreeCemera",async(req,res)=>{
        const data=await Schmeas.updateOne({_id:req.body._id},{"approval":"done"})
        res.json(data);
    })
    //cemera approval decline and for relese for cemera jugad
    app.put("/Disagree",async(req,res)=>{
        const data=await Schmeas.updateOne({_id:req.body._id},{"reqName":"null","reqContact":"null","avail":"t","approval":"null","pickuptime":"null","rentedHours":"null"})
        res.json(data)
    })
    //delete cemera
    app.delete("/del/:id",async(req,res)=>{
        const data=await Schmeas.deleteOne({_id:req.params.id})
        res.json(data)
    })
    //edit cemera
    app.put("/edits",async(req,res)=>{
        const data=await Schmeas.updateOne({_id:req.body._id},req.body)
        res.json(data);
    })
    //when user account id deletes
    app.delete("/wholeDataDeleted/:contact",async(req,res)=>{
        const data=await Schmeas.deleteMany({ownerContact:req.params.contact})
        
        res.json(data);
    })
    app.listen(6060,()=>{
        console.log("Node Startes//cemera")
    })
});
