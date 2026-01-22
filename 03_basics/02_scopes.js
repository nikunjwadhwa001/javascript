let a =100 

if(true){
    let a = 20
    const b = 40
    console.log("Inner : ",a);
    
}

console.log(a);

function one(){
    const username = "Nikunj"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);  This is not possible 
    
    two()
}

one()

if ( true) {
    const username = "Nikunj"

    if(username === "Nikunj"){
        const website = "Youtube"
        console.log(username+website);
        
    }
    // console.log(website); This is not possible
    
}

// console.log(username);  This is not possible 


// ++++++++++ interseting ++++++++++

addOne(4)  // This is only possible when we declare function in this way as shown below

function addOne(num){
    return num+1
}

const addTwo = function(num){
    return num+2
}

addTwo(5) // Here we cannot call the function before declaring it like we did for the first function