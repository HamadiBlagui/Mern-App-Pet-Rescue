const router=require("express").Router();
const PetLover=require("../models/PetLover");

//register:
router.post("/register",async (req,res)=>{

    try{
        const newPetLover= new PetLover({
       username:req.body.username,
       email:req.body.email,
       password: req.body.password,

        })

        const petlover= await newPetLover.save();
        res.status(200).json(petlover)

    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router