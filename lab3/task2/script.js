'use strict';

const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

function createTodoItem(text) {
  const li = document.createElement('li');
  li.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-item__checkbox';

  const span = document.createElement('span');
  span.className = 'todo-item__text';
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'todo-item__delete';
  deleteBtn.setAttribute('aria-label', 'Delete task');
  deleteBtn.innerHTML = '&#128465;';

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      span.classList.add('todo-item__text--done');
    } else {
      span.classList.remove('todo-item__text--done');
    }
  });

  deleteBtn.addEventListener('click', function () {
    todoList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const item = createTodoItem(text);
  todoList.appendChild(item);

  taskInput.value = '';
  taskInput.focus();
}

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addTask();
});
