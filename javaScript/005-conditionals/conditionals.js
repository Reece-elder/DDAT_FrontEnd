'use strict';

// Conditionals are blocks of code we can use to divert the flow depending on a specific value 

let colour = "green";

if(colour == "red") {
    console.log("Colour is red!");
} else if (colour == "blue"){
    console.log("Colour is blue");
} else {
    console.log("Colour is neither red nor blue");
}

let value = 1;

if(value == "1"){
    console.log("Number is equal to string");
} else {
    console.log("Number is not equal to string");
}

// Known as Truthy and Falsey - An extra attribute that EVERY value has
// Every value is truthy (contains some data) EXCEPT FOR THE FOLLOWING:
// - null 
// - false
// - 0
// - undefined
// - ""
// - NaN (Not a Number)
let horribleNumber = NaN;

console.log(typeof horribleNumber);

console.log(1 == "1"); // Checks the value and returns it
console.log(1 == [1]);
console.log(1 == true);
console.log("1" == true);

console.log(1 === "1"); // '===' checks the value AND the data type 
console.log(1 !== "2"); // '!==' checks the value AND the data type aren't the same  

console.log(7 >= "5");  // No triple equals for > < 

// Always use === when using conditionals
if(colour === "red") {
    console.log("Colour is red!");
} else if (colour === "blue"){
    console.log("Colour is blue");
} else {
    console.log("Colour is neither red nor blue");
}


// ternary operators are short hand to make simple if else statements 
let number = 7
if(number >= 9){
    console.log("number is greater than or equal to 9");
} else {
    console.log("number is less than 9 ");
}

// name of the variable to return - string
// After declaring the variable we put in the query (number >= 9) ? 
// value if it is true : value if it is not true 
let string = number >= 9 ? "number greater or equal to 9 " : "number less than 9";
console.log(string);