// Primitive

// 7 types: String, Number, Boolean, null , undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLogggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 345345465435463556665n


// Reference (Non Primitive)

// Array, Objects, Functions


const heros = ("shaktiman", "naagraj", "doga");
let myObj = {
    name: "himanshu",
    age : 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "himanshuchaurasiyadotcom"

let anothername = myYoutubename
anothername = "HPC facts";

console.log(myYoutubename);
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "himanshuchaurasiya@google.com"

console.log(userOne.email);
console.log(userTwo.email);