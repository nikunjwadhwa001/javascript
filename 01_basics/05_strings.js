const name = "Nikunj"
const repoCount = 5

//console.log(name + repoCount + " Value"); // Not Recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ohii-iii-gamer')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   Nikunj    "
console.log(newStringOne);
console.log(newStringOne.trim());

console.log(gameName.split('-'));
