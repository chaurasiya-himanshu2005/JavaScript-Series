const marve_heros = ["thor", "Ironman", spiderman];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marve_heros[3][1]); // flash

const allheros = marvel_heros.concat(dc_heros);
console.log(allheros); // merge two array

const all_new_heros = [...marve_heros, ...dc_heros]; // merge two array
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity); // it will do all the element in single array
console.log(real_another_array);



console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh")); // it will form a array 
console.log(Array.from({name: "hitesh"})) // interesting // it will give empty array

let score1 = 100
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2, score3)); // it will form array