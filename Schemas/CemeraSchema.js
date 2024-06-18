const mongoose=require("mongoose")

const schema=mongoose.Schema({
    cemeraName:String,
    cemeraLink:String,
    CemeraPrice:String,
    pickUpLoc:String,
    cemeraCity:String,

    owner:String,
    ownerContact:String,
    
    
    reqName:String,
    reqContact:String,
    
    avail:String,
    approval:String,
    like:String

    ,pickuptime:String,
    rentedHours:String,
    dropTime:String,

    
});

module.exports=mongoose.model("Cemera",schema)
