//console.dir(window.document);

var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var taskFormHandler = function () {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    // check if input values are empty strings 
    if (!taskNameInput || taskTypeInput) {
        alert ("You need to fill out the task form!");
        return false;
    }

    formE1.reset();
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

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add html content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    
    lisItemE1.appendChild(taskInfoEl);
    // add entire list item to list
    tasksToDoE1.appendChild(lisItemE1);
}
formE1.addEventListener("submit", taskFormHandler);

