const express=require('express')
const app=express()
require ("dotenv").config();
const mongoose=require ("mongoose")
const PetLover= require('./models/PetLover')
const Organization=require('./models/Organization')
const Company=require('./models/Company')
const AddAdopt=require('./models/AddAdopt')
const Donation=require('./models/Donation')
const authRoute =require ("./routes/Auth.js")


app.use(express.json());



//*const URI=process.env.URI;
const PORT = 5000 || process.env.PORT

//2-liaison de la BD:

//question database is coneted
mongoose.connect('mongodb://127.0.0.1:27017/PETRESCUE' ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,   
})
.then (()=>console.log('DataBase Is Connected'))
.catch(err=>console.log(err))


app.use("/api/auth",authRoute);

//1-creating the server :
app.listen(PORT,(err)=>{
    if (err) throw err
    console.log(`server running on ${PORT}`)
})







