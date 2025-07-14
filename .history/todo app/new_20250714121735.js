let tasks = [];

window.onload = function(){
    if(localStorage.getItem("task")){
        tasks = JSON.parse("task")
        renderTask();
    }
}
function addTask(){
    const input = document.getElementById()
}
