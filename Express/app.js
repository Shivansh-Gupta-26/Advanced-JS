import express from 'express'
import fs from 'fs'
const app = express()

app.get("/home",(req,res)=>{
    res.send("Welcome from Express")
})


const PORT = 3000

app.listen(PORT,()=>{
    console.log("Server is running...")
})


fs.readFile('index.html',(err,res)=>{
    if(err){
        console.log(error);
    }
    else{
        console.log(res);
    }                
})
