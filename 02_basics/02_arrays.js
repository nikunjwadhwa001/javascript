const marvel_heros = ["Ironman","Hulk","Thor"]
const dc_heros = ["Batman","Flash","Superman"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // spread 
console.log(all_new_heros);

const myArr = [1,2,3,[4,6],7,[3,4,[5,6,7]],8]
const real_myArr = myArr.flat(Infinity)
console.log(real_myArr);

console.log(Array.isArray("Nikunj"));
console.log(Array.from("Nikunj"));
console.log(Array.from({name : "Nikunj"})); //important

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3,score1));
