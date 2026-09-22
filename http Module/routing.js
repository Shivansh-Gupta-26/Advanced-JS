import http from "http"
import fs from "fs"
const homePage = fs.readFileSync("home.html","utf8")
const server = http.createServer((req, res) => {

    console.log("Hello World");
    console.log(req.url);

    if (req.url === "/") {
        res.end(homePage.replace("{(%CONTENT%)}","About Page"));
    }
    else if (req.url === "/about") {
        res.end("About Page");
    }
    else if (req.url === "/contact") {
        res.end("Contact Page");
    }
    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

server.listen(3000,"127.0.0.1", () => {
    console.log("Server is running...");
});

