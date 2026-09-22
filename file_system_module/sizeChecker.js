// function sizeChecker(fileSize,x){
//     if(fileSize>=x){
//         console.log("File Size exceeded the limit")
//         return true;
//     }
//     else{
//         console.log("File is successfully submitted")
//         return false;
//     }
// }

// sizeChecker(1000,2000)


const fs = require("fs")

function sizeChecker(filename){
    const limit = 2*1024*1024 //2Mb
    const stats = fs.statSync(filename)

    if(stats.size>limit){
        console.log('File should be less than $(limit).');
    }
    else{
        console.log("File has been Submitted");
    }
}

sizeChecker("notes.txt")