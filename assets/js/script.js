//console.dir(window.document);

var buttonE1 = document.querySelector("#save-task");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
    var lisItemE1 =document.createElement("li");
    lisItemE1.className ="task-item";
    lisItemE1.textContent = "This is a new task. ";
    tasksToDoE1.appendChild(lisItemE1);
 };
buttonE1.addEventListener("click", createTaskHandler);

