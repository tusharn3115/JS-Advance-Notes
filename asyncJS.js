// Asynchronous Javascript

// By default javascript is syncronous i.e the code executes from line to line 
// javascript is also single threaded
// each operation waits for the last one to complete before execution


// setTimeout() ----------------------------------------------------
// setTimeout contains two parameters function and time(in milliseconds)
// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires

// The setTimeout() is executed only once
// If you need repeated executions, use setInterval() instead.

// eg:-
setTimeout(function(){
    console.log("Hello");
},2000)