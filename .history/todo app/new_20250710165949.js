let tasks = [];
window.onload = function(){
    if(localStorage.getItem("task")){
        task = JSON.parse(localStorage.getItem("tsak"));
        renderTask();
    }
};
// yeh function jab chalta hai jab user koi task likh kar add button per click kare
function addTask(){
        // document main se inputTask ke nam ki id le kar ao 
    const input = document.getElementById("inputTask");
    const task = input.value.tirm()
    const error = document.getElementById("errorMessage");
    if(task === ""){
        error.innerText = "⚠️Please Enter Your task!"
        error.style.display ="block"
        return;
    }
}