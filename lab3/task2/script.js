'use strict';

// ── DOM References ────────────────────────────────────────────────
const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

// ── Create a new list item element ───────────────────────────────
function createTodoItem(text) {
  // <li class="todo-item">
  const li = document.createElement('li');
  li.className = 'todo-item';

  // <input type="checkbox" class="todo-item__checkbox" />
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-item__checkbox';

  // <span class="todo-item__text">text</span>
  const span = document.createElement('span');
  span.className = 'todo-item__text';
  span.textContent = text;

  // <button class="todo-item__delete" aria-label="Delete task">🗑</button>
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'todo-item__delete';
  deleteBtn.setAttribute('aria-label', 'Delete task');
  deleteBtn.innerHTML = '&#128465;'; // 🗑 trash icon

  // ── Event: toggle done state ──────────────────────────────────
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      span.classList.add('todo-item__text--done');
    } else {
      span.classList.remove('todo-item__text--done');
    }
  });

  // ── Event: delete item ────────────────────────────────────────
  deleteBtn.addEventListener('click', function () {
    todoList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

// ── Add a new task ────────────────────────────────────────────────
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const item = createTodoItem(text);
  todoList.appendChild(item);

  taskInput.value = '';
  taskInput.focus();
}

// ── Event: form submit (Add button or Enter key) ──────────────────
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addTask();
});
