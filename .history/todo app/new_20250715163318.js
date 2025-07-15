let tasks = [];

window.onload = function(){
    if(localStorage.getItem("task")){
        tasks = JSON.parse(localStorage.getItem("task"))
        renderTask();
    };
};

function addTask(){
    const input = document.getElementById("taskInput")
    const task = input.value.trim()
    const error = document.getElementById("errorMessgae")
    if(addTask === ""){
        error.innerText = "Please Enter Your Task";
        error.style.display = "block";
        return;
    };
    error.innerText = ""
    error.style.display = "none"

    tasks.push(task)
    localStorage.setItem("task",JSON.stringify(tasks))
    input.value = ""
    renderTask();
};

function deleteTask(index){
    tasks.splice(index , 1)
    localStorage.setItem("task", JSON.stringify(tasks))
    renderTask();
}

function openEdit(index){
document.getElementById(`taskText-${index}`).style.display = "none";
document.getElementById(`editInput-${index}`).style.display = "inline-block"
document.getElementById(`editBtn-${index}`).style.display = "none"
document.getElementById(`saveBtn-${index}`).style.display = "inline-block"
document.getElementById(`saveBtn-${index}`).focus()
}


function saveBtn(index){
    const newValue = document.getElementById(`editTask-${index}`).value.trim();
    const error = document.getElementById("errorMessage")
    if(newValue === ""){
        error.innerText = "Task Cannot be empty";
        error.style.display = "block";
        return;
    }
     error.innerText = ""
     error.style.display = "none"

     tasks[index] = newValue
     localStorage.setItem("task", JSON.stringify(tasks))
     input.value = ""
     renderTask()
};

function renderTask(){
    const list = document.getElementById("taskList");
    list.innerHTML = "",
    tasks.forEach((task,index)=>{
        const li = document.createElement("li");
        li.innerHTML = `
        <span id="taskText-${index}">${task}</span>
        <input type="text" id="editInput-${index}"value ="${task}">style="display:none; padding: 6px;"/>
        <div class="btn-group">
        <button class="edit" id="editBtn-${index}" onclick=""editTask(${index})">
        <i class="fas da-edit"></i> 
        </button>
          <button class="edit" id="saveBtn-${index}" onclick="saveEdit(${index})" style="display: none;"></button>
              <button class="delete" onclick="deleteTask(${index})">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
        `;
        list.appendChild(li);
        const inputField = li.querySelector(`#editInput-${index}`);
    inputField.addEventListener("keydown", 
        function (e) {if (e.key === "Enter") {
        saveEdit(index);
      }

    });

});
}


function saveBtn(){
    const newValue = document.getElementById(`editInpput-${index}`).value.trim()
    const error = document.getElementById("errorMessage")
    if(newValue === ""){
        error.innerText="Task Cannot be Empty"
        error.style.display = "block"
        return;
    }
    error.innerText = ""
    error.style.display = "none"

    tasks[index] = newValue
    localStorage.setItem("task", JSON.stringify(tasks))
    input.value = ""
    renderTask()
}