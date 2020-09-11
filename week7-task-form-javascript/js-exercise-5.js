    //define object structure
function Task(id, name, description, assignedTo, dueDate, status) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.status = status;
}

const task1 = new Task(1, 'about me', 'call nick meeting', 'Thanh', '20/9/2020', 'review');
console.log(task1);


const task2 = new Task(2, 'testing log', 'call ', 'Thanh', '20/12/2020', 'TODO');
console.log(task2);


// array
let taskList = [task1, task2];
for (i = 0; i < taskList.length; i++) {
    console.log(taskList[i].status);
}



    // define taskManager
const TaskManager = {};



    // get all tasks
TaskManager.getAllTasks = () => {   }


    // get task with status
TaskManager.getTaskWithStatus = (status) => {    }


 // add task
TaskManager.addTask = (task) => {
    console.log(task.name, task.description)
}


 // delete task
TaskManager.deleteTask = (task) => {    }


 // update task
TaskManager.updateTask = (taskId, status) => {    }


 // assign task
TaskManager.assignTask = (taskId, assignee) => {    }



// to check
console.log(TaskManager.getAllTasks())