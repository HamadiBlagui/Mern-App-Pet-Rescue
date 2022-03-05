const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adoptSchema = new Schema({
    addOwner: {
        type: Schema.Types.ObjectId,    //object id !!!
        ref: "petlover , organization",
        required: true,
    },
    img: {
    type: String,
    required:true,
    },
    animalType: {
    type: String,
    required: true,
    },
    age:{
    type:Number,
    },

    //a changer 
    addDate: {        
    type: Date,
    default: Date.now(),
    },
    adress:{
    type:String,
    required:true,
    },
    phoneNumber:{
    type:Number,
    },
    addDescription: {
    type: String,
    
    },
});

module.exports = AddAdopt = mongoose.model("addadopt", adoptSchema);