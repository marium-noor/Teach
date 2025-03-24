let inputField = document.getElementById("todo-input");
let addBtn = document.getElementById("add-btn");
let list = document.getElementById("todo-list");

addBtn.addEventListener("click", function () {
  if (inputField.value === "") {
    alert("Please enter a value in input");
    return;
  }

  let listItem = document.createElement("li");
  listItem.textContent = inputField.value;

  list.append(listItem);
  inputField.value = "";

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.style.border = "1px solid red";
  deleteButton.style.padding = "8px 16px";
  deleteButton.style.backgroundColor = "rgb(255, 0, 0, 0.7)";
  deleteButton.style.borderRadius = "10px";
  deleteButton.style.marginLeft = "10px";

  deleteButton.style.width = "100px";
  deleteButton.style.height = "30px";
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    list.remove(listItem);
  });
});
