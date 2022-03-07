const jwt = require('jsonwebtoken')


const auth = (req,res,next)=>{

    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        res.status(400).json({msg:"Invalid token"})
    }
    try{
        const decoded= jwt.verify(token , process.env.SECRET)
        req.user = decoded
        next()

    }
    catch(err){
        res.status(500).json({msg : "Invalid Credentials"})

    }

}
module.exports = auth