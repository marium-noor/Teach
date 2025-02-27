// LOOPS

// Printing numbers from 1 to 50
console.log("Printing numbers from 1 to 50");

for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// Printing numbers from 1 to 50, skipping multiples of 5
console.log("Printing numbers from 1 to 50, skipping multiples of 5");

for (let i = 0; i <= 50; i++) {
  if (i % 5 == 0) {
    continue;
  }
  console.log(i);
}

// Printing even numbers
console.log("Printing even numbers");
for (let i = 2; i <= 99; i += 2) {
  console.log(i);
}

// Printing numbers in reverse order
console.log("Printing in reverse order");

for (let i = 50; i >= 1; i--) {
  console.log(i);
}

// SUM OF FIRST 10 NATURAL NUMBERS
console.log("SUM OF FIRST 10 NATURAL NUMBERS");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
  console.log(sum);
}

// TABLE OF a number
console.log("Table of a number");
let number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} X ${i} = ${number * i}`);
}

// Fizzbuzz challenge
console.log("FIZZBUZZ Challenge");

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % 3 == 0) {
    console.log(i, "FIZZ");
  } else if (i % 5 == 0) {
    console.log(i, "BUZZ");
  } else {
    console.log(i);
  }
}

// DO WHILE SYNTAX
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 10);
