// objects ---------------------------------------------------------------
// special datatype (symbol)

const sym = Symbol("key1");
const user = {   // this is a non-singleton
    name: "Sarthak",
    [sym]: "key1",
    age: 21,
    email: "sarthak@gmail.com",
    isLoggedIn: true,
    lastLoggedIn: ["monday", "wednesday", "saturday", "sunday"],
}

// accessing the value of object
// console.log(user.email);
// console.log(user[sym]);
// console.log(user["email"])  // this is correct way to access the value


// changing value of the object
// user.email = "sarthak@google.com";
// console.log(user["email"])


// addaing key value into object
user.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);  //if we are refrencing to same object we use this keyword to access its properties
}
// console.log(user.greeting());


// singleton object
const student = new Object();  // this is a singleton object
student.name = "Tushar";
student.id = "001";
student.passedOut = true;
// console.log(student);


// object nesting
const admin = {
    email: "tushar@gmail.com",
    adminName: {
        fullname: {
            firstName: "Tushar",
            lastName: "Negi",
        }
    }
}
// console.log(admin.adminName.fullname.firstName);
 

// combining objects
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj = Object.assign({}, obj1, obj2)  // {} empty object is passed its optional but it indicates that obj1 and obj2 will combine a give a new object or will gives us an object
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// Object de-structure
// De-structuring is a js expression that allows you to extract data from an array, object and map an set those extracted data into a new variable
// it allows us to extract multiple properties at a time 
const course = {
    courseName: "full-stack course",
    language: "hindi",
    price: "1499rs",
    courseInstructor: "Suraj Singh",
}
// syntax to de-structure object
const {courseInstructor: instructor} = course;
const {courseName: Cname} = course;
// console.log(instructor);
// console.log(Cname);



// function -----------------------------------------------------------------------------------
// function calculateCartPrice(...num1){  // ... represents rest operator this will pack all the agrument into a single array
//     return num1;
// }
// console.log(calculateCartPrice(200,300,500,800));


// object used in function
// const myCart = {
//     user: "Hardik",
//     product: 2,
//     totalPrice: "1500rs"
// }

function cart(obj){
    console.log(`Username is ${obj.user} and price is ${obj.totalPrice}`);
    
}
// cart(myCart);
// cart({
//         user: "Hardik",
//         product: 2,
//         totalPrice: "1500rs"
//     })



// array used in function
// const myArr = [200,300,400,500];

function totalPrice(getArray){
    return getArray[3];
}
// console.log(totalPrice(myArr));
// console.log(totalPrice([200,300,400,500]));

// scopes --------------------------------------------------------------------------

//local scope and global scope
// local scope - variable are only accessible inside the function in which these variable were declared
// global scope - variable which are declare outside the function can be accessible inside the function
const username = "tushar"
function gg(){
    const greet = "hi"; 
    console.log(greet);
    console.log(username);
}
// console.log(greet);
// gg();



// nested scope
function one(){
    const user = "Tushar";
    
    function two(){
        const website = "Youtube"
        console.log(user);
    }
    // console.log(website); // will give error
    // two();  // no error function two() can access the varibles of function one() i.e user
}
// one(); 

// in nested scope the child function or the function inside a function can access the variable declare inside his function as well as outside but inside the parent function because for inner / child function the parent function is global

// but parent function cannot access the variable declared inside the child / inner function



