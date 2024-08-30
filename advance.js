// objects ---------------------------------------------------------------
const user = {
    name: 'Sarthak',
    age: 21,
    email: 'sarthak@gmail.com',
    isLoggedIn: true,
    lastLoggedIn: ['monday', 'wednesday', 'saturday', 'sunday'],
}
console.log(user.email)
console.log(user['email'])  // this is correct way to access the value




// 1. map ---------------------------------------------------------------
// let months = ["January", "February", "March", "April", "May"];
// map() creates a new array from calling a function for every array element 
// map does not change the original array

// var mappedArr = months.map((months, index) => {
//     console.log(index, months)
//     return arr;
// });


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