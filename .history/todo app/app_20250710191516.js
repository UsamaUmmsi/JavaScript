let tasks = [];

window.onload = function () {
  if (localStorage.getItem("task")) {
    tasks = JSON.parse(localStorage.getItem("task"));
    renderTask();
  }
};

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  const error = document.getElementById("errorMessage"); 
if (task === "") {
    error.innerText = "⚠️ Please enter a task!";
    error.style.display = "block"; // 👈 Show error
    return;
  }

  // 👇 Clear error if task is valid
  error.innerText = "";
  error.style.display = "none";

  tasks.push(task);
  localStorage.setItem("task", JSON.stringify(tasks));
  input.value = "";
  renderTask();
}
//   if (task === "") {
//     alert("Please enter a task!");
//     return;
//   }

//   tasks.push(task);
//   localStorage.setItem("task", JSON.stringify(tasks));
//   input.value = "";
//   renderTask();
// }

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("task", JSON.stringify(tasks));
  renderTask();
}

function editTask(index) {
  const newTask = prompt("Edit your task:", tasks[index]);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    localStorage.setItem("task", JSON.stringify(tasks));
    renderTask();
  }
}

function renderTask() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${task}</span>
        <div class="btn-group">
          <button class="edit" onclick="editTask(${index})">
            <i class="fas fa-edit"></i> </button>
            <button class="delete" onclick="deleteTask(${index})">
              <i class="fas fa-trash-alt"></i>
        </button>
        </div>
      `;
    list.appendChild(li);
  });
}
