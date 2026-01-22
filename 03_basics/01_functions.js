function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("U");
    console.log("N");
    console.log("J");
}

// sayMyName()  That is how you call a function

//function addTwoNumbers(num1,num2){
//    console.log(num1+num2);
//}

function addTwoNumbers(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
}

const result = addTwoNumbers(3,4)
console.log("Result : ",result);

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num){
    return num
}

console.log(calculateCartPrice(100,300,4000,600));

const user = {
    username : "Nikunj",
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
    
}

// handleObject(user)
handleObject({
    username : "Aditya",
    prices : 399
})

const myNewArray = [200,400,500,2000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))