// this keyword ------------------------------------------------------------------------------
const data = {
    user: "Sam",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.user}, welcome to website`);
        // this keyword refers to the current context and the value present in it
    }
}
// data.welcomeMsg();



// arrow function ---------------------------------------------------------------------

// const chai = function(){  // this is normal function
//     let username = "sam"
//     // console.log(this);
// }
// chai();

// const chai = () => {  // this is arrow function in which function keyword is not required instead we use arrow made with equal sign with greater than sign
//     let username = "sam"
//     // console.log(this);
// }
// chai();


// implicite return function
const add = (num1, num2) => (num1 + num2);  // in this type of function we don't wrap our function code in parentheses but without parentheses with curly brackets but in this we do not use return

// if you want to pass object in a function we have to wrap that object into curly brackets else it will give undefined
const addNum = (num1, num2) => ({username: "sam"});



// iife - immediately invoke function expression --------------------------------
(function connect(){  // this is a named iife 
    // console.log("DB CONNECTED");
}());

(() => {  // normal iife
    // console.log("hello");
})();
// (first bracket is for function defination)(second bracket if for execution call)
// iffe function executes immideately
// but somethimes there is problem with global pollution so to remove the global scope variable, declaration pollution we use iife 


// javascript execution context -----------------------------------------------------------------------
// 1. GLobal EC
// When JavaScript code runs Global Execution Context (GEC) is created
// whenever we create a js code, first of all Global EC is created with a variable this in which the Global execution context resides

// for browser the execution context is window

// 2. Function EC
// 3. Eval EC

// the javascript code is executed into 2 phases 
// 1. Memory creation phase
// in memory creation phase what ever varible we have declare or any other thing, a memeory is allocated for them but execution is not done only memory allocation is done in this phase

// 2.Execution phase
// in this phase the js code is executed

// in functions, whenever a function is defined its new variable enviroment is created and is also deleted lated when done execution


// call stack in js -------------------------------------------------------------
// firstly comes our global exectution context 

// A call stack is a mechanism for an interpreter to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

// JavaScript uses a Call Stack to track the functions in a program. The call stack works on the Last In, First Out (LIFO) principle. This means that the most recently called function will be the first to be completed. Whenever a function is called, a new frame is added to the top of the stack.


// High Order Array loops -----------------------------------------------------------------
// 1. For of loop:

const arr = [1,2,3,4,5];
for(const num of arr){  // num is variable and arr mean object i.e in which you want to use this array like in an array or object.
    // console.log(num);
}
// for of loop returns the value of array and not the key
// we cannot iterate for of loop over a object  
const myobj1 = {
    cpp: "c++",
    js: "javascript",
    c: "c language"
}

for(const obj of myobj1){
    // console.log(obj);  //this will give an error (myobj1 is not iterable)
}
    

// 2. For in loop: 
// mostly used to iterate objects
const myobj = {
    cpp: "c++",
    js: "javascript",
    c: "c language"
}

for(const key in myobj){
    console.log(`${key} is shortcut for ${myobj[key]}`);
}

// 1. map ---------------------------------------------------------------
let months = ["January", "February", "March", "April", "May"];
// map() creates a new array from calling a function for every array element 
// map does not change the original array
// there is no duplicate values in map collection, only unique values are stored

var mappedArr = months.map((months, index) => {
    // console.log(index, months)
    return arr;
});

 


// 2. Filter ---------------------------------------------------------------
// filter() method is used to create a new array that contains only the element from the original from the array

// the element that is stored into the new array is depended apon returned condition

// let months = ["January", "February", "March", "April", "May", "November", "December"];

// var filteredArr = months.filter((months, index, array) => {
//     return months.toLowerCase().includes("m");
//     // so only months with letters 5 or less will be stored into filteredArr i.e the new array that it makes
// });


// const student = [
//     {
//         name: "Aman",
//         age: 19,
//     },
//     {
//         name: "Suraj",
//         age: 20,
//     },
//     {
//         name: "Tushar",
//         age: 22,
//     },
//     {
//         name: "Saksham",
//         age: 21,
//     }
// ]

// var filteredData = student.filter((student) =>{
//     return student.age > 20; 
// })

// const newArr = filteredData.map((student) => {
//     return student;
// })



//try catch block ---------------------------------------------------------------
// const user = {
//     name: "Tushar",
//     age: 21,
//     // address: {
//     //     city: "Panchkula",
//     // }
// }

// try{
//     // let a = 12;
//     // console.log(a);
//     console.log(user.address.city);
// }
// catch(err){
//     console.log(err.message);
// }
// console.log("code ended");



// fetch api  ---------------------------------------------------------------
// fetch("https://dummyjson.com/products").then((res) => {
//     return res.json();
// }).then((data) => {
//     console.log(data);
// })


// small api program 
// let img = document.querySelector("img");

// fetch("https://dog.ceo/api/breeds/image/random").then((res) => res.json())
// .then((json) => {
//     img.src = json.message
// })


// async and await ---------------------------------------------------------------
// async function request(){
//     let sleep = setTimeout(function sleep(){
//         console.log("Hello, Good Morning");
//     },5000)

//     let result = fetch(sleep);
//     console.log(result);
// }   

// request();



// api is js -----------------------------------------------------------------------------
// api stands for application programming interface
// 

// {
//     "courseName": "js in hindi",
//     "language": "hindi",
//     "price": "1499rs",
// }