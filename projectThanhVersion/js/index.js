// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

taskManager.load();
taskManager.render(taskManager.tasks);

// Select the New Task Form to use when move button into the form
const newTaskFormButton = document.querySelector('#form-button');

// Add an 'onsubmit' event listener
newTaskFormButton.addEventListener('click', (event) => {
    
   // Prevent default action
    event.preventDefault();
    
    let isValid = false;
    console.log(isValid)
    
    const tasksFormInputs = document.querySelectorAll('.validateSubmit');

    for (let i = 0; i < tasksFormInputs.length; i++) {
        if (tasksFormInputs[i].classList.contains('is-valid')) {
            isValid = true;
        } else {
            isValid = false;
            tasksFormInputs[i].classList.add('is-invalid');
        };
    }; 

    if (isValid) {
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

        // Add/render/save the task to the task manager
        taskManager.addTask(taskName, description, assigned, dueDate);

        taskManager.render(taskManager.tasks);

        taskManager.save();

        // Clear the form
        newTaskName.value = '';
        newTaskDescription.value = '';
        newTaskAssigned.value = '';
        newTaskDueDate.value = '';    
        formValidateTaskName.classList.remove('is-valid');
        formValidateDescription.classList.remove('is-valid');
        assignedTo.classList.remove('is-valid');
        dueDateInput.classList.remove('is-valid');
    };
});

const tasksList = document.querySelector('#task-list');

// Mark as done button and delete task button
tasksList.addEventListener('click', (event) => {

    if (event.target.classList.contains('done-button')) {

        const parentTask = event.target.parentElement.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        const task = taskManager.getTaskById(taskId);

        task.status = 'DONE';

        taskManager.render(taskManager.tasks);

        taskManager.save();
    };

    if (event.target.classList.contains('delete-button')) {

        const parentTask = event.target.parentElement.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        taskManager.deleteTask(taskId);

        taskManager.save();

        taskManager.render(taskManager.tasks);
    };
});







// assignedTo dropdown - filtered
const assignedToDropdown = document.querySelector('#assignedToList');

console.log(assignedToDropdown)


assignedToDropdown.addEventListener('click', () => {
    console.log('test')
    console.log(assignedToDropdown.value)
    

    if (assignedToDropdown.value === 'All') {
        taskManager.render(taskManager.tasks);

        console.log(assignedToDropdown.value)

    } 
    else {
        const userTasks = taskManager.getTasksByAssignedTo(assignedToDropdown.value);
        taskManager.render(userTasks);
        
        console.log(userTasks)
        console.log('test3')
    };
});






// music- container
let audio = document.getElementById('audio');
let playPauseBTN = document.getElementById('playPauseBTN');
let count = 0;

function playPause() {
    if (count == 0) {
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;";
    } else {
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9658;";
    };
};

function stop() {
    playPause()
    audio.pause();
    audio.currentTime = 0;
    playPauseBTN.innerHTML = "Play &#9658;";
};
