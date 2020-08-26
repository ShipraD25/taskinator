//console.dir(window.document);

var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    var lisItemE1 =document.createElement("li");
    lisItemE1.className ="task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add html content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    
    lisItemE1.appendChild(taskInfoEl);
    // add entire list item to list
    tasksToDoE1.appendChild(lisItemE1);
 };

formE1.addEventListener("submit", createTaskHandler);

