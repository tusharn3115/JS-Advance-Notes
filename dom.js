// parent , children , nextElementSibling --------------------------------------- 

const week = document.querySelector(".week");
// console.log(week);
// console.log(week.children)
// console.log(week.children[1].innerHTML);

// for(let i = 0;i < week.children.length;i++){
//     console.log(week.children[i].innerHTML);
// }


const days = document.querySelector(".days");
// console.log(days);
// console.log(days.parentElement);
// console.log(days.nextElementSibling);


// Creating new element ----------------------------------------------------------------------

const div = document.createElement("div")
// console.log(div);
div.className = "main";   // creating class name
div.id = "myId";    // creating id 
div.setAttribute("title", "generated title");  // setting attribute
div.style.backgroundColor = "blue";   // adding styling
div.style.padding = "25px";
const text = document.createTextNode("Hello form js");
div.appendChild(text);  // appendChild is adding text to div
// document.body.appendChild(div);  // showing our div to browser web page by using appendChild to body



// Edit and remove elements in DOM -----------------------------------------------------------

// adding element but this process is not optimized because it has to traverse the DOM tree
function addLanguage(langName){
    const li = document.createElement("li");
    li.innerHTML = `${langName}`;  // using innerHTML is traverse the DOM tree
    document.querySelector(".language").appendChild(li);
}
addLanguage("python");
addLanguage("typescript");


// optimized way to add an element
function addOptiLanguage(langName){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}
addOptiLanguage("");
addOptiLanguage("goLang");

// edit element ------------------
const editLang = document.querySelector("li:nth-child()")
