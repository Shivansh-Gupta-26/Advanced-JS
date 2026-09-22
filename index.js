console.log("Start");

setTimeout(() => {
    console.log("Hello World");
}, 10000)

Promise.resolve().then(()=>{
    console.log("Promise Resolved");
})

console.log("End");