const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    companyName: {
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
    location:{
    type:String,
    },
    phoneNmber:{
        type:Number,
    },
    companylogo: {
        type: String,
        required:true,
        default:
            "https://www.pngitem.com/pimgs/m/74-742680_company-png-transparent-background-white-company-icon-png.png",
    },
});

module.exports = Company = mongoose.model("company", CompanySchema);