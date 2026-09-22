console.log("Hello Everyone");

let a = 2;
let b = 3;
console.log(a, b);
let temp = 0;
temp = a;
a = b;
b = temp;
console.log(a, b);


function hello() {
    console.log("Hello World");
}

hello();

let fn = () =>{
    console.log("Hello World");
}

fn();

setTimeout(() =>{
    console.log("Hello World");
}, 10000)

