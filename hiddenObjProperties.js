// object getOwnPropertyDescripter --------------------------------------------------

// there are some properties of object which can not be seen that easily 
// the property getOwnPropertyDescripter tells us about some of the hidden properties of object 

// Object.getOwnPropertyDescriptor(); // two parameters name and key

// for example: 
// console.log(Math.PI);

// Math.PI is universal selector who's value(PI = 3.141592653589793) cannot be changed 
// so if you will try to overwrite or change its value you will not be able to change the value, but why we cannot change the value not because its a universal selector but 

// const value = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(value);

// output:
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

// as we can see the writable value is false and this property is hard coded as false that we can never be able to change the value of PI 




// defining own property -------------------------------------------------------------

// we can also define our own properties by using defineProperty()

const shoes = {
    name: "Nike",
    price: 1299,
    isAvailable: true,
}

console.log(Object.getOwnPropertyDescriptor(shoes, "name"));

Object.defineProperty(shoes, 'name', {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(shoes, "name"));

for (let [key, value] of Object.entries(shoes)) {  
    // object.entries means bring the all entries or the properties in the object 
    console.log(`${key} : ${value}`);
}