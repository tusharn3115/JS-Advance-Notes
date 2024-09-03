// innerHTML vs innerText vs textContent
const element = document.querySelector("h1");
// hi has the value <h1>Beginner To <strong>Advance</strong> JS <span style="display: none;">bottom to top</span></h1>


// 1. innerHTML
// it represents the HTML content inside an element and also the HTML tags used inside the element
// ye sabh dikhayega h1 tag ka under text or strong tags and span bhi as wo display none hai but to tag with attribute bhi display hoga
console.log("Using InnerHTML :");
const usingInnerHTML = element.innerHTML;
console.log(usingInnerHTML);  


// 2. innerText
// it only represents text content of an element
// displays plain text and no HTML tags
// ismai sirf h1 tag ka text show krega or h1 tag ke under ke tags show nhi krega and span also bcoz wo display none hai 
console.log("Using InnerText :");
const usingInnerText = element.innerText;
console.log(usingInnerText);


// 3. textContent
// it gives you all the text inside an element, including any text from the elements inside it. It doesn't include any HTML tags, just the plain text.
// ismai sirf h1 tag ke under ka text print hoga even agar koi text dispaly none ho like span but tags show nhi hongay only the palin text
console.log("Using TextContent :");
const usingTextContent = element.textContent;
console.log(usingTextContent);