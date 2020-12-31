var name = "Mickey";

console.log("Name:", name);

console.log(`Name: ${name}`) /* string interpolation */

console.log(typeof name)

console.log(name.toUpperCase());

let total = 500;

total += 5

console.log(String(total)); /* converts number type to string */

console.log(Boolean(null));

// EXERCISE 1
console.log(Boolean('I need to learn Javascript'));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(4));
console.log(Boolean(undefined));
console.log(Boolean(NaN));  
// convert values to a Boolean to determine whether a value is true or false (see 'truthy and falsy')

// EXERCISE 2
console.log(3 + 'hello')
console.log('route' + 6 + 6)
console.log(6 + 6 + 'route')
// When we attempt to perform operations that act on values of different types JavaScript will coerce one or more of them to a different type in order to make it work.
