Promimse((resolve, reject)=>{})
const promise1 = new Promise((resolve, reject)=>{
  let  success = true ;
  if(success){
    resolve({
        id:234243,
        name:"Shiv"
    })
  }
else{
    reject("error")
}
})