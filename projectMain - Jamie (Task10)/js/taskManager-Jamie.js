const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
    
    const html = 
        `
        <div id="task-list" class="card h-100" data-task-id=${id}>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text"><strong>Assigned To:</strong>&nbsp${assignedTo}</p>
                <p class="card-text"><strong>Due Date:</strong>&nbsp${dueDate}</p>
                <div class="status-box alert ${status === 'TODO' ? 'alert-warning' : 'alert-success'}">
                    <a><strong>Status:</strong>&nbsp;${status}</a>
                </div>
                <button type="button" class="btn-mark-as-done done-button btn btn-outline-success btn-sm ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done
                </button>
                <button class="btn btn-outline-danger delete-button btn-sm">Delete</button>
            </div>
        </div>
        `
        return html;
    };

                
// Create a TaskManager class
class TaskManager {
    constructor (currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    
    // Create a method on the class addTask and set status to TODO and id unique
    addTask (name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: "TODO", 
        };
 

    // push new task to this.task
    this.tasks.push(task);
    }   
    
    
    // Create the deleteTask method
    deleteTask(taskId) {
    // Create an empty array and store it in a new variable, newTasks
    const newTasks = [];

    // Loop over the tasks
    for (let i = 0; i < this.tasks.length; i++) {
        // Get the current task in the loop
        const task = this.tasks[i];

        // Check if the task id is not the task id passed in as a parameter
        if (task.id !== taskId) {
            // Push the task to the newTasks array
            newTasks.push(task);
        }
    }

    // Set this.tasks to newTasks
    this.tasks = newTasks;
    }

    
    // getTaskById() method
    // , it should accept a taskId as a parameter
    getTaskById(taskId) {

        let foundTask;

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            
            if (task.id === taskId) {
                foundTask = task;
            };
        };
        return foundTask;
    };


    //render method
    render () {
        // create array to store tasks
        const tasksHtmlList = [];
        
        // create a loop, refer to this.tasks array
        for (let i = 0; i < this.tasks.length; i++) {
            
            //set current task in variable in the loop
            const task = this.tasks[i];
            
            // create a date variable, storing new date and passing current tasks dueDate to date constructor
            const date = new Date(task.dueDate);              
            
            // Create a formattedDate variable, storing a readable string representing the date, using methods of the date we just created.
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            
            // Create the task html
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

            // Push it to the tasksHtmlList array
            tasksHtmlList.push(taskHtml);
        }

        // Create the tasksHtml by joining each item in the tasksHtmlList
        // with a new line in between each item.
        const tasksHtml = tasksHtmlList.join('\n');
        
        // Set the inner html of the tasksList on the page
        const tasksList = document.querySelector('#task-list');
        tasksList.innerHTML = tasksHtml;        
    };

    // Create the save method


    save() {
        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        const currentId = JSON.stringify(this.currentId);
        localStorage.setItem('currentId', currentId);
    };

    // Create the load method


    load() {
        if (localStorage.getItem('tasks')) {
            const tasksJson = localStorage.getItem('tasks');
            this.tasks = JSON.parse(tasksJson);
        }

        if (localStorage.getItem('currentId')) {
            const currentId = localStorage.getItem('currentId');
            this.currentId = Number(currentId);
        }
    };
};









