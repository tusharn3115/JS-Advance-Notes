// Promise -----------------------------------------------------

// promise ka simple meaning hai ki hmne jo useh task diya ha wo abhi ke abhi queue mai lgke complete nhi hoga, queue mai toh lggya hai but abhi complete nhi hua hai 

// promise states:
// 1. pending: initial state, neither fulfilled nor rejected
// 2. fulfilled: meaning that the operation was completed successfully
// 3. rejected: meaning that the operatio failed

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network call

    setTimeout(()=>{
        console.log("Async task is completed");
    }, 1000)
});