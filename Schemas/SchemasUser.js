const mongoose=require("mongoose")

const schema=mongoose.Schema({
    userName:String,
    passWord:String,
    contactNumber:String,
    emailAddress:String,
    city:String
});

module.exports=mongoose.model("Users",schema)
