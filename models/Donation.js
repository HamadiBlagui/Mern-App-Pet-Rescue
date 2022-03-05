const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// question  comment faire pour le donnneur et le demandeur de donnation :

const DonationSchema = new Schema({
    donerName: {
        type: String,
        required: true,
    },
   
    description: {
    type: String,
        
    },
    donationAmount:{
        type:Number,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    adress:{
    type:String,
    },
    phoneNmber:{
        type:Number,
    },
});

module.exports = Donation = mongoose.model("donation", DonationSchema);