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


const newArr = myArr.join