// let tasks = [];

// window.onload = function () {
//   if (localStorage.getItem("task")) {
//     tasks = JSON.parse(localStorage.getItem("task"));
//     renderTask();
//   }
// };

// function addTask() {
//   const input = document.getElementById("taskInput");
//   const task = input.value.trim();
//   const error = document.getElementById("errorMessage"); 
// if (task === "") {
//     error.innerText = "⚠️ Please enter a task!";
//     error.style.display = "block"; // 👈 Show error
//     return;
//   }

//   // 👇 Clear error if task is valid
//   error.innerText = "";
//   error.style.display = "none";

//   tasks.push(task);
//   localStorage.setItem("task", JSON.stringify(tasks));
//   input.value = "";
//   renderTask();
// }
// //   if (task === "") {
// //     alert("Please enter a task!");
// //     return;
// //   }

// //   tasks.push(task);
// //   localStorage.setItem("task", JSON.stringify(tasks));
// //   input.value = "";
// //   renderTask();
// // }

// function deleteTask(index) {
//   tasks.splice(index, 1);
//   localStorage.setItem("task", JSON.stringify(tasks));
//   renderTask();
// }

// function editTask(index) {
//   const taskItem = document.getElementById(`taskText-${index}`);
//   const editInput = document.getElementById(`editInput-${index}`);
//   const editBtn = document.getElementById(`editBtn-${index}`);
//   const saveBtn = document.getElementById(`saveBtn-${index}`);

//   taskItem.style.display = "none";
//   editInput.style.display = "inline-block";
//   editBtn.style.display = "none";
//   saveBtn.style.display = "inline-block";

//   editInput.focus(); // 👈 Automatically focus
// }

// // function editTask(index) {
// //   const newTask = prompt("Edit your task:", tasks[index]);
// //   if (newTask !== null && newTask.trim() !== "") {
// //     tasks[index] = newTask.trim();
// //     localStorage.setItem("task", JSON.stringify(tasks));
// //     renderTask();
// //   }
// // }

// editInput.addEventListener("keydown", function(e) {
//   if (e.key === "Enter") {
//     saveEdit(index);
//   }
// });


// function renderTask() {
//   const list = document.getElementById("taskList");
//   list.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//         <span>${task}</span>
//         <div class="btn-group">
//           <button class="edit" onclick="editTask(${index})">
//             <i class="fas fa-edit"></i> </button>
//             <button class="delete" onclick="deleteTask(${index})">
//               <i class="fas fa-trash-alt"></i>
//         </button>
//         </div>
//       `;
//     list.appendChild(li);
//   });
// }
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
    error.style.display = "block";
    return;
  };
  error.innerText = "";
  error.style.display = "none";

  tasks.push(task);
  localStorage.setItem("task", JSON.stringify(tasks));
  input.value = "";
  renderTask();
}


function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("task", JSON.stringify(tasks));
  renderTask();
}

function editTask(index) {
  document.getElementById(`taskText-${index}`).style.display = "none";
  document.getElementById(`editInput-${index}`).style.display = "inline-block";
  document.getElementById(`editBtn-${index}`).style.display = "none";
  document.getElementById(`saveBtn-${index}`).style.display = "inline-block";
  document.getElementById(`editInput-${index}`).focus();
}

function saveEdit(index) {
  const newValue = document.getElementById(`editInput-${index}`).value.trim();
  if (newValue === "") {
    alert("Task cannot be empty!");
    return;
  }
  tasks[index] = newValue;
  localStorage.setItem("task", JSON.stringify(tasks));
  renderTask();
}

function renderTask() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span id="taskText-${index}">${task}</span>
      <input type="text" id="editInput-${index}" value="${task}" style="display: none; padding: 6px;" />

      <div class="btn-group">
        <button class="edit" id="editBtn-${index}" onclick="editTask(${index})">
          <i class="fas fa-edit"></i>
        </button>
        <button class="edit" id="saveBtn-${index}" onclick="saveEdit(${index})" style="display: none;">
          💾
        </button>
        <button class="delete" onclick="deleteTask(${index})">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `;

    list.appendChild(li);

    // Add Enter key support
    const inputField = li.querySelector(`#editInput-${index}`);
    inputField.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        saveEdit(index);
      }
    });
  });
}
