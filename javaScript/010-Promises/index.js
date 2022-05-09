'use strict';
// alert("promises");

// Promises - Placeholder for some data that will be available: immediately, some time in the future, or never atall 
// When we are using data from some other source (outside of JavaScript code) and other functions rely on this data 

// Promises = the data we're waiting for and come in 3 states: 
// Pending   - Not fulfilled or rejected yet
// Fulfilled - Data retrieval was successful and we've got data
// Rejected  - Data retrieval was unsuccessful

// someMethod().then() -> whatever the previous method returns, do this with it 
// someMethod().catch()            -> whatever the method throws (failed) do this with it

// Instantaneous - JavaScript runs from the top to the bottom, when we get to (console.log(x)) it is equal to 7
let x;
x = 7;
console.log(x);

// new arrow function called newPromiseExample
// arrow function takes in as a parameter a 'new promise' object
// promise takes in functions as callbacks
// resolve commonly written as res, reject commonly written as rej
let newPromiseExample = new Promise( (resolve, reject) => {

    let a = 3; 
    if (a == 2){
        // What happens if it is successful
        resolve("Succesful! :)") // resolve callback is ran passing in this string 
    } else {
        reject("Failed :( "); // reject callback is ran 
    }
});

// Once newPromiseExample returns something, pass it in as a parameter to our .then()
newPromiseExample.then((message) => {
    console.log(`This is in the .then block, status is ${message}`);
}).catch((message) => { // .catch() ONLY RUNS if the reject() callback is thrown (some type of error)
    console.log(`This is in the .catch block, status is ${message}`);
}).then(() => { // Will run regardless of whether it is succesful or not, because it is after the .catch()
    console.log("This will always run");
})

newPromiseExample();