// local storage -----------------------------------------------------------
// javascript local storage is a web storage feature that allows you to store the key-value pairs in browser.

// if the data is saved in the local storage, the data is not lost during reload of the page or the browser is closed, you can still access the key and its value even after that.   

// eg :
// const nameElem = document.querySelector("#name-tag");
// const nameInput = document.querySelector(".name");
// const ageElem = document.querySelector("#age-tag");
// const ageInput = document.querySelector(".age");

// nameElem.innerText = localStorage.myName; 
// localStorage is where out key and value is stored and .myName is the key which has the value i.e my name and at the place of the const nameElem my name that is stored into the local storage will be printed.


// updating the value of the key in the local storage with the help of input box
// what ever input will be written in the inputbox, it will update the value of the key in the local storage

// but this method of getting and updating the value from local storage is not correct or is not recommended and when reload the page the value displayed below will be removed
// nameInput.addEventListener('input', function(input){
//     localStorage.myName = input.target.value;
//     nameElem.innerText = localStorage.myName;
// })


// best way to get and update the value from local storage is:
// getting the value using getItem('key') 
// nameElem.innerText = localStorage.getItem('myName'); 

// updating the value using setItem()
// nameInput.addEventListener('input', function(input){
//     localStorage.setItem('myName', input.target.value);
//     nameElem.innerText = localStorage.getItem('myName'); 
// })

// nameElem.innerText = localStorage.getItem('myAge'); 
// ageInput.addEventListener('input', function(input){
//     localStorage.setItem('myAge', input.target.value);
//     ageElem.innerText = localStorage.getItem('myAge'); 
// })


// local storage only store data in string form
// we have made an object which we will conver it into json string using JSON.stringify which will convert the object into string, to be stored into local storage

// using JSON.parse we are converting json string into object
// const myData = JSON.parse(localStorage.getItem('myData')) || {};

// if(myData.name){
//     nameElem.innerText = myData.name;
// }

// if(myData.age){
//     ageElem.innerText = myData.age;
// }

// nameInput.addEventListener('input', (e)=>{
//     myData.name = e.target.value;
//     localStorage.setItem('myData', JSON.stringify(myData));
//     nameElem.innerText = e.target.value;
// })

// ageInput.addEventListener('input', (e)=>{
//     myData.age = e.target.value;
//     localStorage.setItem('myData', JSON.stringify(myData))
// })