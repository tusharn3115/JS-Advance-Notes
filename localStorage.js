// local storage -----------------------------------------------------------
// javascript local storage is a web storage feature that allows you to store the key-value pairs in browser.

// if the data is saved in the local storage, the data is not lost during reload of the page or the browser is closed, you can still access the key and its value even after that.   

// eg :
const nameElem = document.querySelector("#name-tag");
nameElem.innerText = localStorage.myName; // localStorage is where out key and value is stored and .myName is the key which has the value i.e my name and at the place of the const nameElem my name that is stored into the local storage will be printed.