// Arithmetic operators
let a = 10;
let b = 14;

// ADD
console.log(a + b);

// SUBTRACT
console.log(b - a);

// MULTIPLICATION
console.log(a * b);

// DIVISION
console.log(12 / 3);

// TELL'S REMAINDER
let number1 = 15;
let number2 = 4;
let result = 15 % 4;
console.log("Result:", result);

// EXPONENT
let number = 5;
let power = 2;
let answer = 2 ** 5;
console.log(answer);

// Comparision operators
// Equals
let num1 = 3;
let num2 = 4;

const check = num2 == "4";
console.log(check);

// Strict equal
const checkStrict = num1 === "3";
console.log(checkStrict);

// Not equals to
const firstName = "hamza";
const lastName = "hamza";
console.log(firstName != lastName);

// Less than or greater than
console.log(num1 > num2);
console.log(num1 < num2);

// Conditional Statements
let weather = "Cold";
let temp = 40;
if (temp > 30 && weather == "Hot") {
  console.log("Weather is hot");
} else if (temp == 10 || weather == "Cold") {
  console.log("Weather is cold");
} else {
  console.log("Both conditions donot met");
}

const age = 10;
if (age < 18 && age > 13) {
  console.log("Teenage");
} else if (age > 18 && age < 40) {
  console.log("Adult");
} else {
  console.log("Senior");
}

// Run a program to perform to calculate age
const Age = prompt("Please enter your age");
if (Age > 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
