//console.dir(window.document);

//add var references to the elements at the tops of the script page

//reference to the page-content element in the <main> element
var pageContentEl = document.querySelector("#page-content");

var taskIdCounter = 0;
var formEl = document.querySelector("#task-form"); // replaced with form specific event allows for submit on button and Enter.
var tasksToDoEl = document.querySelector("#tasks-to-do"); //6. create a variable reference to the task list ID

//refactored/cleaned up/combined code
var taskFormHandler = function(event) {
        //1st console.log
        console.log(event.target);
         
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
};


var createTaskEl = function(taskDataObj) {
        // create list item
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";      
        // add a data-task-id custom attribute to each <li> element    
        listItemEl.setAttribute("data-task-id", taskIdCounter);  //custom attribute
        // create div to hold task info and add to list item
        var taskInfoEl = document.createElement("div");
        taskInfoEl.className = "task-info";
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
        listItemEl.appendChild(taskInfoEl);   
        //added after loop below created
        var taskActionsEl = createTaskActions(taskIdCounter);
        listItemEl.appendChild(taskActionsEl);
        //console.log
        console.log(taskActionsEl);   
        tasksToDoEl.appendChild(listItemEl);              
        // increase task counter for next unique id
        taskIdCounter++;
};


var createTaskActions = function(taskId) {
        //create new <div> element
        var actionContainerEl = document.createElement("div");
        actionContainerEl.className = "task-actions";
        // create 2 new edit <button> elements
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
                //add dropdown or <select> element        
                var statusSelectEl = document.createElement("select");
                statusSelectEl.className = "select-status";
                statusSelectEl.setAttribute("name", "status-change");
                statusSelectEl.setAttribute("data-task-id", taskId);
                actionContainerEl.appendChild(statusSelectEl);

        // array to be used in for loop
        var statusChoices = ["To Do", "In Progress", "Completed"];
        //for loop
        for (var i = 0; i < statusChoices.length; i++) {
                // create option element
                var statusOptionEl = document.createElement("option");
                statusOptionEl.textContent = statusChoices[i];
                statusOptionEl.setAttribute("value", statusChoices[i]);              
                // append to select
                statusSelectEl.appendChild(statusOptionEl);
              }

        //test it works in chrome devtools with createTaskActions(5) for example
        return actionContainerEl;
};

var taskButtonHandler = function(event) {
        console.log(event.target);
        
        if (event.target.matches(".delete-btn")) {
          // get the element's task id
          var taskId = event.target.getAttribute("data-task-id");
          //check - on the del btn - see console.log for confirmation when selecting the del button
                //console.log(taskId);
          //call the deleteTask function
          deleteTask(taskId);
        }  
};

var deleteTask = function(taskId) {
        var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
        //console.log(taskSelected);
        taskSelected.remove();
      };

//add eventListeners to the bottm of the script page
formEl.addEventListener("submit", taskFormHandler);

pageContentEl.addEventListener("click", taskButtonHandler);
