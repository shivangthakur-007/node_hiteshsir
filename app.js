require('dotenv').config();
const express=require('express')
const cors=require('cors')

const connecttodb=require('./config/db.js')

const app=express();

// express middleware
app.use(express.json())  //=>It is so Important!!!
app.use(express.urlencoded({extended:true}))

app.use(cors())

// init connectiontodb

connecttodb()

const userroutes=require('./routes/userroutes.js')
app.use("/", userroutes)

module.exports=app;
// export default=app;
    
