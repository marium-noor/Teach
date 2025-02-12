// INTRO TO VARIABLES
// VARIABLE SARE CONTAINERS FOR DATA LIKE name = "hamza", WHERE NAME IS A CONTAINER FOR SOTRING VALUE OF NAME.

// Variables are case-sensitive, means a and A are different
a = 10;
A = 15;
name = "hamza";
Name = "Hamza";

// You cannot give space, characters b/w letter in variables like
// first#Name  = "hamza"

// Camelcase way of writing varibales.
dateOfBirth = "29";

// First word cannot be any special character.
// *age = "10"

// DIFFERENT TYPES OF VARIABLES:
var firstName = "Hamza";
let lastName = "Awan";
const country = "Pakistan";

// console.log(firstName, lastName, country, "Attock");

// What is VAR
// var : Variable can be re-declared & updated. A global scope variable.

var age = 50;

// Redeclaring variable
var age = 30;
var age = 20;

// Updating variable
age = 16;

console.log(age);

// WHAT IS LET
// let : Variable cannot be re-declared but can be updated. A block scope variable.

let mobile = "iphone 15";

// Cannot redeclare
// let mobile = "iphone 13";

// Can update
mobile = "iphone12";

console.log(mobile);
// WHAT IS CONST
// const: variable cannot be re-declared nor can be updated. A block scope variable.

const city = "Karachi";

// Cannot redeclare
// const city = "Lahore";

// Cannot update
// city = "Islamabad";

console.log(city);
