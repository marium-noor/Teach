// Converting a string into a number
const number = "4";
console.log(parseFloat(number));

// Switch Case
// let day = parseFloat(prompt("Please enter a number b/w 1 to 5"));

// switch (day) {
//   case 1:
//     alert("Day is monday");
//     break;
//   case 2:
//     alert("Day is Tuesday");
//     break;
//   case 3:
//     alert("Day is Wednesday");
//     break;
//   case 4:
//     alert("Day is Thursday");
//     break;
//   case 5:
//     alert("Day is Friday");
//     break;

//   default:
//     alert("Please write a number b/w 1-5");
//     break;
// }

// Number guessing game
let num = 7;
// let userInput = parseFloat(prompt("Enter a number"));
let userInput = 0;

if (num == userInput) {
  console.log("You're succesful in guessing a number");
} else if (num < userInput) {
  console.log("Number is high");
} else {
  console.log("Number is low");
}

// String literals
console.log(`${userInput} Hello this is my program ${number}`);

// Checking account balance
let accountBalance = 10000;
let withdrawAmount = -300;

if (accountBalance < withdrawAmount) {
  console.log("Your account dont have this much money");
} else if (accountBalance > withdrawAmount && withdrawAmount > 0) {
  console.log(`Your current balance is ${accountBalance - withdrawAmount}`);
} else if (withdrawAmount < 0) {
  console.log("Please enter a valid amount");
}
