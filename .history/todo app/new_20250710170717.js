let tasks = [];

window.onload = function (){
    if(localStorage.getItem("task")){
        tasks = JSON.parse(localStorage.getItem("tsak"));
        renderTask();
    }
};
function addTask(){
    const input = document.getElementById("tsakInput");
    const task = input.value.trim();
    const error = document.getElementById("error") 
}