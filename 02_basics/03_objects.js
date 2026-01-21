// singleton
// Object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Nikunj",
    "full name" : "Nikunj Wadhwa",
    [mySym] : "myKey1", // this is how we declare a symbol in an object
    age : 21,
    location : "Muktsar",
    email : "nikunjwadhwa002@gmail.com",
    isLoggedIn : false
}

console.log(JsUser.age);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "nikunjwadhwa002@google.com"
//Object.freeze(JsUser)
JsUser.email = "nikunjwadhwa002@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name} `);
    
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



