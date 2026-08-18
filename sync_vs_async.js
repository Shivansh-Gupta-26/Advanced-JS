console.log("====== Synchronous start ======");
for(let i=1; i<=10;i++){
    console.log('$(1)')
}
console.log("====== Synchronous end ======");
console.log("====== Asynchronous start ======");
setTimeout(()=>{
    console.log("Hello World");
},1000);
console.log("====== Asynchronous end ======");