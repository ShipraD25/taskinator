//console.dir(window.document);
var taskIdCounter =0;
var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var taskFormHandler = function () {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    // check if input values are empty strings 
    if (!taskNameInput === "" || taskTypeInput === "") {
        alert ("You need to fill out the task form!");
        return false;
    }

    formE1.reset();

    // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;
    
  // package uo data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    // send it as an argument to createTaskE1
    createTaskEl(taskDataObj);
 };

var createTaskEl = function(taskDataObj) {
    //create list item
    var lisItemE1 =document.createElement("li");
    lisItemE1.className ="task-item";
    // add task id as a custom attribute
    lisItemE1.setAttribute("data-task-id", taskIdCounter)
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add html content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    
    lisItemE1.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    lisItemE1.appendChild(taskActionsEl);
    // add entire list item to list
    tasksToDoE1.appendChild(lisItemE1);

    // increase task counter for next unique id
    taskIdCounter++;
}

var createTaskActions = function (taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    // create edit button
var editButtonEl = document.createElement("button");
editButtonEl.textContent = "Edit";
editButtonEl.className = "btn edit-btn";
editButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(editButtonEl);

// create delete button
var deleteButtonEl = document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(deleteButtonEl);

var statusSelectEl = document.createElement("select");
statusSelectEl.className = "select-status";
statusSelectEl.setAttribute("name", "status-change");
statusSelectEl.setAttribute("data-task-id", taskId);

var statusChoices =["To Do", "In Progress", "Completed"]

for (var i = 0; i < statusChoices.length; i++) {
    // create option element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute("value", statusChoices[i]);
  
    // append to select
    statusSelectEl.appendChild(statusOptionEl);
  }
actionContainerEl.appendChild(statusSelectEl);

return actionContainerEl;
};

formE1.addEventListener("submit", taskFormHandler);

