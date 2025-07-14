let tasks = [];

window.onload = function(){
    if(localStorage.getItem("task")){
        tasks = JSON.parse(localStorage.getItem("task"))
        renderTask();
    }
}

function addTask(){
    const input = document.getElementById("inputTask")
    const task = input.value .trim()
}
