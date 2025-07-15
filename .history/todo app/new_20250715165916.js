// Empty array to store tasks
let tasks = [];

// Run this function when page loads
     window.onload = function(){
// Check if tasks exist in localStorage
    if(localStorage.getItem("task")){
        // Convert stored JSON string back into array
    tasks = JSON.parse(localStorage.getItem("task"))
         // Show all tasks on screen
        renderTask();
    };
};
//  Add task to list
function addTask(){
    // Input field
    const input = document.getElementById("taskInput")
    // Remove extra spaces
    const task = input.value.trim()
    // Error message container (spelling mistake: should be "errorMessage")
    const error = document.getElementById("errorMessgae")
    // condition check karne k liye k agar empty hai to error recieved ho 
    if(task === ""){
        error.innerText = "Please Enter Your Task";
        // Show error
        error.style.display = "block";
        return;
    };
     //  Hide error if input is valid
    error.innerText = ""
    error.style.display = "none"

    // Add task to array
    tasks.push(task)
    // Save to localStorage
    localStorage.setItem("task",JSON.stringify(tasks))
    // Clear input field
    input.value = "";
    //  Refresh UI
    renderTask();
};

//  Delete task

function deleteTask(index){
    // Remove task by index
    tasks.splice(index , 1)
    // Update localStorage
    localStorage.setItem("task", JSON.stringify(tasks))
    // Refresh UI
    renderTask();
}
//  Open edit mode
function openEdit(index){
    // Hide original task text
document.getElementById(`taskText-${index}`).style.display = "none";
// Show input field
document.getElementById(`editInput-${index}`).style.display = "inline-block"
// Hide edit button
document.getElementById(`editBtn-${index}`).style.display = "none"
// Show save button
document.getElementById(`saveBtn-${index}`).style.display = "inline-block"
// Put cursor in input
document.getElementById(`saveBtn-${index}`).focus()
}


// yeh edit ke bad save karne k liye function hai 

//  Save updated task (after editing) 

function saveBtn(index){
     // Get new value
    const newValue = document.getElementById(`editTask-${index}`).value.trim();
    // Error container
    const error = document.getElementById("errorMessage")
    if(newValue === ""){
        error.innerText = "Task Cannot be empty";
        error.style.display = "block";
        return;
    }
     error.innerText = ""
     error.style.display = "none"
// Update task value
     tasks[index] = newValue
     // Save to localStorage
     localStorage.setItem("task", JSON.stringify(tasks))
     input.value = "";
      // Refresh task list
     renderTask()
};
//  Render all tasks
function renderTask(){
    // Clear list before rendering again
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
         // Add <li> to <ul>
        list.appendChild(li);
         // Add support for Enter key
        const inputField = li.querySelector(`#editInput-${index}`);
    inputField.addEventListener("keydown", 
        function (e) {if (e.key === "Enter") {
        saveEdit(index);
      }

    });

});
}

// local storage main save karne k liye 

let task = [];

window.onload = function (){

}

// YEH FUNCTION TASK KO ADD KARNE KA HAI 

function addTask(){
    const input = document.getElementById("taskInput")
    const task = input.value.trim()
    const error = document.getElementById("errorMessage")

    if(task === ""){
        error.innerText= "Please Enter Your Task"
        error.style.display = "block"
        return;
    }
     error.innerText = ""
     error.style.display = "none"

     tasks.push(task)
     localStorage.setItem("task", JSON.stringify(tsaks))
     input.value = ""
     renderTask();

}

// yeh function task ko delete karne ki liye hia 

function deleteTask(index){
    tasks.splice(index, 1)
    localStorage.setItem("task", JSON.stringify(tasks));
    renderTask()
}



// yej edit k bad save karne k liye function hai 
// yeh jo error show karawata hai 

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

    tasks[index] = newValue;
    localStorage.setItem("task", JSON.stringify(tasks))
    input.value = ""
    renderTask();
}



// delete todo task 


function deleteTask(index){
    tasks.splice(index , 1)
    localStorage.setItem("task", JSON.stringify(tasks))
    renderTask();
}