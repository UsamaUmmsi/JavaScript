let tasks = [];
window.onload = function (){
    if(localStorage.getItem("tsak")){
        tasks = JSON.parse("task" , localStorage.getItem("task"))
        renderTask()
    }
}
function addTask(){
    const input = document.getElementById("taskInput")
    const task = input.value.trim()
    const error = document.getElementById("errorMessgae")
    if(task === ""){
        error.innerText = "Please Enter Your Task"
        error.style.display = "block"
        return;
    };
    error.innerText = ""
    error.style.display = "none"

    tasks.push(task)
    localStorage.setItem("task", JSON.stringify(tasks))
    input.value = ""
    renderTask()
}

function deleteTask(index){
    tasks.splice(index, 1)
    localStorage.setItem("task", JSON.stringify(tasks))
    renderTask()
}

function openEdit(){
    document.getElementById(`taskText-${index}`).style.display = "none";
    document.getElementById(`editInput-${index}`).style.display = "inline-block";
    document.getElementById(`editBtn-${index}`).style.display = "none";
    document.getElementById(`saveBtn-${index}`).style.display = "inline-block";
    document.getElementById(`editInput-${index}`).focus();
}

function saveBtn(index){
    const newValue = document.getElementById(`editInput-${index}`).value.trim()
    const error = document.getElementById("errorMessage")
    if(newValue === ""){
        error.innerText = "Task Cannot be Empty"
        error.style.display = "block"
        return;
    }
    error.innerText = ""
    error.style.display = "none"

    tasks[index] = newValue
    localStorage.setItem("task" , JSON.stringify(task))
    input.value = ""
    renderTask();
};

function renderTask(){
    const list = document.getElementById("taskList")
    list.innerHTML = "";
    tasks.forEach((task , index )=>{
      const li = document.createElement("li")
      li.innerHTML = `
      <span id="taskText-${index}">${task}</span>
       <input type="text" id="editInput-${index}"value ="${task}">style="display:none; padding: 6px;"/>
      <span id="taskText-${index}">${task}</span>
     <input type = "text" id="editInput-${index}"value = "${task}">style = "display:none; padding: 6px" />
     <div class="btn-group">
     <button class="edit" id="editBtn-${index}" onClick=""editTask(${index})">
     </button>
     <button class="edit" id="saveBtn-${index}" onClick="saveEdit(${index})"style="display:none;"></button>
        <button class="delete" onClick="deleteTask(${index})">
        <i class="fas fa-trash-alt"></i>
     </button>
      `

    })
}