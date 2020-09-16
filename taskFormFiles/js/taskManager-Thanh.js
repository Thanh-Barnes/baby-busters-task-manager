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
            status: 'TODO', 
        };

    // push new task to this.task
    this.tasks.push(task);
    }    
};

// Initialize (create a new object) a new instance of TaskManager to test
// We've initialised a TaskManager instance and stored it in a taskManager variable
const taskManager = new TaskManager();







// //test code
    // taskManager.addTask('Dinner', 'Make food', 'Thanh B.', '16/9/2020');
    // taskManager.addTask('Meal', 'food', 'Thanh B.', '16/9/2020');

    // console.log(taskManager);

