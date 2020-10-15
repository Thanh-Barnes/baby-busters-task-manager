// Task name 
const taskNameValidate = document.querySelector('#task-name');
const formValidateTaskName = document.querySelector('#task-name-validate');

taskNameValidate.addEventListener('keyup', () => {
    // event.preventDefault();

    if (formValidateTaskName.value.length === 0) {
        formValidateTaskName.classList.remove('is-invalid');
        formValidateTaskName.classList.remove('is-valid'); 
    
    } else if (formValidateTaskName.value.length < 20) {
        formValidateTaskName.classList.add('is-valid');
        formValidateTaskName.classList.remove('is-invalid');
        
    } else {
        formValidateTaskName.classList.add('is-invalid');
        formValidateTaskName.classList.remove('is-valid');
    };
});

// Description 
const formValidate = document.querySelector('#form-validate');
const formValidateDescription = document.querySelector('#form-validate-description');

formValidate.addEventListener('keyup', () => {

    if (formValidateDescription.value.length === 0) {
        formValidateDescription.classList.remove('is-invalid');
        formValidateDescription.classList.remove('is-valid');
    
    } else if (formValidateDescription.value.length > 0 && formValidateDescription.value.length <= 300) {
        formValidateDescription.classList.add('is-valid');
        formValidateDescription.classList.remove('is-invalid');

    } else {
        formValidateDescription.classList.add('is-invalid');
        formValidateDescription.classList.remove('is-valid');
    };
});

// AssignedTo 
const assignedTo = document.querySelector('#assigned');

assignedTo.addEventListener('change', () => {
    
    if (assignedTo.value) {
        assignedTo.classList.add('is-valid');
        assignedTo.classList.remove('is-invalid')
    } else {
        assignedTo.classList.remove('is-valid');
        assignedTo.classList.add('is-invalid');
    };
});

// DueDate  
const datePicker = document.querySelector('#datepicker');
const dueDateInput = document.querySelector('.dateInput');

datePicker.addEventListener('change', () => {

    if (dueDateInput.value) { 
        const today = new Date();
        today.setUTCHours(0 ,0, 0, 0);
        
        if (dueDateInput.valueAsNumber < today.getTime()) {
            console.log('Date must not be in the past');
            dueDateInput.classList.add('is-invalid');
        } else {
            dueDateInput.classList.add('is-valid');
            dueDateInput.classList.remove('is-invalid');
        };  
    }; 
});








