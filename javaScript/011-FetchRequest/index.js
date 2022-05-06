'use strict';
// alert("Fetch request!");

// GET     - Retrieving data
// POST    - Uploading data
// PUT     - Updating data (updating THE ENTIRE DOCUMENT)
// DELETE  - Deleting data
// PATCH   - Updating singular bits of data, partial update

// Fetch - JavaScript framework (kind of) for sending and receiving data via promises 

let userData;

let getUsers = () => {
    
    // fetch takes in a URL
    fetch("https://reqres.in/api/users") 
        .then((response) => {               // whatever fetch returns, call it response and do this with it 
            console.log(response);          // Print to the console what it returns
            if(response.status !== 200){    // If the response.status IS NOT 200, somethings gone wrong
                console.error(`status: ${response.status}`)
                return;
            }
            response.json()                // Convert our response to a JSON() string
                .then((data) => {          // .then() whatever the previous method returns, do this once it has returned
                    userData = data.data;
                });   
        })
        .catch((error) => {                 // if fetch fails, run the .catch() and pass in the error message
            console.log(`Error: ${error}`); 
        })
}; 

getUsers();

