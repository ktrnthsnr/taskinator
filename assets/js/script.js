//Lesson: 4.1.8: walk through steps at 4.1.8 in setting this up
        //STEPS:

        // We exchanged console.log for expressions that will do the following:

                // Create a new task item

                // Style the new task item

                // Add the text

                // Append this element to the task list

        // (Note to use the console log for each step added to view if correct)
        console.dir(window.document);


//0. create an element, test only this line in the console. This will dynamically create an element.
//document.createElement("li");


var buttonEl = document.querySelector("#save-task");


//var tasksToDoEl = document.querySelector("#tasks-to-do");     //2. create the variable reference to tasks-to-do to the ID task in the HTML. 
//This creates a duplicate of the task list object , the <ul> element
//3.tasksToDoEl;                        //this calls this variable initially, before it's replaced below with a function
//4.tasksToDoEl.textContent = "hello";   //test this .testContent method, pairing with the var.  This will show hello on the page as a test.
//5. tasksToDoEl;                         //run and pair with above.
var tasksToDoEl = document.querySelector("#tasks-to-do"); //6. create a variable reference to the task list ID


var createTaskHandler = function() {
    var listItemEl = document.createElement("li");  //0.1. create a variable to store the reference to this new object.
    listItemEl.className = "task-item";             // add a class style to the new button.
    listItemEl.textContent = "This is a new task."; //0.2 Now, to assign some text content to this <li>
    //listItemEl;                                   //0.3 Run. With the listItemEl.textContent pair, run both in console.
    tasksToDoEl.appendChild(listItemEl);            //7. To append the task item as a child to the task list
}


buttonEl.addEventListener("click", createTaskHandler);    //9. to simplify, remove the event handler and callback the function.



//8. before separated, the eventhandler and function were together. Next step will be to separate, simplify.

// buttonEl.addEventListener("click", function() {
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEl.appendChild(listItemEl);
// });