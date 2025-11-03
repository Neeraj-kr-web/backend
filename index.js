const {connectDB}=require("./db/connection")
const express = require('express');


const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.PORT;

const app = express();



app.get("/user-data", (req,res)=>{
    res.send("Hello to backend world!")
})

connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}...`);
    
})
})
