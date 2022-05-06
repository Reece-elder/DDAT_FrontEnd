'use strict';
alert('iteration');
// Iteration is repeating a block of code - You're not having to write lots of code

// If you know how often the loop should run - for loop
// If you dont know how often                - while loop 

// For Loop - Does something a predetermined amount of times 

// i starts at 0, while i is less than 10, console log out "Hello" and add 1 to i
for(let i = 1; i < 11; i++){
    console.log("Hello!");
    console.log(i); // Print out 1 to 10 
}

for(let i = 0; i < 10; i++){
    console.log("Hello!");
    console.log(i + 1); // Print out 1 to 10 
}

// While Loop - Does something while a declared boolean query = true 

let counter = 0;

while(counter < 10){
    console.log("Counter value: " + counter + " !"); // concatenation
    console.log(`Counter value: ${counter} !`);      // template literals
    counter++;  // increment counter by 1 
}

// Create a loop that prints 1 - 10, 10 times each 

for(let i = 0; i < 10; i++){
    for(let x = 0; x <10; x++){
        console.log(x + 1);
    }
}