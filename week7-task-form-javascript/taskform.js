// Create a JavaScript function called “validateTaskForm” that verifies that the inputs inserted by the user in the task form are correct:
// Task name -> Not Empty and not longer than 8 characters - 
// Validation status (valid green border, invalid red border & alert "Task name too long")
// Replace grey text in input box with instructions "Add task name less than 8 characters" 
// At end - create invalid alert when submit button pressed and no text provided (> 0) 

const taskNameValidate = document.querySelector('#form-overall');
const formValidateTaskName = document.querySelector('#task-name-validate');

taskNameValidate.addEventListener('click', (event) => {
    event.preventDefault()

    if (formValidateTaskName.value.length === 0) {
        formValidateTaskName.classList.remove('is-invalid');
        formValidateTaskName.classList.remove('is-valid'); 
    
    } else if (formValidateTaskName.value.length < 20) {
        formValidateTaskName.classList.add('is-valid');
        formValidateTaskName.classList.remove('is-invalid');
        
    } else {
        formValidateTaskName.classList.add('is-invalid');
        formValidateTaskName.classList.remove('is-valid');
    }
});

// Description -> Not Empty and not longer than 150 characters 
// Validation status (valid green border, invalid red border & alert "Description is too long" type length max limit 150)
// Replace grey text with "Description has to be less than 150 characters"
// Optional - Update bootstrap to wrap text so that all contents are visible, instead of being in one line
// At end - create invalid alert when submit button pressed and no text provided (> 0)

const formValidate = document.querySelector('#form-overall');
const formValidateDescription = document.querySelector('#form-validate-description');

formValidate.addEventListener('click', (event) => {
    event.preventDefault();

    if (formValidateDescription.value.length === 0) {
        formValidateDescription.classList.remove('is-invalid');
        formValidateDescription.classList.remove('is-valid');
    
    } else if (formValidateDescription.value.length > 0 && formValidateDescription.value.length < 10) {
        formValidateDescription.classList.add('is-valid');
        formValidateDescription.classList.remove('is-invalid');

    } else {
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
    event.preventDefault()
    
    if (assignedTo.value) {
        assignedTo.classList.add('is-valid');
    } else {
        // assignedTo.classList.add('is-invalid');
        //not sure about above, keep for when submit button pressed and not selected
    }
})


    // DueDate  -> Not Empty and not in the past
    // DONE (not needed) - Default "current day"
    // DONE - When select date it will give valid green border
    // challenge - Date is invalid when due date before current date is selected, alert "Due date is not valid"
    // create invalid alert when submit button pressed when you have not entered a due date (only triggered when submit button is pressed)

const datePicker = document.querySelector('#datepicker');

datePicker.addEventListener('input', (event) => {
    event.preventDefault();

    if (dueDate.value) {  
        dueDate.classList.add('is-valid');
        dueDate.classList.remove('is-invalid');
    } else {
        dueDate.classList.remove('is-valid');
        dueDate.classList.add('is-invalid');
        console.log(dueDate);
    }
  })



// Status checkbox
// Box the checkbox
// Can only select 1 option at a time 




// Submit button
// event.preventDefault in event listener
// Check everything is valid 

// Verify that your code works as expected
