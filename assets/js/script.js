//console.dir(window.document);

var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
    event.preventDefault();
    
    var lisItemE1 =document.createElement("li");
    lisItemE1.className ="task-item";
    lisItemE1.textContent = "This is a new task. ";
    tasksToDoE1.appendChild(lisItemE1);
 };

formE1.addEventListener("submit", createTaskHandler);

