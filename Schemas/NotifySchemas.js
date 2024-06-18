const mongoose=require("mongoose")

const schema=mongoose.Schema({
    msg:String,
    contact:String,
    type:String,

});

module.exports=mongoose.model("notification",schema)
