// command in terminal is "node common.js".

const {calculate_area,calculate_perimeter} = require('./main');
console.log("Area: ");
console.log(calculate_area(1));
console.log("Perimeter: ");
console.log(calculate_perimeter(1));


import isVote from './esm.js'
console.log(isVote(24));