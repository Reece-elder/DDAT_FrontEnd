alert("Connected!");

// let   - Can change
// const - constant, so can't change
// var   - global can change, don't use this

let stringExample = "This is text!";
let numberExample = 20;
let booleanExample = true;
let arrayExample = ["Array", "of", "stuff", 10]; // JS an array is a list of any elements 
let floatExample = 12.23;
let bigNumber = 123456789383749272783038n;
let objectExample = { 
    pizzaType: "Pepperoni", 
    size: 12, 
    stuffedCrust: true
}; // Object is a collection of any data 
   // JSON -> JavaScript Object Notation (has quote marks around attribute names)
let nullExample = null;      // A null variable (empty)
let undefExample = undefined // An undefined variable (has no value)
let undefinedImplicit;       // Is undefined

// The developer doesn't define data types but just puts in values
// When the JS logic hits a variable, it reads the value and determines the current data type 

console.log(typeof stringExample); // Tell us what type of data is stringExample
console.log(stringExample);
console.log("========================================");

stringExample = 300; // Setting the value of stringExample to be a number

console.log(typeof stringExample); // Tell us what type of data is stringExample
console.log(stringExample);

/* 
Exercise: 
Create variables with data types for the following: 
String, big number, float, boolean, object
use console.log(typeof <data>) to check the type of data for each
2 of the variables change the type of data to another data type and check the new value

*/