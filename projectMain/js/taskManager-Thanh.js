const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    
    const html = 
        `
        <div id="task-list" class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${description}</p>
              <ul class="list-group">
                <li class="list-group-item">${assignedTo}</li>
                <li class="list-group-item">${dueDate}</li>
                <br>
                <div class="alert alert-success">
                    <a><strong>Status:</strong>&nbsp;${status}</a>
                </div>
              </ul>
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
            const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);

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
};





//test code - do no delete until end
// const taskManager1 = new TaskManager(0);
// taskManager1.addTask('Name is', 'Description all', 'TB', '20/8/2021');
// taskManager1.addTask('Meeting at noon', 'Meeting to go through answers', 'JC', '15/12/2021');
// console.log(taskManager1.tasks);






