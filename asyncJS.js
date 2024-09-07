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
// setTimeout(function(){
//     // console.log("Hello");
// },2000);

// now there is a problem, if an event hasn't occured so there should be an option where you can stop the event.
// to do this we have clearTimeout(reference) to do so

// const textChange = function(){
//     document.querySelector("#h1").innerHTML = "async js";
// }

// const timeout =  setTimeout(textChange, 2000);

// document.querySelector("#button").addEventListener('click', function(){
//     clearInterval(timeout);
//     console.log("Stopped");
// })


// setInterval() ------------------------------------------------------------
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

// eg:-
// setInterval(function(){
//     console.log("hey");
// },1000);



// assignment 1
// on clicking start the interval starts and when clicked stop the interval will stop
// document.querySelector("#start").addEventListener('click', function(){
//     console.log("STARTED");
//     const start = setInterval(function(){
//         console.log("hey");
//     },1000);

//     document.querySelector("#stop").addEventListener('click', function(){
//         clearInterval(start);
//         console.log("STOPPED");
//     });
// });



// assignment 2 
// when click on start the color will randomly change and when we click stop the color changing will stop

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId
const startChangingColor = function(){
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
    intervalId = setInterval(changeColor, 1000);
}

const stopChangingColor = function(){
    clearInterval(intervalId);
}

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);