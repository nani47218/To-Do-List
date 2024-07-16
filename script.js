const todoList = [];

function renderTodoList() {
  let todoListHTML = '';

  const now = new Date();

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const todoDate = new Date(dueDate);
    const isOverdue = now > todoDate;

    const formattedDateTime = todoDate.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    if (isOverdue) {
      alert(`Todo item "${name}" is overdue!`);
    }

    todoListHTML += `
      <div class="todo-item ${isOverdue ? 'overdue' : ''}">
        <span>${name}, ${formattedDateTime}</span>
        <button onclick="editTodo(${i})" class="edit-todo-button">Edit</button>
        <button onclick="deleteTodo(${i})" class="delete-todo-button">Delete</button>
        <button onclick="markAsDone(${i})" class="mark-as-done-button">Mark As Done</button>
      </div>
      <br>
    `;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function editTodo(index) {
  const todoObject = todoList[index];

  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  const timeInputElement = document.querySelector('.js-due-time-input');

  inputElement.value = todoObject.name;

  const dueDateTime = todoObject.dueDate.split(' ');
  dateInputElement.value = dueDateTime[0];
  timeInputElement.value = dueDateTime[1];
  todoList.splice(index, 1);

  renderTodoList();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function markAsDone(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const timeInputElement = document.querySelector('.js-due-time-input');

  const dueDate = dateInputElement.value;
  const dueTime = timeInputElement.value;

  const combinedDateTime = `${dueDate} ${dueTime}`;

  todoList.push({
    name,
    dueDate: combinedDateTime
  });

  inputElement.value = '';
  dateInputElement.value = '';
  timeInputElement.value = '';

  renderTodoList();
}
