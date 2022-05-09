'use strict'; 

// Destructuring - Allows you to extract and manipulate data from: arrays, objects, maps etc. and saves the data as a new variable

// My array to destructure
let numArray = [1,2,3,4,5,6,7,8];
console.log(numArray[5]);
console.log(numArray[6]); // Leads to human error

let [a,b,c,d,e,f,g,h] = numArray; // 1 of numArray = a, 2 = b, 3 = c
console.log(f);
console.log(g);

// a temp array of variables to destructure
let [red, blue, green, purple, yellow, orange] = numArray;
// Looping through this array, the values are associated 1 by 1 
console.log(red);       // - 1
console.log(blue);      // - 2
console.log(green);     //...
console.log(purple);
console.log(yellow);
console.log(orange);    // - 6


let colourArray = ["red", "blue", "green", "purple"];
colourArray = numArray;
console.log(colourArray);


// Skip Elements - Allow you to pass over some elements during destructuring only grabbing ones you want
let numArray2 = [1,2,3,4,5,6,7,8];
// a1 = 1
// ,, - skip 2
// b1 = 3,
// c1 = 4
// saving the rest as a different variable 
let [a1,b1,...rest] = numArray2;

console.log(a1);
console.log(b1);
console.log(rest);


// Destructuring Objects

let movie = {
    title : "starship troopers",
    rating : 10,
    genre: "sci-fi"
};

console.log(movie);

// Looks for a value with this specific attribute name
let {title, genre} = movie;
console.log(`Title: ${title} and genre: ${genre}`);

// I wanted to pull a value from the object but give it a different name 
let {rating: score} = movie;
console.log(score);

// Destructuring nested objects 
let cinema = {
    screens: 12,
    location: "newport",
    bestSellingMovie : { 
        title : "starship troopers",
        rating : 10,
        genre: "sci-fi"
    }
}

// Screen number, movie : title, movie : rating
// screens - direct destructure
// destructure the nested object, renamed title -> movieTitle
// pulled the rating score 
let {screens, bestSellingMovie: {title: movieTitle, rating}} = cinema;
console.log(screens, movieTitle, rating);



