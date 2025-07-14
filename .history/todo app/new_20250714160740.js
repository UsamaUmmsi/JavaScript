let tasks = [];

window.onload = function(){
    if(localStorage.getItem("task")){
        tasks = JSON.parse("task")
        renderTask();
    }
}
function addTask(){
    const input = document.getElementById("taskInput")
    const task = input.value.trim()
    const error = document.getElementById("errorMessage")
    if(task === ""){
         error.innerText="Please Enter Your Task"
        error.style.display = "block"
        return;

    }
        error.innerText = ""
        error.style.display="none";

        tasks.push(task)
        localStorage.setItem("task",JSON.stringify(tasks))
        input.value=""
        renderTask();
}

function deleteTask(index){
    tasks.splice(index , 1);
    localStorage.setItem("task", JSON.stringify(tasks))
    renderTask();
}

function editTask(index){
    document.getElementById(`taskText-${index}`).
    style.display ="none";
    document.getElementById(`editInput-${index}`).
    style.display ="inline-block";
    document.getElementById(`editBtn-${index}`).
    style.display = "none"
    document.getElementById(`saveBtn-${index}`).
    style.display = "inline-block";
    document.getElementById(`editInput-${index}`).
    focus();
}

function saveEdit(index){
    const newValue = document.getElementById(`editInput-${index}`).value.trim();
    const error = document.getElementById("errorMessage")
    if(newValue === ""){
        error.innerText = "Task Cannot Be Empty";
        error.style.display = "block"
        return
    }
    error.innerText = ""
    error.style.display = "none"

    tasks[index]= newValue;
    localStorage.setItem("newValue", JSON.stringify(""))
}

