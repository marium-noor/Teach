let elementWithId = document.getElementById("para");
console.log(elementWithId);

let elementWithClass = document.getElementsByClassName("my-div");
console.log(elementWithClass);

let elementWithTag = document.getElementsByTagName("h1");
console.log(elementWithTag);

let element = document.querySelector("p");
console.log(element);

let allparas = document.querySelectorAll("p");
console.log(allparas);

console.log("Element tag name is:", elementWithId.tagName);
console.log("Element inner text is:", elementWithId.innerText);
console.log("Element Inner HTML is:", elementWithId.innerHTML);
console.log("Element text content is:", elementWithId.textContent);

let div = document.getElementById("my-box");
console.log("DIVS inner text is:", div.innerText);
console.log("DIVS Inner HTML is:", div.innerHTML);
