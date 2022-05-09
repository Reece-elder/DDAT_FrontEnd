'use strict';
// alert("DOM manipulation");

// DOM -  Document Object Model 
// The way our browser interprets the HTML code, looking at how the <elements> belong to each other
// Through JS we can manipulate the DOM our browser sees, changing and adding new elements through code

// When modifying existing parts of the DOM, you must select those parts using query selectors
// querySelector(CSS selector) h1 - h4 - p, .blue-border, #header1
let header1 = document.querySelector(".main-header"); 

console.log(header1);
console.log(header1.textContent);  // attribute of my element, and is the internal text
header1.textContent = "some new text!"

header1.style.color = "purple";

// An event listener - listens for an event (click, scroll) 
// and does something when that event occurs

let button1 = document.querySelector("#increaseCount");

let count = 0;

// The function that runs when the button is clicked 
let increaseCount = () => {
    count ++;
    console.log(`Current value of count: ${count}`);
    header1.textContent = `Current value of count: ${count}`;

    // Adding new headers below
    let newHeader = document.createElement('h2');
    newHeader.textContent = `Current value of count: ${count}`
    parentDiv.appendChild(newHeader);
}

// Event listeners ALWAYS GO AT THE BOTTOM
button1.addEventListener('click', increaseCount)


// Generating elements and adding them to our page via JavaScript 
// Create the element we wish to add
// create a new h2 element and call it newHeader
let newHeader = document.createElement('h2');
newHeader.textContent = `Current value of count: ${count}`

// Find where we wish to add it to 
let parentDiv = document.querySelector("#headerList");

// Append our new element to the DOM 
parentDiv.appendChild(newHeader);


