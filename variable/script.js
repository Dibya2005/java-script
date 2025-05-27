// VAR EXAMPLE
// Used in older JavaScript versions
// Syntax: var variableName = value;
// Java is strongly typed, but JavaScript is loosely typed
// JavaScript assigns data types implicitly
// Drawback: type can change at runtime

var AGE = 22;
console.log(AGE);

// AGE = "PIYUSH"; // This works, but is a drawback (type changes at runtime)

// NAMING CONVENTIONS
// Variables should not start with a number or a symbol (except _ or $)
// Spaces are not allowed in variable names
// Use PascalCase (FirstName) for classes
// Prefer camelCase (firstName) for variables and functions

// Scope of var is global or function-scoped
console.log(`You are ${AGE} years old`); // Corrected template literal

// Use of typeof to check data type
console.log(typeof AGE);

// LET EXAMPLE (Preferred over var)
let firstname = "lol";
console.log(`Your name is ${firstname}`); // Corrected template literal

let online = true;
console.log(typeof online);
console.log('Bro is online:', online);

// Another example with let
let fullname = "dibyajyoti";
let age = 25;
let school = true;

// This line sets the text of an HTML element with ID "p1"
document.getElementById("p1").textContent = age;
document.getElementById("p2").textContent = fullname
console.log(window.document.title);
// This line sets the text of an HTML element with ID "p2"
