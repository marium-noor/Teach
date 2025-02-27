// FUNCTIONS

// Function declaration
function printNumber() {
  console.log("1");
}
printNumber();

// Using parameter in a function
function printName(name, age, school, city) {
  console.log(name, age, school, city);
}
printName("Hamza", 12, "Abc", "Karachi");
printName("Marium", 15, "xyz", "Lahore");

// Returning a value from a function
function square(number) {
  return number * number;
}
console.log(square(5));
console.log(square(3));

// Functions expressions
const cube = function (number) {
  console.log(number * number * number);
};
cube(4);

// Arrow functions
// Traditonal way
const calculateAge = () => {
  console.log(15);
};
calculateAge();

// Efficient way
const calcAge = () => console.log(20);
calcAge();

// EXERCISES
// Calculate discount price in function declaration
function calcDiscountPrice(actualPrice, discount) {
  let discountAmount = (actualPrice * discount) / 100;
  let finalPrice = actualPrice - discountAmount;
  console.log("Final price is:", finalPrice);
}
calcDiscountPrice(200, 30);
calcDiscountPrice(500, 20);

// Calculate discount price in arrow functions
const calculatePrice = (actualPrice, discount) => {
  let discountAmount = (actualPrice * discount) / 100;
  let finalPrice = actualPrice - discountAmount;
  console.log("Final price is:", finalPrice);
};
calculatePrice(100, 10);

// Temperature conversion from celcius to farheinheit in function declaration
function tempConversion(C) {
  let farenheitTemp = (C * 9) / 5 + 32;
  console.log(farenheitTemp);
}
tempConversion(30);

// Same exercise in arraow functions
const convertTempInFarhenheit = (C) => console.log((C * 9) / 5 + 32);
convertTempInFarhenheit(0);
