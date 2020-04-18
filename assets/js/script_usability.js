
var formEl = document.querySelector("#task-form"); // replaced with form specific event allows for submit on button and Enter.

var tasksToDoEl = document.querySelector("#tasks-to-do"); //6. create a variable reference to the task list ID

//previous
//var createTaskHandler = function() {
// var taskFormHandler = function() {        
//         event.preventDefault();         //prevents refresh
//         var taskNameInput = document.querySelector("input[name='task-name']").value;
//         var taskTypeInput = document.querySelector("select[name='task-type']").value;
//                         // create list item
//                 var listItemEl = document.createElement("li");
//                 listItemEl.className = "task-item";
//                         // create div to hold task info and add to list item
//                 var taskInfoEl = document.createElement("div");
//                         // give it a class name
//                 taskInfoEl.className = "task-info";
//                         // add HTML content to div
//                 taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
//                 listItemEl.appendChild(taskInfoEl);
//                         // add entire list item to list
//                 tasksToDoEl.appendChild(listItemEl);
// }

//new
var taskFormHandler = function(event) {
        event.preventDefault();
        var taskNameInput = document.querySelector("input[name='task-name']").value;
        var taskTypeInput = document.querySelector("select[name='task-type']").value;      
        
        // usability fix: check if input values are empty strings
        if (!taskNameInput || !taskTypeInput) {
                alert("You need to fill out the task form!");
                return false;
        }
        //usability fix: reset the form entry box automatically
        formEl.reset();
        
        // package up data as an object
        var taskDataObj = {
          name: taskNameInput,
          type: taskTypeInput
        };      
        // send it as an argument to createTaskEl
        createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {

        // create list item
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";

        // create div to hold task info and add to list item
        var taskInfoEl = document.createElement("div");
        taskInfoEl.className = "task-info";
        //taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

        listItemEl.appendChild(taskInfoEl);

        // add entire list item to list
        tasksToDoEl.appendChild(listItemEl);
}


//formEl.addEventListener("submit", createTaskHandler);

formEl.addEventListener("submit", taskFormHandler);


