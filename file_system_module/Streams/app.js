import fs from 'fs'

// Readable Streams
const readStream = fs.createReadStream("input.txt",{encoding:'utf8'})
readStream.on("data", (chunk)=>{
    console.log("Data Recieved");
    console.log("Data: ",chunk)
})

readStream.on("end",()=>{
    console.log("End")
})
readStream.on("error",(error)=>{
    console.log("Error: ",error.message)
})


// create writable stream

const writeStream = fs.createWriteStream("output.txt")
writeStream.write("Hello\n")

writeStream.on("finish",()=>{
    console.log("Data has been written.")
})

writeStream.on("error",()=>{
    console.log("Error: ",error)
})

readStream.pipe(writeStream)
















