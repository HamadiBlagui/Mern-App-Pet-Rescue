const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const petSchema = new Schema({
    Owner: {
        type: Schema.Types.ObjectId,    
        ref: "petlover",
        required: true,},
    petImg: {
    type: String,
    required:true,
    },
    petName: {
    type: String,
    },
    petType:{
    type:String,
    },
    breed: {
    type: String,
    },
    age:{
    type:Number,
    },
    Characteristics:{
    type:String,
    },
    length:{
    type:Number,
    },
    width:{
    type:Number,
    }
});

module.exports = Pet = mongoose.model("pet", petSchema);