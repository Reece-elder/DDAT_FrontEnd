'use strict';
// alert("Objects and arrays!");

// Objects - Collections of data, put in key pair values
// Generally everything is mutable - everything can be expdanded, modified, changed 
let zaph = {name: "zaph", colour: "Speckled brown", chonky: true};

console.log(zaph);
console.log(zaph.colour);

zaph.age = 5;
console.log(zaph);

// Generally your database will return an array [] of objects {}
// {
//     "name" : "zaph",
//     "colour" : "brown",
//     "chonky" : true
// }


// Arrays - Are lists of some type of data, they are completely mutable and can contain any number of different types of data 
let cattery = []; // An empty array called cattery 

console.log(cattery);
cattery.push(zaph); // Push the zaph object into our cattery array
cattery.push({name: "oliver", colour: "cinnamon brown", chonky: false});
cattery.push({name: "Hazel", colour: "black", chonky: true});
console.log(cattery);

// S _ _ _ R E    B R _ _ _ _ T S
// Print out to the console every name in our cattery, how could we do this 
for(let i = 0; i < cattery.length; i++){
    console.log(cattery[i].name);
}

// For every item in our array (cattery), declare the current item as a temp variable (i)
for(let i of cattery){
    // Do this with the current temp variable
    console.log(i.colour);
}



// Object that contains an Object, the child object contains an array 
// Doghouse {} -> Dog {} -> Fav Foods []

let dogHouse = {
    material : "oak",
    colour: white, 
    dog : {
        name : "Spot",
        type : "Corgi",
        bitey : true,
        favFood : ["toes", "bugs", "carrots"]
    }
}