// ARRAYS
console.log('-- ARRAYS --');

// Declaring an Array
var sports = ['football', 'tennis', 'rugby'];

// Length Property
var numberOfElements = sports.length;
console.log(numberOfElements);

// Accessing Elements
var firstSport = sports[0];
console.log(firstSport);

var secondSport = sports[1];
console.log(secondSport);

// Adding Elements to the End (push)
sports.push('curling');
sports.push('snooker');
sports.push('darts');
console.log('Sports:', sports);

// Removing Elements from the End (pop)
sports.pop(); // removes darts
console.log('Sports:', sports);

// pop also returns the removed item (which can be stored in a variable):
var removedSport = sports.pop() // removes snooker
console.log('Removed Sport:', removedSport);
console.log('Sports:', sports);

// pop and push operate on the end of the array. We can do the same to the start of the array using shift and unshift respectively.

// Adding Elements to the Start (unshift)
sports.unshift('basketball');
console.log('Sports:', sports);

// Removing Elements from the Start (shift)
var removedSport = sports.shift();
console.log('Removed Sport:', removedSport);
console.log('Sports:', sports);

// Manipulating Arrays (splice)

sports = ['football', 'tennis', 'rugby', 'curling', 'snooker']

/* Let's remove 'curling' from the sports array using splice. We can see from the docs that splice has parameters:
    1. start is the index position that we want to start removing from. We are removing 'curling' so we will pass it the index position, which is 3.
    2. deleteCount is the number of items to remove. We only want to remove one element so we will pass it 1.
    3. We would use the additional optional arguments if we wanted to use splice to add items into the array, which in this case we don't.
splice returns an array of all of the items it removed, and modifies the original array we called it on. */

var removedSport = sports.splice(3, 1); // remove sport at position index 3, remove just the 1. Alternative example: sports.splice(2, 2) would remove items at index 2 (rugby) and 3 (curling).
console.log('Removed Sport:', removedSport);
console.log('Sports:', sports);

// LOOPS
console.log('-- LOOPS --');

// Iterating Over Arrays (to loop through an array we can use the for...of statement.)

for (var currentSport of sports) { // for each sport in sports
    var upperCasedSport = currentSport.toUpperCase(); // convert text to uppercase
    console.log (upperCasedSport); // print output to console
}

// Equivalent "long-form" for loop syntax - to have more control over the iteration process. for (initialiseCounter; condition; incrementCounter)

for (var i = 0; i < sports.length; i++) {
    var currentSport = sports[i];
    var upperCasedSport = currentSport.toUpperCase();
    console.log(upperCasedSport);
}

/* - The initialiseCounter section runs once, before we begin looping. Here we set the initial index value (counter variable).
   - The condition is checked before every iteration of the loop. If it's true, we loop again, if it's false, we stop looping and continue the program after the closing brace. (})
   - The incrementCounter section is run after each iteration of the loop. Here we usually want to change our counter variable in some way so that after the appropriate number of iterations, 
     the condition is false and the loop can end. */

// OBJECTS (aka dictionaries)
console.log('-- OBJECTS --');

// Declaring Objects (as all keys are STRINGS, there is no need for quotes)
var movie = {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    language: 'Spanish'
};
console.log('Movie:', movie);

// Accessing a Property
var title = movie.title;
console.log ('Title:', title);

// Adding a Property
movie.cast = ['James Stewart', 'Donna Reed'];
console.log('Movie:', movie);

// Modifying a Property
movie.language = 'English';
console.log('Movie:', movie);

// Alternative method to modify a property using square brackets instead of dots:
movie['language'] = 'French';
console.log('Movie:', movie);

/* This is a bit more typing than the dot notation, but is necessary in some cases. Dot notation won't work when using a property name that contains special characters such a hyphens (-) or colons (:) etc.
   
Example: movie.subtitle-language = 'German';
   -> ReferenceError: Invalid left-hand side in assignment

Correct way: movie['subtitle-language'] = 'German';

// Another alternative for when you need to dynamically access properties using a variable. This allows us to write DRY, reusable code: */
var propertyToAccess = 'subtitle-language';
movie[propertyToAccess] = 'German';
console.log('Movie:', movie);                   // HOW DO I ADD A NEW OBJECT KEY WITHOUT QUOTES???

// Deleting a Property
delete movie.year;
console.log('Movie:', movie);  

// Nested Objects (an object within an object)
movie.ratings = {
    critic: 94,
    audience: 95
};
console.log('Movie:', movie); 

// Access properties of a nested object
var audienceRating = movie.ratings.audience;
console.log('Audience rating:', audienceRating);

// Iterating Over Objects (for...in gives us each key in the object in turn)
for (var key in movie) {
    var value = movie[key];
    console.log(`The ${key} is ${value}`);
}

// Accessing an Object's keys (should we NOT know the properties/keys of an object, ee can use Object.keys() to get an array of all of an object's keys.)
var keys = Object.keys(movie)
console.log('All object keys:', keys);

// var ratingsKeys = Object.keys(movie.ratings)         HOW DO WE FIND OUT THE PROPERTIES WITHIN RATINGS? THIS DOES NOT WORK???
// console.log('Ratings keys:', keys);

