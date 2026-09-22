const fs = require("fs")

// const { log } = require("node:console");

// fs.stat("notes.txt", (err,stats)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("Information about [notes.txt]", stats)
//     console.log("Size of the file [notes.txt]", stats.size,"Bytes")
//     console.log("Creation time of the file [notes.txt]", stats.birthtimeMs,"ms")
//     console.log("Creation time of the file [notes.txt]", stats.birthtime.toISOString())
//     console.log("Creation time of the file [notes.txt]", stats.birthtime.toISOString().split("T"))
//     console.log("Creation time of the file [notes.txt]", stats.birthtime.toISOString().split("T")[0])
// })

fs.stat("./myFolder1",(err, stats)=>{
       if(err){
        console.log(err);
        return
    }
    console.log(stats.size);
})