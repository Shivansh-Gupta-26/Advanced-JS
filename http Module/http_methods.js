// const http = require("http")
import http from 'http'
import fs from 'fs'

// read the json file
const data  = fs.readFileSync("config.json")
const server=http.createServer((req,res)=>{
    if(req.url === '/' ){
        res.end('Home Page')
    }
    else if(req.url === "/config"){
        res.end(JSON.stringify(data))
    }
    else{
        res.end("Page not exist")
    }
})    

server.listen(3000 , ()=>{
    console.log("Server is running...")
}) 
//  const server=http.createServer((req,res)=>{
//    console.log("Server is Created")
//    res.end("Welcome From Server")
// })
// res.statusCode = 200;
// res.setHeader("Content-Type","text/plain")
// res.writeHead(200,{'content-type': 'text/plain'});
// res.end("Welcome From Server")



// server.listen(3000,"127.0.0.1",()=>{            
//     console.log("Server is running...");
// })


// // This create Routing.
// fs.readFile('config.json',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }                
// })


