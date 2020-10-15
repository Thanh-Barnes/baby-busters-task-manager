const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {

    const html =
        `
        <div id="task-list" class="card shadow h-100 p-3 my-3" data-task-id=${id}>
            <div class="row pl-2 pb-2">
                <div class="col-md-9 col-sm-8 text-left">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description}</p>
                </div>
                <div class="col-md-3 col-sm-4 text-right">
                    <h5 class="card-title">${assignedTo}</h5>
                    <p class="card-text">${dueDate}</p>
                </div>
            </div>

            <div class="row pt-2">
                <div class="col">
                    <div class="status-box text-center alert ${status === 'TODO' ? 'alert-warning' : 'alert-success'}">
                        <a><strong>Status:</strong>&nbsp;${status}</a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col text-left">
                    <button type="button" class="delete-button btn btn-outline-danger btn-sm px-3">Delete</button>
                    <button type="button" class="btn-mark-edit btn btn-outline-secondary btn-sm px-3" data-toggle="modal" data-target="#exampleModalCenter">Edit</button> &nbsp
                </div>
                <div class="col text-right pl-10">
                    <button type="button" class="btn-mark-as-done done-button btn btn-outline-success btn-sm px-3 ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
                </div>
            </div>
        </div>
        `
    return html;
};

const noTaskMsg = document.querySelector('.noTaskMsg');
const noTaskMsgHtml = noTaskMsg.innerHTML;

// Create a TaskManager class
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    };

    // Create a method on the class addTask and set status to TODO and id unique
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: "TODO",
        };
        console.log(task)
        // push new task to this.task
        this.tasks.push(task);
    };


    //delete method
    deleteTask(taskId) {
        const newTasks = [];

        for (let i = 0; i < this.tasks.length; i++) {

            const task = this.tasks[i];

            if (task.id !== taskId) {

                newTasks.push(task);
            };
        };
        this.tasks = newTasks;
    };


    // getTaskById() method
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

    
    // getTaskByAssignedTo() method
    getTasksByAssignedTo(assignedTo) {

        let assignedToTasks = [];

        for (let i = 0; i < this.tasks.length; i++) {

            const task = this.tasks[i];

            if (task.assignedTo.toLowerCase() == assignedTo.toLowerCase()) {

                assignedToTasks.push(task);
            };
        };
        return assignedToTasks;
    };

    
    // render method
    render(tasksArray) {
        // create array to store tasks
        const tasksHtmlList = [];

        if (tasksArray.length > 0) {
            noTaskMsg.innerHTML = '';
        
        } else if (tasksArray.length === 0) {
            noTaskMsg.innerHTML = noTaskMsgHtml;
        };
            

        // create a loop, refer to this.tasks array
        for (let i = 0; i < tasksArray.length; i++) {

            //set current task in variable in the loop
            const task = tasksArray[i];

            // create a date variable, storing new date and passing current tasks dueDate to date constructor
            const date = new Date(task.dueDate);

            // Create a formattedDate variable, storing a readable string representing the date, using methods of the date we just created.
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            // Create the task html
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

            // Push it to the tasksHtmlList array
            tasksHtmlList.push(taskHtml);
        };

        // Create the tasksHtml by joining each item in the tasksHtmlList with a new line in between each item.
        const tasksHtml = tasksHtmlList.join('\n');

        // Set the inner html of the tasksList on the page
        const tasksList = document.querySelector('#task-list');
        tasksList.innerHTML = tasksHtml;
    };


    // save method
    save() {
        const tasksJson = JSON.stringify(this.tasks);

        localStorage.setItem('tasks', tasksJson);

        const currentId = JSON.stringify(this.currentId);

        localStorage.setItem('currentId', currentId);
    };


    // load method
    load() {
        if (localStorage.getItem('tasks')) {
            const taskJsonStr = localStorage.getItem('tasks');

            this.tasks = JSON.parse(taskJsonStr);
        };

        if (localStorage.getItem('currentId')) {
            const currentIdStr = localStorage.getItem('currentId');

            this.currentId = Number(currentIdStr);
        };
    };
};










