let todoList = [];

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let todoItem = inputElement.value;
  todoList.push(todoItem);
  inputElement.value = "";

  displayItems();
}
function displayItems() {
  let displayElement = document.querySelector("#todo-items");
  displayElement.innerText = "";
  for (let i = 0; i < todoList.length; i++) {
    displayElement.innerText += "\n" + todoList[i];
  }
}
