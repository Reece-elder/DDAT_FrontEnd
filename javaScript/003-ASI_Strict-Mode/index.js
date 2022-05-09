'use strict';
// ASI - Automatic Semicolon Insertion 
// JavaScript *tries* to be smart, and thinks it is smarter than you

// JS sees these two variable declarations as two separate lines and will put a ';' at the end of each
let day = "thursday"
let date = 5

// clg -> console.log
console.log(day);
console.log(date);

// Two lines are separated by a line terminator ("/n" OR press enter)
// Two statements are separated by a closing brace }
// line terminator follows BREAK, RETURN, THROW, CONTINUE

// Strict Mode - Stops JS from doing silly things
// 'use strict'; // Anything after this must follow 'Strict Code' 

// When using strict mode you cannot use a variable without declaring it
x = 10; 

console.log(x);
