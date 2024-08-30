// Q1. To check weather the input is array or not

// method 1 (Array.isArray)
// function checkArr(inp){
//     return Array.isArray(inp);
// }

// console.log(checkArr(1));
// console.log(checkArr({}));
// console.log(checkArr([1, 2, 3, 4, 5]));

// method 2 (instanceof)
// function checkArr(inp){
//     return inp instanceof Array;
// }
// console.log(checkArr("Tushar"));
// console.log(checkArr(12));
// console.log(checkArr([1,2,3,4,5]));


// Q2. Write a function to clone an array

function clone(arr){
    var cloneArr = [...arr];
    return cloneArr;
}
console.log(clone([1,2,[3,4,5]]));