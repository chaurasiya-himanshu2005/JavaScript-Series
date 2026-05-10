const score = 400;

const balance = new Number(100);
console.log(balance);

console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++ Maths ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)) // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4,5,6,7,8,9,10)); // 4
console.log(Math.max(4,5,6,7,8,9,10)); // 10

console.log(Math.random()) // it will be random number betweem 0 to 1
console.log((Math.random() * 10) + 1) // it will give random number between 0 to 9
console.log(Math.floor(Math.random() * 10) + 1) // it will round up the number

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // it will be give number btw 10 to 20

