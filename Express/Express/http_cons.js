const http = require("http")

const server = http.createServer((req,res)=>{
    // Routing
    if(req.method === "GET" && req.url === "/"){   //Get request
        res.end("GET Request")
    }
    else if(req.method === "POST" && req.url === "/"){
        res.end("POST Request")
    }
    else if(req.method === "PATCH" && req.url === "/users"){
        res.end("PATCH Request")
    }
})

server.listen(3000,(req,res)=>{
    console.log("Server is running on the PORT: 3000");

})