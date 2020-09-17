//     //define object structure
// function Task(id, name, description, assignedTo, dueDate, status) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.assignedTo = assignedTo;
//     this.dueDate = dueDate;
//     this.status = status;
// }

// const task1 = new Task(1, 'about me', 'call nick meeting', 'Thanh', '20/9/2020', 'review');
// console.log(task1);


// const task2 = new Task(2, 'testing log', 'call ', 'Thanh', '20/12/2020', 'TODO');
// console.log(task2);

// task list array
// let taskList = [task1, task2];
// for (i = 0; i < taskList.length; i++) {
//     console.log(taskList[i].status);
// }



// Define a the object structure to represent a task using JavaScript with the following fields:
// ID -> Number
// Name -> String
// Description -> String
// AssignedTo (person responsible for completing the task) -> String
// DueDate -> Date when the task is due
// Status (TODO, IN PROGRESS, REVIEW and DONE) -> String
// Define a tasks Array or Object to hold the tasks, and a TaskManager Object with the following functions:
// Get Tasks -> returns the list of ALL tasks
// function getAllTasks()
// Get all Tasks with a given status -> returns a list of all tasks where a status equal to the status passes as an argument:
// function getTasksWithStatus(status)
// Add Task -> a task to existing Tasks List
// function addTask(task)
// Delete Task -> deletes a task from the Tasks List
// function deleteTask(task)
// Update task status -> update the task status
// function updateTask(taskId, status)
// Assign a task to -> updates the value of the assigned task to the field of a given task
// function assignTask(taskId, assignee)
 
    // define task as array, create 2 x objects
const tasks = [];
// console.log(tasks);


    // define Task Manager Object to use with functions below
const TaskManager = {};



    // get all tasks
TaskManager.getAllTasks = () => { 
    return tasks;
  }
    // call for getAllTasks fn
const newTasksManager = TaskManager.getAllTasks();
// console.log(newTasksManager);




    // add task x 3 hard code
TaskManager.addTask = (task) => {
    tasks.push({
            id: 1,
            taskName: 'Staff meeting',
            description: 'Meeting to decide layout of app',
            assignedTo: "Jamie K.",
            dueDate: "20/9/2020",
            status: 'To Do'
        }, {
            id: 2,
            taskName: 'Fix bug on nav bar',
            description: 'Navigation bar not working correctly, to debug',
            assignedTo: "Thanh B.",
            dueDate: "1/10/2020",
            status: 'Review'
        }, {
            id:3,
            taskName: 'Presentation of app',
            description: 'Present app to potential buyers, complete powerpoint presentation',
            assignedTo: "Alex C.",
            dueDate: "16/10/2020",
            status: 'To Do'
        }
    )
}; 
    // call for addTask fn and create const
const addedTasks = TaskManager.addTask();
console.log(tasks);
// need to show only added tasks




    // delete task
TaskManager.deleteTask = (taskName) => { 
     for (i = 0; i < tasks.length; i++) {
        if (tasks[i].taskName === taskName) {
            
        }
     }
};
    // call for deleteTask fn and saved as const
const deletedTasks = TaskManager.deleteTask('Staff meeting');

console.log(deletedTasks);
console.log(tasks) 
// should only show tasks after delete



 // update task
TaskManager.updateTask = (taskId, status) => {    }


 // assign task
TaskManager.assignTask = (taskId, assignee) => {    }











   


// get tasks with status 'To do'
TaskManager.getTaskWithStatus = (status) => { 
    const tasksWithStatusSelected = [];
    for(let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === status) {
            tasksWithStatusSelected.push(tasks[i]);
        }
    }
    return tasksWithStatusSelected;
}
   // call for getTaskWithStatusSelected
const toDoTasks = TaskManager.getTaskWithStatus('To Do');
// console.log(toDoTasks);