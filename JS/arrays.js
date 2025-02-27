// Array basic syntax
const students = ["hamza", "amir", "ali"];
const info = ["ali", 35, "pakistan"];

// Array indices
let marks = [96, 75, 48, 83, 66];
console.log(marks[0]);
console.log(marks[3]);

// Array length
const ages = [12, 40, 15, 79, 44, 90, 199];
console.log(ages.length);

// Array methods
let shows = [
  "Breaking bad",
  "Ozark",
  "Stranger things",
  "Outer banks",
  "Bridgerton",
];
// Push method: Adds an element in end
console.log(shows.push("Alice in borderland"));

// Pop method: Delete an element from end
console.log(shows.pop());

// toString: Converts an array to string
console.log(shows.toString());

// Concat: Joins multiple arrays and returns result
console.log(shows.concat(info));

// Unshift: Adds and element in start
console.log(shows.unshift("Squid game"));

// Shift: Delete and element from start
shows.shift();

// Slice: Returns a specific piece of an array
console.log(shows.slice(1, 4));
console.log(shows);

// Array splice: Removing element
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1, 2); // Removes 2 elements from index 1 (Banana & Mango)

console.log(fruits);
// Output: ["Apple", "Orange"]

// Array splice: Adds element
let colors = ["Red", "Green", "Blue"];
colors.splice(1, 0, "Yellow", "Purple"); // Insert at index 1

console.log(colors);
// Output: ["Red", "Yellow", "Purple", "Green", "Blue"]

// Splice: Replace element
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 99); // Replaces 30 with 99 at index 2

console.log(numbers);
// Output: [10, 20, 99, 40, 50]
