'use strict';
// alert("callbacks!");

// Callbacks - Created when you create a function that takes in another function expression
// Function A (other Function) -> Does something with the function that is passed in
// Function B () -> does something else
// Command - Run function A passing in function B -> functionA(functionB)


// Function WILL be called back -> passing this into the other function
const helloPerson = (text) => {
    console.log(`Hello ${text}`);
} 

// Function WILL be called back -> passing this into the other function
const goodByePerson = (text) => {
    console.log(`Goodbye ${text}`);
}

// Function that will be CALLING BACK
const input = (callback) => {
    let inputText = prompt(`Please enter your name`); // prompt creates an alert with an input field 
    // Whatever the user enters will be called 'inputText'

    // Run the function that is being passed in: 
    callback(inputText);
}; 

// input(helloPerson);
input(goodByePerson);