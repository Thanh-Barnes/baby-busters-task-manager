
// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

// Select the New Task Form
const newTaskForm = document.querySelector('#new-task-form')

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    
    // Prevent default action
    event.preventDefault();
    
    // Select the inputs
    const newTaskName = document.querySelector('#task-name-validate');
    const newTaskDescription = document.querySelector('#form-validate-description');
    const newTaskAssigned = document.querySelector('#assigned');
    const newTaskDueDate = document.querySelector('#dueDateInput');
    
    /* Validation code here*/
    // const taskNameValidate = document.querySelector('#task-name');
    // const formValidateTaskName = document.querySelector('#task-name-validate');

    // taskNameValidate.addEventListener('mouseout', (event) => {
    //     event.preventDefault();

    //     if (formValidateTaskName.value.length === 0) {
    //         formValidateTaskName.classList.remove('is-invalid');
    //         formValidateTaskName.classList.remove('is-valid'); 
        
    //     } else if (formValidateTaskName.value.length < 20) {
    //         formValidateTaskName.classList.add('is-valid');
    //         formValidateTaskName.classList.remove('is-invalid');
            
    //     } else {
    //         formValidateTaskName.classList.add('is-invalid');
    //         formValidateTaskName.classList.remove('is-valid');
    //     }
    // });

    // const formValidate = document.querySelector('#form-validate');
    // const formValidateDescription = document.querySelector('#form-validate-description');

    // formValidate.addEventListener('mouseout', (event) => {
    //     event.preventDefault();

    //     if (formValidateDescription.value.length === 0) {
    //         formValidateDescription.classList.remove('is-invalid');
    //         formValidateDescription.classList.remove('is-valid');
        
    //     } else if (formValidateDescription.value.length > 0 && formValidateDescription.value.length < 10) {
    //         formValidateDescription.classList.add('is-valid');
    //         formValidateDescription.classList.remove('is-invalid');

    //     } else {
    //         formValidateDescription.classList.add('is-invalid');
    //         formValidateDescription.classList.remove('is-valid');
    //     }
    // });

    // const assignedTo = document.querySelector('#assigned');

    // assignedTo.addEventListener('click', (event) => {
    //     event.preventDefault();''
        
    //     if (assignedTo.value) {
    //         assignedTo.classList.add('is-valid');
    //     } 
    // });

    // const datePicker = document.querySelector('#datepicker');
    // const dueDateInput = document.querySelector('.dateInput');

    // datePicker.addEventListener('mouseout', () => {

    //     if (dueDateInput.value) { 
    //         const today = new Date();
    //         today.setUTCHours(0 ,0, 0, 0);
            
    //         if (dueDateInput.valueAsNumber < today.getTime()) {
    //             console.log('Date must not be in the past');
    //             dueDateInput.classList.add('is-invalid');
    //         } else {
    //             dueDateInput.classList.add('is-valid');
    //         dueDateInput.classList.remove('is-invalid');
    //         }  
    //     } 
    // });


    // Get value of the inputs
    const taskName = newTaskName.value; 
    const description = newTaskDescription.value; 
    const assigned = newTaskAssigned.value;
    const dueDate = newTaskDueDate.value;

    // Add the task to the task manager
    taskManager.addTask(taskName, description,assigned, dueDate);

    // Clear the form
    newTaskName.value = '';
    newTaskDescription.value = '';
    newTaskAssigned.value = '';
    newTaskDueDate.value = '';
});



    
    
    