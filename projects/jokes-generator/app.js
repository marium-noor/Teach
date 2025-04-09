let button = document.querySelector("#my-btn");
let question = document.querySelector("#my-question");
let answer = document.querySelector("#my-ans");
let errorBlock = document.querySelector("#error-block");
const api_url = "https://official-joke-api.appspot.com/random_jo";

async function getJoke(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    question.innerHTML = data.setup;
    answer.innerHTML = data.punchline;
  } catch (error) {
    errorBlock.innerHTML = error;
    console.log("You have this error", error);
  }
}

button.addEventListener("click", function () {
  getJoke(api_url);
});
