// js advance

// 1. execution context------------------------------------------------------------------

// eg: 
// function abcd(){
//     var a = 12;
//     function xyz(){
//         var b = 21;
//     }
// }

// is function ka execution context ya fir imaginary container create hota hai jismai variables, function ke under jitne bhi function ho or lexical enviroment hote hai 

// lexical enviroment help us to know what this function can access i.e the variable in function xyz() cannot be accessed by the parent function abcd(), and this we know because of lexical enviroment



// 2. how to copy reference value -------------------------------------------------------

// eg:
// var a = [1, 2, 3, 4, 5];
// var b = a;

// b.pop();

// hme lgta hai ki pop b se hui hai jo ki shi hai but value pop a se bhi hui hai, kyuki a ki value b mai as a reference gyi hai toh that doesn't means ki effect sirf b per pdega but a per bhi pdega kyuki hm a ke value copy nhi krrhe b mai but real value store hoti hai as a reference which effects var a also is any changes applies

// now we will see how to actually copy value 
// for this we use spread operator 
// with the help of spread operator which is three dot before an operator(...var/operator) we can copy the value from one operator to another can changes won't reflect to actual value as spread operator makes real copy.

// var a = [1, 2, 3, 4, 5];
// var b = [...a];
// b.pop();

// we can also copy object
// var obj = {name: "Tushar"};
// var copyobj = {...obj};



// truthy and falsy ---------------------------------------------------------------------
// js mai kuch bhi liko wo sirf do category mai se kisi ik category ki hoti hai ya to truthy ya fir falsy

//  falsy values are - 0 , null , undefined , NAN , false , document.all
//  rest all are truthy accepts these falsy values
//  falsy value kya krti hai ki in falsy value ko false mai convert krdeti hai 

// eg:
// if("Tushar"){
//     console.log("Truthy value hai");
// }else{
//     console.log("Falsy value hai");
// }



// foreach, forin, do-while loops ------------------------------------------------
// 1. foreach

// sirf array per use hota hai
// foreach array per effect nhi krta but uski temporary copy per changes apply hote hai naki array put toh array unchanged rehta hai

// eg:
// var a = [1,2,3,4,5,6,7,8,9];
// a.forEach(function(val){
//     console.log(val+2);
// })
// console.log(a);


// 2. forin

// objects per loop use krne ke liye we use forin loop

// eg:
// var obj = {
//     name: "Ram",
//     age: 21,
//     city: "UP",
// }

// for(var key in obj){
//     // console.log(key);  // sirf key print hongi
//     console.log(key,":", obj[key]); // dono key and values print hongi
// }



// callback functions -------------------------------------------------------------

//  jo code badh mai chalta hai 
// hm ik function dete hai ki jb complete hojaye to ye function chala dena or wo ik nornal function hai jisko hm callback function khete hai

//eg:

// setTimeout(function func(){
//     console.log("Callback Function")
// }, 2000);



// first class function -----------------------------------------------------------

// when we can use function as a value that is known as first class function 

// function func(a){
//     a();
// }
// func(function(){console.log("Hello");});  
// we are passing funtion as a value also called first class