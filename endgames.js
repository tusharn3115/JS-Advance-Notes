// higher order function -------------------------------------------------------

// higher order functions are basically functions which accepts a function in a parameter or return a function or both.

// like forEach method which accepts function as a parameter

// eg: forEach is higher order function
// let arr = [1,2,3,4,5];
// arr.forEach(function(vals){
//     console.log(vals);
// })

// eg:
// function abcd(){
//     return function(){
//         console.log("Function returned a function");
//     }
// }
// abcd(function(){ console.log("Function as a parameter"); }); // function as parameter




// constructor functions -------------------------------------------------------

// ik normal function jismai this ka istemaal ho and us function ko call krte wakt new keyword ka use kre

// we use constructor function jab hme same properties ke sath multiple elements bnane ho tbh hm constructor funtion use krte hai

// eg:
// function carModel(){
//     this.width = 12;
//     this.height = 22;
//     this.color = "red";
//     this.type = "sports"
// }

// var car1 = new carModel();
// var car2 = new carModel();




// new keyword -----------------------------------------------------------------

// new keyword created a new blank object for the constructor function called just after new keyword and uske under jha this keyword use hua wha new object bnao and uske properties ko return krdo

// it is used to create an instance of user defined object and constuctor function 




// iife (immediately invoked function expression) ------------------------------

// iife are javascript functions that are executed immediately after they are defined
//eg:

// (function(){

// })();  // this is called iife

// iffe is used to create private variable which are in accessible

// to access the private var value we return an object passing getter with a function
// eg:
var val = (function(){
    var privateVal = 555;

    // accessing the private value
    return {

        // getter seh hme private value mil rhi hai
        getter: function(){
            console.log(privateVal);
        },

        // setter seh hm private value ko change kr skte hai
        setter: function(val){
            privateVal = val;
        }
    }
})();




// prototype -------------------------------------------------------------------------------------------------

// prototype is basically collection of built in helper functions and methods 
// prototypes are not user created but automatically created by objects 

// prototyping inheritance
//eg:
// var human ={
//     canTalk: true,
//     canFly: false,
//     canEat: true,
// }

// var student = {
//     canStudy: true,
//     canPlay: true,
// }

// student.__proto__ = human;

// we have a prototype and inherited the properties of human into student and student can also access the props of human
