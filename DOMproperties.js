// innerHTML vs innerText vs textContent
const element = document.querySelector("h1");
// hi has the value <h1>Beginner To Advance JS</h1>


// 1. innerHTML
// it represents the HTML content inside an element and also the HTML tags used inside the element
// const usingInnerHTML = element.innerHTML;
// console.log(usingInnerHTML);  


// 2. innerText
// it only represents text content of an element
// displays plain text and no HTML tags
const usingInnerText = element.innerText;
console.log(usingInnerText);