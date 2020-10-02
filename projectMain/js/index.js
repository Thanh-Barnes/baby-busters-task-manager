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
    const taskName = newTaskName.value; 
    const description = newTaskDescription.value; 
    const assigned = newTaskAssigned.value;
    const dueDate = newTaskDueDate.value;

    if (isValid) {
        // Add the task to the task manager
        taskManager.addTask(taskName, description,assigned, dueDate);

        taskManager.render();

        taskManager.save();

        // Clear the form
        newTaskName.value = '';
        newTaskDescription.value = '';
        newTaskAssigned.value = '';
        newTaskDueDate.value = '';

    };
});

const tasksList = document.querySelector('#task-list');

// Mark as done button and delete task button
tasksList.addEventListener('click', (event) => {

    if (event.target.classList.contains('done-button')) {

        const parentTask = event.target.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        const task = taskManager.getTaskById(taskId);

        task.status = 'DONE';

        taskManager.render();

        taskManager.save();
    };

    if (event.target.classList.contains('delete-button')) {

        const parentTask = event.target.parentElement.parentElement;
        
        const taskId = Number(parentTask.dataset.taskId);

        taskManager.deleteTask(taskId);

        taskManager.save();
        
        taskManager.render();
    };
});
    
 