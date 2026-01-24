const user = {
    username : "Nikunj",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website `);
        console.log(this);
        
    }
}

// user.welcomeMessage()

// user.username = "Aditya"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
//     let username = "Nikunj"
//     console.log(this.username); // this cannot be done in functions only can be done in objects
    
// }

//chai()


const chai = () => {  // This is arrow function
    let username = "Nikunj"
    console.log(this.username);
    
}

chai()

// Basic arrow function
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(5,6))


// Implicit return 
const add = (num3,num4) =>  num3+num4 // return not required here 
console.log(add(5,4));

const name = () => ({username:"Nikunj"})
console.log(name());
