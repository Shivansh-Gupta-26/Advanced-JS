// import express from 'express'
// import fs from 'fs'
// const app = express()

// app.get("/home",(req,res)=>{
//     res.send("Welcome from Express")
// })


// const PORT = 3000

// app.listen(PORT,()=>{
//     console.log("Server is running...")
// })


// fs.readFile('index.html',(err,res)=>{
//     if(err){
//         console.log(error);
//     }
//     else{
//         console.log(res);
//     }                
// })


import express from 'express'
import fs from 'fs'
const app = express()
app.use((req,res,next)=>{
    console.log("Middleware")
})


const bookData = JSON.parse(fs.readFileSync("./data/books.json"));

// app.get("/api/v1/books",(req,res)=>{
//     try {
//             res.status(200).json({
//         status: "Success",
//         count:bookData.length,
//         data:{
//             book:bookData
//         }
//     })
//     } catch (error) {
//         res.status(404).json({
//              status: "Fail",
//         message: "Data Not Found"
//         })
//     }

// })

app.get("/api/v1/books/:id",(req,res)=>{
  try {
     let id = req.params.id;
    const book = bookData.find((book)=>book.id === id);
    if(!book){
        res.status(400).json({
            status:"Fail",
            message: `Book not found for this id : ${id}`
        })
        
    }else{
    res.status(200).json({
        staus:"Success",
        data:{
            book:book
            
        }
    })
}
  } catch (error) {
    res.status(500).json({
        status:"Fail",
        message:error.message
    })
  }
});

app.post("/api/v1/books",(req,res)=>{

    bookData.push(req.body)
    fs.writeFileSync("./data/books.json",JSON.stringify(bookData))
    res.status(201).json({
        status:"Success",
        message:"Book successfully added"
    })
    //  console.log("Post req");
    //  console.log(req.body);
    // res.json(req.body)
})

app.patch("/api/v1/books/:id",(req,res)=>{
    let {id} = req.params
    const bookToUpdate = bookData.find(book => book.id === id)
      let index = bookData.indexOf(bookToUpdate)
    const updatedBook = Object.assign(bookToUpdate,req.body)
    bookData[index] = updatedBook
    fs.writeFileSync("./data/book.json",JSON.stringify(bookData))
    res.status(200).json({
            status:"Success",
            data:{
                book:updatedBook,
                message:"Book updated successfully"
            }
    })
    
})

app.delete("/api/v1/books/:id",(req,res)=>{
    const deleteBook = bookData.find(book => book.id === req.params.id)
    const books = bookData.filter(book => book.id !=req.params.id)

    res.status(200).json({
        status : "Success",
        data:{
            books:books
        }
    })
})

app.listen(3000, ()=>{
    console.log("Server is running...")
})

