// FOR-IN LOOP: Used to iterate over keys or indexes
// Example with object
let person = {
  name: "Alice",
  age: 25,
  city: "New York",
  country: "America",
  car: "Wolks wogen",
};
for (let key in person) {
  console.log(key, "->", person[key]);
}

// Example with array
const marks = [12, 67, 89, 98, 78, 6];
for (const index in marks) {
  console.log(index, "->", marks[index]);
}

// FOR-OF LOOP: Returns the values directly
let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
  console.log(color);
}

const language = "Javascript";
for (let letter of language) {
  console.log(letter);
}

// FOR-EACH: Iterates over an array and works upon some function.
let ages = [10, 17, 22, 50];
ages.forEach((age) => {
  console.log((age += 2));
});

// FOREACH: ACCESSING VALUES
let numbers = [10, 20, 30];
numbers.forEach((num) => {
  console.log("Each number is", num);
});

// FOREACH: ACCESSING BOTH INDEX AND VALUE
let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// FOREACH: ACCESING VALUES AND INDEXES AND MODIFYING AN ARRAY
let prices = [100, 200, 300];

prices.forEach((price, index, arr) => {
  arr[index] = price - 10; // Apply discount
});

console.log(prices);

// EXERCISES
// FOR - IN: Print all properties and values of an object
let car = { brand: "Toyota", model: "Corolla", year: 2022 };
for (const key in car) {
  console.log(key, ":", car[key]);
}

// FOR - IN:  Count the number of properties in an object
let count = 0;
for (const key in car) {
  count++;
}
console.log("The value of count is", count);

// FOR -OFF: Print all elements of an array.
let colours = ["Red", "Green", "Blue", "Yellow"];
for (let color of colours) {
  console.log(color);
}

// FOR - OFF:  Find the sum of all numbers in an array.
let array = [12, 14, 8];
let sum = 0;
for (let num of array) {
  sum += num;
}
console.log(sum);

// FOR - OFF:  Count vowels in a string.
const string = "javascript";
const vowels = "aeiou";
let numOfVowels = 0;
for (const character of string) {
  if (vowels.includes(character)) {
    numOfVowels++;
  }
}
console.log("Number of vowels are:", numOfVowels);

// Print each item in an array using foreach
const newarray = ["hamza", "marium"];
newarray.forEach((name) => {
  console.log(name);
});
