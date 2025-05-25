let todos = []; // En tom array

// console.log(document);

// Detta loggar HTML-elementet button i konsolen (och fångas i variabeln buttonElem)
const buttonElem = document.querySelector("#add-todo-button");
console.log(buttonElem);

function displayTodos() {
  for (let i = 0; i < todos.length; i++) {
    console.log("Todo nr: ", i);
    console.log("Todo: ", todos[i]);
  }
}

// Lägger till en addEventListener (alltså kopplar knappen), som aktiveras vid händelse, i detta fall ett knappklick (definierat genom "click" först i parentesen). "function" i parentesen är det som utförs vid händelsen.
buttonElem.addEventListener("click", function () {
  // console.log("Nu klickade du på knappen");

  const todo = prompt("Vad vill du göra?");

  todos.push(todo);

  // console.log(todos);
  displayTodos();
});
