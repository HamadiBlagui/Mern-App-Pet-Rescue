const express=require('express')
const app=express()
require ("dotenv").config();
 



//1-creating the server :

const PORT = 5000 || process.env.PORT
 
app.listen(PORT,(err)=>{
    if (err) throw err
    console.log(`server running on ${PORT}`)
})






