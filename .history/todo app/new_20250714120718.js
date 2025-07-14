let tasks = [];

window.onload = function(){
if(localStorage.getItem("task")){
    tasks = JSON.parse(localStorage.getItem("task"))
    renderTask();
}
}

function addTask(){
const input = document.getElementById("inputTask")
const task = input.value.trim()
const error = document.getElementById("errorMessage")

if(task === ""){
    error.innerText="Please Enter Your task"
    error.style.display="block"
    return;
}

error.innerText=""
error.style.display="none"

tasks.push(task);
localStorage.setItem("task", JSON.stringify(tasks));
input.value=""
renderTask();

}

function deleteTask(){
    tasks.
}
