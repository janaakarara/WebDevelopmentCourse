// Define Todo shape
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Supported filter modes
type Filter = 'all' | 'active' | 'completed';

// App state
let todos: Todo[] = [
  { id: 1, text: "See Lecture", completed: false },
  { id: 2, text: "Solve assignment", completed: false }
];
let currentFilter: Filter = 'all';

// DOM Selectors
const todoInput = document.getElementById("todo-input") as HTMLInputElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;
const itemsLeft = document.getElementById("items-left") as HTMLSpanElement;
const clearCompletedBtn = document.getElementById("clear-completed") as HTMLButtonElement;
const clearAllBtn = document.getElementById("clear-all") as HTMLButtonElement;
const filterButtons = document.querySelectorAll<HTMLButtonElement>(".filter-btn");

// Render Todos into DOM
function render(): void {
  // Filter todos by active tab
  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true;
  });

  todoList.innerHTML = "";

  filteredTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    const leftDiv = document.createElement("div");
    leftDiv.className = "todo-left";

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.className = "todo-checkbox";
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    // Text Span
    const textSpan = document.createElement("span");
    textSpan.className = `todo-text ${todo.completed ? "completed" : ""}`;
    textSpan.textContent = todo.text;

    // Double-click to edit feature
    textSpan.addEventListener("dblclick", () => {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.className = "edit-input";
      editInput.value = todo.text;

      const saveEdit = () => {
        const trimmed = editInput.value.trim();
        if (trimmed) {
          todo.text = trimmed;
        }
        render();
      };

      editInput.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Enter") saveEdit();
        if (e.key === "Escape") render();
      });

      editInput.addEventListener("blur", saveEdit);

      leftDiv.replaceChild(editInput, textSpan);
      editInput.focus();
    });

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(textSpan);

    // Delete Button (Trash bin)
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&#128465;"; // Trash can emoji / unicode
    deleteBtn.title = "Delete";
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });

  // Update items left counter
  const activeCount = todos.filter((t) => !t.completed).length;
  itemsLeft.textContent = `${activeCount} item${activeCount === 1 ? "" : "s"} left`;
}

// Action Handlers
function addTodo(): void {
  const text = todoInput.value.trim();
  if (!text) return;

  const newTodo: Todo = {
    id: Date.now(),
    text: text,
    completed: false
  };

  todos.push(newTodo);
  todoInput.value = "";
  render();
}

function toggleTodo(id: number): void {
  const target = todos.find((t) => t.id === id);
  if (target) {
    target.completed = !target.completed;
    render();
  }
}

function deleteTodo(id: number): void {
  todos = todos.filter((t) => t.id !== id);
  render();
}

function clearCompleted(): void {
  todos = todos.filter((t) => !t.completed);
  render();
}

function clearAll(): void {
  todos = [];
  render();
}

// Event Listeners
addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = (btn.getAttribute("data-filter") as Filter) || 'all';
    render();
  });
});

clearCompletedBtn.addEventListener("click", clearCompleted);
clearAllBtn.addEventListener("click", clearAll);

// Initial call to paint UI
render();