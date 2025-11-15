/// Temporary storage for todo items
let todos = [];

function addTodo() {
 const todoInput = document.getElementById("todo-input");
 const todoDate = document.getElementById("todo-date");
  console.log("input:", todoInput.value);
  console.log("input:", todoDate.value); 
}    

/// Validation
if (todoInput.value === '' || todoDate.value === '') {
    alert("Please fill in both fields.");
} else {
    /// Add todo items to the list
    todos.push({text: todoInput.value, date: todoDate.value});
    renderTodos();

    /// Clear input fields
    todoInput.value = '';
    todoDate.value ='';

    console.log(todos);

}

