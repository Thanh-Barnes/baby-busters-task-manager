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

