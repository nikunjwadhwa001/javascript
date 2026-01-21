// array

const myArray = [0,1,2,3,4,5,"Nikunj",true]
const myHeros = ["Ironman","Hulk"]
const myArr = new Array(1,2,3,4)
console.log(myArray[6]);

// Array Methods
myArr.push(6)
myArr.push(7)
myArr.pop() // removes last element in the array

myArr.unshift(10) // adds element in the starting of the array
myArr.shift() // removes element in the starting of the array

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr); // it will be an array


// Slice and Splice

console.log("A ",myArr);

const mna1= myArr.slice(1,3)
console.log(mna1);
console.log("B ",myArr);

const mna2 = myArr.splice(1,3)
console.log(mna2);
console.log("C ",myArr);




