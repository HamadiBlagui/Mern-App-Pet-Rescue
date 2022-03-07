const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// question id uuid comment faire :

const loverSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender:{
        type:String,
        required:true,
    },
    adress:{
     type :String,
     required:true,
     
    },
    phoneNmber:{
        type:Number,
        required: true,
        unique: true,
    },
    profileImg: {
        type: String,
        default:
            "https://i.pinimg.com/564x/88/ee/64/88ee649305ffa2b4a6a00ba504222133.jpg",
    },
});

module.exports = PetLover = mongoose.model("petlover", loverSchema);