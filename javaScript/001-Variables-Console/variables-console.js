// Variable - Some type of Data (String, number, array), more control (private, public)
// Lets you convert a long, unreadable text into a simple name "lwefwefunweofunwefe8383839f3u39332qr3rf73q" -> id

// let   - Declare a variable that CAN change
// const - Declares a variable that CAN'T CHANGE

const name = "Reece"; 
let age = 26;

let weekendPlans;  // Declaring a variable that currently has no value 
const dinnerPlan = "Chicken Biriyani";  // Can't initialise a const with no value as it will never change


// DON'T DO THIS. IT IS BAD. BUT YOU WILL SEE IT ON STACK OVERFLOW
drink = "coffee";     // drink is now a global let variable that is accessible EVERYWHERE
var day = "Thursday"  // var = global let variable 


// To print this data to our 'console' 
console.log(name);   // Print out the value of the data
console.info(name);  // Print out the value of the data (with more emphasis)
console.warn(name);  // Print out the value of the data but with a warning message
console.error(name); // Prints out the data as an error message 

// Printing out a variable that has no value
console.log(weekendPlans)

weekendPlans = "Painting friends house";

console.log(weekendPlans);