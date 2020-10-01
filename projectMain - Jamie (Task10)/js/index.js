
// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

taskManager.load();

taskManager.render();


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
    const name = newTaskName.value; 
    const description = newTaskDescription.value; 
    const assignedTo = newTaskAssigned.value;
    const dueDate = newTaskDueDate.value;

    taskManager.addTask(name, description, assignedTo, dueDate);

    taskManager.save();

    taskManager.render();

    // Clear the form
    newTaskName.value = '';
    newTaskDescription.value = '';
    newTaskAssigned.value = '';
    newTaskDueDate.value = '';
});

const tasksList = document.querySelector('#task-list');

tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);

        task.status = 'DONE';
        taskManager.save();
        taskManager.render();
    }


        // Check if a "Delete" button was clicked
    if (event.target.classList.contains('delete-button')) {
        
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement;

        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);

        // Delete the task
        taskManager.deleteTask(taskId);

        // Save the tasks to localStorage
        taskManager.save();

        // Render the tasks
        taskManager.render();
    }
    
    //testing clicks
    console.log(event);
});

    