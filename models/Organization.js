const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
    OrgName: {
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
    orglogo: {
        type: String,
        required:true,
        default:
            "https://us.123rf.com/450wm/glopphy/glopphy1702/glopphy170200027/71749232-team-leute-logo.jpg",
    },
});

module.exports = Organization = mongoose.model("organization", OrganizationSchema);