const router=require("express").Router();
const PetLover=require("../models/PetLover");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//register:
router.post("/register",async (req,res)=>{

    try{
    const{fullName , email ,password,gender , adress,phoneNmber}=req.body
    const existingUser = await PetLover.findOne({email : email})
    if(existingUser){
      return  res.status(400).json({status:true ,msg : "User already exists!!"})
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)
    const user = await PetLover.create({
        fullName ,
        email,
        gender,
        phoneNmber,
        adress ,
        password : hashedPassword
    })
    res.status(200).json({status :true , msg : "User created " , data : user})
    }catch(err){
        res.status(500).json(err);
    }
})

// Login

router.post('/login' , async(req,res)=>{
    try{
        const{email , password} = req.body
        // verify the user exists
        const user = await PetLover.findOne({email : email})

        // if the user exists
        if(user){
            const verify_password = await bcrypt.compare(password , user.password)
            if(verify_password){
               const token = await jwt.sign({id : user._id} ,process.env.SECRET )
               return res.status(200).json({status : true , msg :"Logged in Successfully" , token: token  , data : user})
            }
            else {
                return res.status(400).json({status : true , msg : "Wrong password"})
            }
        }
        return res.status(400).json({status : false , msg : "User Not Found , Please register"})

    }

 catch(err){
    res.status(500).json(err);
} 
})




module.exports = router