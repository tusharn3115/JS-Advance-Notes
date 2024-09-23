// events -------------------------------------------------------------
// Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs. 

// For example, if the user clicks a button on a webpage, you might want to react to that action by displaying an information box.

document.getElementById("plant").addEventListener("click", (e)=> {
    // alert("Plant image clicked");
    // event object
    // console.log(e);

    // main in event object 
    // type, timestamp, defaultPrevented, target, toElement, sourceElement, currentTarget, clientX, clientY, screenX, screenY
})



// event propogation
// 1. Bubbling (default or false bhi likhte hai as third parameter in addEventListner)
document.getElementById('images').addEventListener("click", ()=> {
    // console.log("clicked inside li");
});

document.getElementById('plant').addEventListener("click", ()=> {
    // console.log("clicked plant");
});

// now jb tk hm click krte hai images or li ke under tb phela event chalega and clicked inside li print hoga console per

// but jb hm plant img per click krte hai toh second event run hona chahiye but plant img li ke under bhi to hai and li per bhi event lga hai toh phele plant wala event run hoga then li wala event run hoga 

// like a bubble floats from down to up like wise plant wala event phele print hoga and then li wala event print krega.


// 2. Capturing
// capturing jata hai top to bottom but to use this eventListner by default flase hota hai we have to make it true

// eventListner("event", function(){}, false / true)
// false - bubbling and by default hota hai
// true - capturing and this is the correct method

document.getElementById('images').addEventListener("click", ()=> {
    // console.log("clicked inside li");
},true);

document.getElementById('plant').addEventListener("click", ()=> {
    // console.log("clicked plant");
},true);


// 3. Stop Propogation
// sometimes we don't want do buble element and also the result not to printed in case such as capturing 

// to do so we use stopPropogation() jiseh bubbling nhi hogi and upper element ka result bhi show nhi hoga

// we have to pass some parameters and to that parameter we will pass stopPropogation()

document.getElementById('images').addEventListener("click", (e)=> {
    // console.log("clicked inside li");
});

document.getElementById('plant').addEventListener("click", (e)=> {
    // console.log("clicked plant");
    // e.stopPropagation();
});



// 4. Prevent Default
// preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur

document.getElementById("google").addEventListener("click", (e)=>{
    // e.preventDefault();
    // e.stopPropagation();
    // console.log("Google Clicked");
})


// Practice js question ------------------------------------------
// when we click on image the image will be removed ?

document.getElementById("images").addEventListener('click', (e)=> {
    // console.log(e.target.parentNode);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        const remove = e.target.parentNode;
        remove.remove();
    }
    // remove.style.display = "none";
})