
var formEl = document.querySelector("#task-form"); // replaced with form specific event allows for submit on button and Enter.

var tasksToDoEl = document.querySelector("#tasks-to-do"); //6. create a variable reference to the task list ID


var createTaskHandler = function() {
        event.preventDefault();         //prevents refresh

        var taskNameInput = document.querySelector("input[name='task-name']").value;

        var taskTypeInput = document.querySelector("select[name='task-type']").value;

        // create list item
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";

        // create div to hold task info and add to list item
        var taskInfoEl = document.createElement("div");
        // give it a class name
        taskInfoEl.className = "task-info";
        // add HTML content to div
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

        listItemEl.appendChild(taskInfoEl);

        // add entire list item to list
        tasksToDoEl.appendChild(listItemEl);

        // var listItemEl = document.createElement("li");  
        //     listItemEl.className = "task-item";      
        
        //     listItemEl.textContent = taskNameInput;     
        
        //     tasksToDoEl.appendChild(listItemEl);        

}



formEl.addEventListener("submit", createTaskHandler);

