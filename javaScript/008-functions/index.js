'use strict';
// alert("functions");

// Functions - Methods, block of code that is executed when you tell it to run
// functions take in parameters, that are passed into the code block

// Standard function, but is rarely used 
// not saved as a variable, just a function that can be called 
function add(x,y){
    return x + y;
}

console.log(add(4,6)); //               -> 10 
console.log(add("hello", " world")); // -> hello world

// Function expression - functions are stored as variables, meaning they can be passed in to other functions more easily
// moved the name of the function to the name of the variable
const subtract = function(x, y){
    return x - y;
}

// console logging out the function itself
console.log(add);
console.log(subtract);

console.log(subtract(9,7));
console.log(subtract(7,3));

// Functions and function expressions can be used as variable values 
let x = 19;
let y = 5;
let sum = `Result of ${x} - ${y} = ${subtract(x,y)}`
console.log(sum);


// Arrow functions - Shorthand method of creating functions, every answer on stack overflow and reddit uses arrow functions 

// Lowest level of function expression
function hello1(name){
    return `Hello ${name}`
};

// Function expression
let hello2 = function(name){
    return `Hello ${name}`
};

// removed the word function, and added => after the paranthesis
let hello3 = (name) => {
    return `Hello ${name}`
}

// because the function only returns one thing we can skip the {}
let hello4 = (name) => `Hello ${name}`

// If only one parameter added in you can skip the ()
let hello5 = name => `Hello ${name}`
