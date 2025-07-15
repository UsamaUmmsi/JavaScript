let tasks = [];

window.onload = function (){
    if(localStorage.getItem("task")){
        tasks = JSON.parse(localStorage.getItem("task"));
        renderTask()
    }
};

function addTask(){
    const input = document.getElementById("taskInput")
    const task = input.value.trim()
    const error = document.getElementById("errorMessage")

    if(task === ""){
        error.innerText="Please Enter Your Task"
        error.style.display = "block"
        return;
    }
    error.innerText = "";
    error.style.display = "none"

    addTask.push(tasks)
    localStorage.setItem("task", JSON.parse(tasks))
    input.value = ""
    renderTask()
};

function deleteTask(index){
    tasks.splice(index,1)
    localStorage.setItem("task" , JSON.stringify(tasks));
    renderTask();
};
function saveEdit(index){
document.getElementById(`taskText-${index}`).style.display = "none"
document.getElementById(`editInput-${index}`).style.display = "inline-block"
document.getElementById(`editBtn-${index}`).style.display = "none"
document.getElementById(`saveBtn-${index}`).style.display = "inline-block"
document.getElementById(`editInput-${index}`).focus();
};
function saveEdit(index){

}

