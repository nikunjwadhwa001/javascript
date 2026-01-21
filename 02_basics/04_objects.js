// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Nikunj",
            lastname : "Wadhwa"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

//const obj4 = {obj1,obj2,obj3}
//const obj4 = Object.assign({},obj1,obj2,obj3)   First one is the target and rest all are source
const obj4 = {...obj1,...obj2,...obj3}

console.log(obj4);


// array ke andar objects 

const users = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 1,
        email : "a@gmail.com"
    }
]

users[0].email 

console.log(Object.keys(tinderUser)); // very
console.log(Object.values(tinderUser)); // useful methods
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {    
    coursename : "React JS",
    price : 999,
    courseInstructor : "Nikunj Wadhwa"
}

const {courseInstructor : instructor} = course
console.log(instructor);

