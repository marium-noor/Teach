// Objects are collection of data in key value pairs

const student = {
  name: "Hamza",
  age: 20,
  class: 8,
  section: "A",
  // An object can be nested into another objects
  marks: {
    maths: 89,
    english: 50,
    language: {
      urdu: 40,
      sindhi: 30,
    },
  },
};

// console.log(student);

// Creating a profile object
const profile = {
  username: "shradhakhapra",
  post: 195,
  followers: 589000,
  isFollow: false,
  bio: "Some bio",
};

console.log(profile.followers);

// console.log("This object is for profile", profile);

// Updating one value of an object
profile.followers = 50;
console.log(profile.followers);
