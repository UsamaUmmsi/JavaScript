let tasks = [];

window.onload = function (){
    if(localStorage.getItem("task")){
        tasks = JSON.parse(localStorage.getItem("task"))
        renderTask()
    };
};
function addTask() {
    const input = document.getElementById("taskInput")
    const task = input.value.trim()
    const error = document.getElementById("errorMessage")

    if(addTask === ""){
        error.innerText="Please Enter Your Task"
        error.style.display="block"
        return;
    }
    error.innerText = ""
    error.style.display = "none";

    tasks.push(task)
    localStorage.setItem("task", JSON.stringify(tasks)).
    input.value = ""
    renderTask();
}

function deleteTask(index){
    tasks.splice(index , 1)
    localStorage.setItem("task", JSON.stringify(tasks))
    re


}

