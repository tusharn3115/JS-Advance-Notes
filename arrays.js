// arrays ----------------------------------------------------------------------
// it stores a collection of multiple items of different datatype under a single variable
// these data are stored into a square brackets []
// indexing of arrays starts with 0
// array copy operation creates a shallow copies

const myArr = [0,1,2,3,4,5];
// console.log(myArr[4]);


// array methods 
myArr.push(6,7,8);  // push method basically adds elements into the array
// console.log(myArr);
myArr.pop() // pop method removes the element from the last position of an array and it don't need any argument
// console.log(myArr);


myArr.unshift(9); // unshift method is same as push method but the value is added at the beggining of the array 
myArr.shift(); // shift method is same as pop method but remove value from the start of an array
// console.log(myArr);


// console.log(myArr.includes(5)); // includes method is a questionnaire method which help us to verify if the asked or given value in included in the array and the result is returned into a boolean value 
// console.log(myArr.indexOf(0)); // indexOf method help us to find the index or position of the given value


const newArr = myArr.join() // join method adds all the elements of an array into a string, separated by the specified separator string.
// console.log(newArr);


// slice and splice
const newArr1 = myArr.slice(1,3) // what slice method do is it will give you the elements b/w the index 1 and 3 so result will be 1 and 2 and 3 will not be included i.e the last index given is not included 
// console.log("A ", myArr);
// console.log(newArr1);


const newArr2 = myArr.splice(1,3) // what splice method do is same as slice but it includes the last index and its value, so the result will be 1,2,3
// console.log("B ", myArr);
// console.log(newArr2);

// the main difference b/w slice and splice is not that slice do not includes the end index and splice includes last index, but in slice original array connot be manipulate but using splice the original array is manipulated and the original array includes the spliced value


// combining arrays 
const marvel1 = ["ironman","spiderman"];
const marvel2 = ["capitanamerica","doctorstrange"];

// using push method
// marvel1.push(marvel2);
// console.log(marvel1);


// using concat method
// const allHero = marvel1.concat(marvel2);
// console.log(allHero);


// using spread operator
// spread operator spreads all the element of arrays individually into new empty array
const all_heros = [...marvel1, ...marvel2];
// console.log(all_heros);


// flat operator
// The flat() method concatenates sub-array elements into a single array
const another_arr = [1,2,3,4,[5,6,[7,8,9]]];
const newAnother_arr = another_arr.flat(Infinity);
// console.log(newAnother_arr);




// foreach loop for array -------------------------------------------------------------
// foreach loops are specifically for arrays.
// if we try to store this foreach loop into variable and then print the output we will get undefined because by default for each loop do not returns any value back

let arr = ['js', 'html', 'css', 'react'];

let val = arr.forEach((lang) => {
    // console.log(lang);
})
// console.log(val);
// but if we want some condition to be applied then it can't be done with the help of foreach loop
// to do so we use filter method




// 2. Filter ---------------------------------------------------------------
// filter() method is used to create a new array that contains only the element from the original from the array

// the element that is stored into the new array is depended apon returned condition
// let months = ["January", "February", "March", "April", "May", "November", "December"];

// var filteredArr = months.filter((months, index, array) => {
//     return months.toLowerCase().includes("m");
//     // so only months with letters 5 or less will be stored into filteredArr i.e the new array that it makes
// });

// practice question
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbooks = books.filter((bks)=>{
    // return bks.genre === "History";
    // return bks.edition > 2000;
  })
//   console.log(userbooks);
  



// 1. map ---------------------------------------------------------------
let months = ["January", "February", "March", "April", "May"];
// map() creates a new array from calling a function for every array element 
// map does not change the original array
// there is no duplicate values in map collection, only unique values are stored

var mappedArr = months.map((months, index) => {
    // console.log(index, months)
    return arr;
});


// chaining in js ---------------------------------------------------------
const numb = [1,2,3,4,5,6,7,8,9,10];

const newNumb = numb.map((num)=>{return num*10})
                    .map((num)=>{return num+1})
                    .filter((num)=>{return num >= 40});
// console.log(newNumb);




// reduce in js ------------------------------------------------------------
// The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array.

const myNum = [1,2,3,4,5];
const myTotal = myNum.reduce(function(accumulator, currentValue){ // accumulator stores the value given after the function closes i.e given 0 or the initial value bcoz it did'nt know what to store but after first iteration it stores the new result returned every time when operation is performed 
    
// current value is which value is selected from the array

    // console.log(`accumulator is ${accumulator} and current value is ${currentValue}`);
    return accumulator + currentValue;
},0);
// console.log(myTotal);


// practice question
// add the total price of the items in the shopping cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const initialValue = 0;
const totalPrice = shoppingCart.reduce((accumulator, currentVal) => {
    return accumulator + currentVal.price;
},initialValue)
console.log(`Your total price is ${totalPrice}rs`);