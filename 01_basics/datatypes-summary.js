// Primitive :

// 7 types : Number, String, Boolean, null, undefined, BigInt, Symbol

const id=Symbol('123')
const id1=Symbol('123')
console.log(id===id1);

const bigNumber=338429423839274923n // BigInt

// Reference(Non primitive) : 

// Array, Objects, Functions

const heros=["ironman","captain","hulk"] // array

let myObj= {  //objects
    name : "Nikunj",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World");
}