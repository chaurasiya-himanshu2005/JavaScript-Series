// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(2,3,4,5);
console.log(myArr2[1]) // 2

// Array Methods

myArr.push(6);                           // it will 6 in array
myArr.push(7);                           // it will 6 in array
myArr.pop();

myArr.unshift(9)                         // it will insert 9 in starting 
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(9)); 

const newArr = myArr.join();
console.log(myArr); 
console.log(newArr);
console.log(typeof newArr);               // string

// slice , splice

console.log("A ", myArr);                 // A [0,1,2,3,4,5]

const myn1 = myArr.slice(1,3);
console.log(myn1);  // [1,2]
console.log("B ", myArr);                // B [0,1,2,3,4,5]

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);               // C [0,4,5]
console.log(myn2);                     // [1,2,3]