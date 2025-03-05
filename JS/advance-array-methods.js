// MAPS: Used when you want to modify each element in an array and return a new array.
// Original array remains unchanged.
let nums = [1, 2, 3, 4, 5];
let doubledNums = nums.map((num) => num * 2);
console.log(doubledNums); // [2, 4, 6, 8, 10]

let books = ["subtleart", "thousand splendid suns", "Art of living"];
let newBooks = books.map((book) => book.toUpperCase());
console.log(newBooks);

// FILTER: Used when you want to keep only certain elements from an array.
// Returns a new array with filtered elements.
let numbers = [1, 2, 3, 4, 5];
let filteredNums = nums.filter((num) => num > 2);
console.log(filteredNums);

let marks = [45, 90, 78, 13, 34];
let passedStudents = marks.filter((mark) => mark > 35);
console.log(passedStudents);

// REDUCE: Used when you want to accumulate a value from an array (sum, product, average, etc.).
let numss = [1, 2, 3, 4, 5];
let sum = nums.reduce((acc, num) => acc * num, 2);
console.log(sum);

// We are given array of marks of students. Filter our of the marks of students that scored 90+.
let marksOfStudents = [78, 99, 67, 92, 65];
let postions = marksOfStudents.filter((mark) => mark > 90);
console.log(postions);
