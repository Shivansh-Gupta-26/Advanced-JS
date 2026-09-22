import http from 'http'
const fs = require('fs');
fs.readFile('index.html',(err,res)=>{
    if(err){
        console.log(error);
    }
    else{
        console.log(res);
    }                
})
// Create basic Server
const server = http.createServer((req,res)=>{
    console.log("Hello World")
    const order = {
        orderId:10987,
        des:"delhi",
        sourse:"GHaziabad",
        username: "Shivansh"
    };
    const data = fs.readFileSync("index.html");
    console.log('${data}');
    res.statusCode = 200
    res.setHeader("Content-Type","application/json")
    res.writeHead(200,{
        "Content-Type": "text/html",
        "custom-header":"Hello ECE"
    });
    res.end(JSON.stringify(order))
})

server.listen(3000,"127.0.0.1",()=>{            
    console.log("Server is running...");
})




















