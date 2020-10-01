let isValid = true;

// Task name -> Not Empty and not longer than 8 characters - 
//     Validation status (valid green border, invalid red border & alert "Task name too long")
//     Replace grey text in input box with instructions "Add task name less than 8 characters" 
//     At end - create invalid alert when submit button pressed and no text provided (> 0) 

const taskNameValidate = document.querySelector('#task-name');
const formValidateTaskName = document.querySelector('#task-name-validate');

taskNameValidate.addEventListener('mouseout', (event) => {
    event.preventDefault();

    if (formValidateTaskName.value.length === 0) {
        isValid = false;
        formValidateTaskName.classList.remove('is-invalid');
        formValidateTaskName.classList.remove('is-valid'); 
    
    } else if (formValidateTaskName.value.length < 20) {
        isValid = true;
        formValidateTaskName.classList.add('is-valid');
        formValidateTaskName.classList.remove('is-invalid');
        
    } else {
        isValid = false;
        formValidateTaskName.classList.add('is-invalid');
        formValidateTaskName.classList.remove('is-valid');
    }
});

// Description -> Not Empty and not longer than 150 characters 
    // Validation status (valid green border, invalid red border & alert "Description is too long" type length max limit 150)
    // Replace grey text with "Description has to be less than 150 characters"
    // Optional - Update bootstrap to wrap text so that all contents are visible, instead of being in one line
    // At end - create invalid alert when submit button pressed and no text provided (> 0)

const formValidate = document.querySelector('#form-validate');
const formValidateDescription = document.querySelector('#form-validate-description');

formValidate.addEventListener('mouseout', (event) => {
    event.preventDefault();

    if (formValidateDescription.value.length === 0) {
        isValid = false;
        formValidateDescription.classList.remove('is-invalid');
        formValidateDescription.classList.remove('is-valid');
    
    } else if (formValidateDescription.value.length > 0 && formValidateDescription.value.length < 10) {
        isValid = true;
        formValidateDescription.classList.add('is-valid');
        formValidateDescription.classList.remove('is-invalid');

    } else {
        isValid = false;
        formValidateDescription.classList.add('is-invalid');
        formValidateDescription.classList.remove('is-valid');
    }
});


// AssignedTo 
    // DONE - Default "Select" 
    // DONE - If Jamie/Thanh/Alex selected it will give valid green border 
    // Create invalid alert when submit button pressed when no dropdown option is selected (only triggered when submit button is pressed)

const assignedTo = document.querySelector('#assigned');

assignedTo.addEventListener('click', (event) => {
    event.preventDefault();''
    
    if (assignedTo.value) {
        isValid = true;
        assignedTo.classList.add('is-valid');
    } 
});


// DueDate  -> Not Empty and not in the past
    // DONE (not needed) - Default "current day"
    // DONE - When select date it will give valid green border
    // challenge - Date is invalid when due date before current date is selected, alert "Due date is not valid"
    // create invalid alert when submit button pressed when you have not entered a due date (only triggered when submit button is pressed)

const datePicker = document.querySelector('#datepicker');
const dueDateInput = document.querySelector('.dateInput');

datePicker.addEventListener('mouseout', () => {

    if (dueDateInput.value) { 
        const today = new Date();
        today.setUTCHours(0 ,0, 0, 0);
        
        if (dueDateInput.valueAsNumber < today.getTime()) {
            isValid = false;
            console.log('Date must not be in the past');
            dueDateInput.classList.add('is-invalid');
        } else {
            isValid = true;
            dueDateInput.classList.add('is-valid');
            dueDateInput.classList.remove('is-invalid');
        }  
    } 
});


// Status checkbox - addeventlistener?
    // Box the checkbox
    // Can only select 1 option at a time 



// Submit button
// event.preventDefault in event listener
// Check everything is valid 

// Verify that your code works as expected



