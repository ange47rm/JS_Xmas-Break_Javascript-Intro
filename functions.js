/* 3 types of functions can be defined in Javascript:

Named function declarations - function functionName () {}
Anonymous functions - var functionName = function () {}
Anynymous arrow functions - var functionName = () => {}                 */


// Named Function Declarations (hoisted - they can be run in the code, prior to declaring them, TO AVOID)
function sayHello(name = 'Stranger') { // If no name attribute is provided, default "Stranger" will be used.
  return `Hello ${name}`;
}
console.log ('sayHello message:', sayHello());
console.log ('sayHello message:', sayHello('Angelo'));


// Anonymous Function Expressions (not hoisted)
var add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log (add(2,2))


// Arrow Functions (these are ALWAYS anonymous)
var multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
}
console.log ('Multiply demo:', multiply(8,8));


// Implicit Return with Arrow functions
/* When our arrow function's body only contains a single expression, we can write it on one line and omit the return keyword and the braces.
 The function will implicitly return the expression the arrow is pointing to. */
var subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
console.log('Subtract demo', subtract(15, 5));


// Exercise 1 
function calculateTotal (array) {
  var total = 0;
  for (var number of array) {
    total += number;
  }
  return total;
}
var numbers = [20, 30, 40, 10];
console.log (calculateTotal(numbers));

// Exercise 2
var keyExists = function (object, key) {
  for (var value in object) {
    if (value === key) {
      return true;
    }
  }
  return false;
}
console.log(keyExists({ name: 'Wojtek', age: 30, sex: 'male', nationality: 'polish' }, 'name'));
console.log(keyExists({ name: 'Vladimir', age: 67, sex: 'male', nationality: 'russian' }, 'nationality'));
console.log(keyExists({ name: 'Vanessa', age: 31, sex: 'female', nationality: 'hungarian' }, 'email'));
console.log(keyExists({ name: 'Vanessa', age: 31, sex: 'female', nationality: 'hungarian' }, 'phone'));


