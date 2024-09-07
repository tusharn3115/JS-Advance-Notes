// Promise -----------------------------------------------------

// promise ka simple meaning hai ki hmne jo useh task diya ha wo abhi ke abhi queue mai lgke complete nhi hoga, queue mai toh lggya hai but abhi complete nhi hua hai 

// promise states:
// 1. pending: initial state, neither fulfilled nor rejected
// 2. fulfilled: meaning that the operation was completed successfully
// 3. rejected: meaning that the operatio failed

// eg:
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network call

    setTimeout(()=>{
        // console.log("Async task is completed");
        // resolve();  this is used to connect resolve with .then()
        resolve({username: "Tushar", email: "tushar@example.com"});
        
        // resolve mai jo bhi parameter pass kiya jata hai wo hme .then() mai miljata hai

    }, 1000)
});

promiseOne.then(function(userDetails){
    // console.log(userDetails);
});


// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })



// callback hell ---------------------------------------------------------------------
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        // let error = true;
        let error = false;
        if(!error) {
            resolve({username: "Hitesh", Password:"hitesh1234"});
        } else {
            reject("ERROR: Something went wrong !!");
        }
    },1000);
});

promiseFour.then((user) => {
    // console.log(user);
    return user.username; 
})
.then((username) => {  
     // the value return form the upper .then() will be received to the lower .then() also called chaining
    // console.log(username);
})
.catch((error) => {
    console.log(error);
})
// .finally(() => console.log("The promise is either resolved or rejected"));   
// finally block will always execute either promise is resolved or rejected



// async await ---------------------------------------------------------------------------

// async and await make promises easier to write. async makes a function return a Promise. await makes a function wait for a Promise.

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true;
        if(!error) {
            resolve({username: 'suraj', password: 12345});
        }else {
            // reject("There was an error!!");
        }
    },1000);
});

async function consumePromiseFive(){
    
    try{
        const response = await promiseFive;
        // console.log(response);
    }catch(err){
        // console.log(err);
    };
};
// consumePromiseFive();


// using fetch() method
async function data(){
    try{
        let details = await fetch("https://api.github.com/users/tusharn3115");
        const response = await details.json();
        console.log(response);
    }catch(err){
        console.log("E: ",err);
    }
}
// data();



// using promise
fetch("https://api.github.com/users/tusharn3115")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));