
// Starting javascript
console.log("Hello World!");

// Synchronous and Asynchronous 
console.log("Start")
for(let i=1; i<=10;i++){
    console.log("iteration:",i)
}
console.log("end")
console.log("Start")
setTimeout(()=>{
    console.log("Hello World");
},1000);
console.log("End")

// Promises 
Promise.resolve().then(()=>{
    console.log("Microtask Queue")
})

setTimeout(()=>{
    console.log("Microtask Queue");
}, 2000);

// import fs from 'fs'

// const fs = require('fs');

function greet(){
    console.log("Hello World!");
}

// Function Call
greet();

function calculate_area(r){
    return 3.14*r*r;
}

function calculate_perimeter(r){
    return 2*3.14*r;
}

// Function Call
console.log(calculate_area(1));
console.log(calculate_perimeter(1));


// export Multiple function
module.exports = {calculate_area,calculate_perimeter}

// import Mutiple function
const {calculate_area,calculate_perimeter} = require('./main');

import pi from "./exe.js"

import{calculate_area, calculate_perimeter} from "./exe.js"



