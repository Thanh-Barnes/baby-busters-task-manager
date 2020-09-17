
// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);


// Select the New Task Form to use when move button into the form
// const newTaskForm = document.querySelector('#new-task-form');
const newTaskFormButton = document.querySelector('#form-button');



// Add an 'onsubmit' event listener
newTaskFormButton.addEventListener('click', (event) => {
    
    // Prevent default action
    event.preventDefault();
    
    // Select the inputs
    const newTaskName = document.querySelector('#task-name-validate');
    const newTaskDescription = document.querySelector('#form-validate-description');
    const newTaskAssigned = document.querySelector('#assigned');
    const newTaskDueDate = document.querySelector('#dueDateInput');
    

    // Get value of the inputs
    const taskName = newTaskName.value; 
    const description = newTaskDescription.value; 
    const assigned = newTaskAssigned.value;
    const dueDate = newTaskDueDate.value;

    // if (isValid) {
//once all the isValid = true/false is done on validation.js then open this
        // Add the task to the task manager
        taskManager.addTask(taskName, description,assigned, dueDate);

        taskManager.render();

        // Clear the form
        newTaskName.value = '';
        newTaskDescription.value = '';
        newTaskAssigned.value = '';
        newTaskDueDate.value = '';
    // }
});


    
    
    