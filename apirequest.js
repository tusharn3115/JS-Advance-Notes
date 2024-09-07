// API request and V8 engine ----------------------------------------------------------

// XMLHttpRequest
const requestUrl = 'https://api.github.com/users/tusharn3115';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);  

// .open() requires two parameters first is the state in which you want to send the request i.e GET, POST etc. and second parameter is string i.e the url or the api

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        console.log(this.responseText);  

        //this is used to refer the current context i.e like here the current context is the function and i am refering to the functions response text
        
    }
}
console.log(xhr.readyState);
xhr.send();