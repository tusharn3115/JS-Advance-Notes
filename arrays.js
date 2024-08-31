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
const newArr1 = myArr.slice(1,3) // what slice method do is it will give you the elements b/w the index 0 and 3 so result will be 1 and 2 and 3 will not be included i.e the last index given is not included 
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
console.log(newAnother_arr);
