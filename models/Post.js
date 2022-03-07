

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({


    // for post we add title- desc- image-:


   //Post : 

    Owner: {
        type: Schema.Types.ObjectId,    //object id !!!
        ref: "petlover ",
        required: true,

    },
    postImg: {
    type: String,
    required:true,
    },

    Title: {
        type: String,
        
        },

    Description: {
    type: String,
    
    },
});

module.exports = Post = mongoose.model("post", postSchema);