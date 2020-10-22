// initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

taskManager.load();
taskManager.render(taskManager.tasks);

// IF WANT TO CREATE AN OBJECT (MYAPP - USE MYAPP.PROPERTY) TO STORE ALL GLOBAL VARIABLES - WILL NEED TO RENAME ALL VARIABLE REFERENCES
const newTaskFormButton = document.querySelector('#form-button');
const updateButton = document.querySelector('#update-button');
const formModal = document.querySelector('#createNewTask');


// add new task
newTaskFormButton.addEventListener('click', (event) => {
    
    event.preventDefault();
   
    // checking when all form inputs are valid before submit
    let isValid = false;
    
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
        // select the inputs
        const newTaskName = document.querySelector('#task-name-validate');
        const newTaskDescription = document.querySelector('#form-validate-description');
        const newTaskAssigned = document.querySelector('#assigned');
        const newTaskDueDate = document.querySelector('#dueDateInput');
        
        // get value of the inputs
        const taskName = newTaskName.value;
        const description = newTaskDescription.value;
        const assigned = newTaskAssigned.value;
        const dueDate = newTaskDueDate.value;
        
        // add/render/save the task to the task manager
        taskManager.addTask(taskName, description, assigned, dueDate);
        taskManager.render(taskManager.tasks);
        taskManager.save();

        // dismiss modal when update button pressed
        newTaskFormButton.setAttribute('data-dismiss','modal')
        
        // clear the form
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


// update button
updateButton.addEventListener('click', () => {

    // checking when all form inputs are valid before submit
    let isValid = false;
    
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
        // select the inputs
        const newTaskName = document.querySelector('#task-name-validate');
        const newTaskDescription = document.querySelector('#form-validate-description');
        const newTaskAssigned = document.querySelector('#assigned');
        const newTaskDueDate = document.querySelector('#dueDateInput');
        
        // set id of the current task
        const editTask = document.querySelector('.edit-task');
        const taskId = Number(editTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);

        // update values of the current task
        task.name = newTaskName.value;
        task.description = newTaskDescription.value;
        task.assignedTo = newTaskAssigned.value;
        task.dueDate = newTaskDueDate.value;
        task.status = 'TODO';

        taskManager.render(taskManager.tasks);

        // update modal form name since using same modal as Create new task
        formModal.innerHTML = 'Create new task';
        
        taskManager.save();

        // clear the form
        newTaskName.value = '';
        newTaskDescription.value = '';
        newTaskAssigned.value = '';
        newTaskDueDate.value = '';    
        formValidateTaskName.classList.remove('is-valid');
        formValidateDescription.classList.remove('is-valid');
        assignedTo.classList.remove('is-valid');
        dueDateInput.classList.remove('is-valid');
        
        // dismiss modal when update button pressed
        updateButton.setAttribute('data-dismiss','modal')

        newTaskFormButton.classList.toggle('displayNone')

        newTaskFormButton.classList.remove('displayNone')
        updateButton.classList.add('displayNone')
    };
});


// cancel form buttons
const cancelForm = (event) => {
    const newTaskName = document.querySelector('#task-name-validate');
    const newTaskDescription = document.querySelector('#form-validate-description');
    const newTaskAssigned = document.querySelector('#assigned');
    const newTaskDueDate = document.querySelector('#dueDateInput');

    formModal.innerHTML = 'Create new task';

    newTaskName.value = '';
    newTaskDescription.value = '';
    newTaskAssigned.value = '';
    newTaskDueDate.value = '';    
    formValidateTaskName.classList.remove('is-valid');
    formValidateDescription.classList.remove('is-valid');
    assignedTo.classList.remove('is-valid');
    dueDateInput.classList.remove('is-valid');


    newTaskFormButton.classList.remove('displayNone')
    updateButton.classList.add('displayNone')
};

document.querySelector('.cancel').addEventListener('click', cancelForm);
document.querySelector('.cancelx').addEventListener('click', cancelForm);


// markAsDone/delete/edit buttons
const tasksList = document.querySelector('#task-list');

tasksList.addEventListener('click', (event) => {

    // mark as done task
    if (event.target.classList.contains('done-button')) {

        const parentTask = event.target.parentElement.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        const task = taskManager.getTaskById(taskId);

        task.status = 'DONE';

        taskManager.render(taskManager.tasks);

        taskManager.save();
    };
    
    // delete task
    if (event.target.classList.contains('delete-button')) {

        const parentTask = event.target.parentElement.parentElement.parentElement;
        
        const taskId = Number(parentTask.dataset.taskId);
        
        taskManager.deleteTask(taskId);
        
        taskManager.render(taskManager.tasks);
        
        taskManager.save();
        
    };

   
    // edit task
    if (event.target.classList.contains('btn-mark-edit')) {
        
        newTaskFormButton.classList.add('displayNone');
        updateButton.classList.remove('displayNone');

        const parentTask = event.target.parentElement.parentElement.parentElement;
        parentTask.classList.add('edit-task');

        const taskId = Number(parentTask.dataset.taskId);
              
        const task = taskManager.getTaskById(taskId);
      
        const currentTaskName = document.querySelector('#task-name-validate');
        const currentTaskDescription = document.querySelector('#form-validate-description');
        const currentTaskAssigned = document.querySelector('#assigned');
        const currentTaskDueDate = document.querySelector('#dueDateInput');
        
        // prefill modal inputs with current task details
        currentTaskName.value = task.name;
        currentTaskDescription.value = task.description;
        currentTaskAssigned.value = task.assignedTo;
        currentTaskDueDate.value = task.dueDate;
        
        // update modal form title
        formModal.innerHTML = 'Edit task';
        
        // validate all current task inputs as true
        let isValid = true;
        
        const tasksFormInputs = document.querySelectorAll('.validateSubmit');
        
        for (let i = 0; i < tasksFormInputs.length; i++) {
            tasksFormInputs[i].classList.add('is-valid');
            tasksFormInputs[i].classList.remove('is-invalid');
        };   
    };
}); 
    

// assignedTo droptown in navbar
const assignedToDropdown = document.querySelector('#assignedToList');

assignedToDropdown.addEventListener('click', () => {

    if (assignedToDropdown.value === 'All') {
        taskManager.render(taskManager.tasks);
    } 
    else {
        const userTasks = taskManager.getTasksByAssignedTo(assignedToDropdown.value);
        taskManager.render(userTasks);
    };
});

// music container
let audio = document.getElementById('audio');
let playPauseBTN = document.getElementById('playPauseBTN');
let count = 0;

function playPause() {
    if (count == 0) {
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#10074;&#10074;";
    } else {
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play";
    };
};

function stop() {
    playPause()
    audio.pause();
    audio.currentTime = 0;
    playPauseBTN.innerHTML = "Play";
};
