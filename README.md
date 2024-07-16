**Live Demo**:https://nani47218.github.io/To-Do-List/.

_**Todo List Application**_

A simple, interactive todo list application built using HTML, CSS, and JavaScript. 

This application allows users to add, edit, delete, and mark tasks as done. 

It also alerts users when a task is overdue and highlights overdue tasks.

_**Features**_

Add Todo: Users can add new todo items with a name, due date, and time.

Edit Todo: Users can edit existing todo items.

Delete Todo: Users can delete todo items.

Mark as Done: Users can mark todo items as done, which removes them from the list.

Overdue Alerts: The application alerts users when a todo item is overdue and highlights overdue tasks in red.

**Usage**__

_Adding a Todo_

Enter the todo name in the input field.

Select the due date and time.

Click the "Add Todo" button.

_Editing a Todo_

Click the "Edit" button next to the todo item you want to edit.

Update the name, date, and time in the input fields.

The todo item will be updated and the list will be refreshed.

_Deleting a Todo_

Click the "Delete" button next to the todo item you want to remove.

The todo item will be removed from the list.

_Marking a Todo as Done_

Click the "Mark as Done" button next to the todo item you want to mark as done.

The todo item will be removed from the list.

**Code Structure**

_HTML_****

The HTML file contains the structure of the todo list application. The main elements include input fields for the todo name, due date, and time, as well as buttons for adding, editing, deleting, and marking todo items as done.

**CSS**__

The CSS file styles the todo list application. It includes styles for the todo items, buttons, and overdue alerts. The "Mark as Done" button is styled with an embedded SVG icon.

**JavaScript**__

The JavaScript file contains the logic for adding, editing, deleting, and marking todo items as done. It also handles overdue alerts and updates the todo list display dynamically.

**Key Functions**__

renderTodoList(): Renders the todo list and checks for overdue items.

editTodo(): Edits a specified todo item.

deleteTodo(): Deletes a specified todo item.

markAsDone(): Marks a specified todo item as done and removes it from the list.

addTodo(): Adds a new todo item to the list.
