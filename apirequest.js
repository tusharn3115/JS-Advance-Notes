// API request and V8 engine ----------------------------------------------------------

// XMLHttpRequest
const requestUrl = 'https://api.github.com/users/tusharn3115';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);  // .open() requires two parameters first is the state in which you want to send the request i.e GET, POST etc. and second parameter is string i.e the url or the api
console.log(xhr.readyState);
xhr.send();