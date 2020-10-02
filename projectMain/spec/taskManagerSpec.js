describe('TaskManager', () => {

    describe('#constructor', () => {
        describe('when a new TaskManager() is initialised', () => {
            it('should create an empty tasks array', () => {
               
                const taskManager = new TaskManager(0);

                expect(taskManager.tasks).toEqual([]);
            });

            it('should set the currentId to the passed in number', () => {

                const taskManager = new TaskManager(8);

                expect(taskManager.currentId).toEqual(8);
            });
        });
    });

    describe('#addTask', () => {
        describe('when providing parameters to the addTask function', () => {
            it('should create a new task and store it in the tasks array', () => {
                
                const taskManager = new TaskManager(0);
                
                const task = {
                    id: taskManager.currentId,
                    name: 'test1',
                    description: 'test1descript',
                    assignedTo: 'Thanh B',
                    dueDate: '8/10/2020',
                    status: 'TODO'
                };
                
                taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);
                
                expect(taskManager.tasks[0]).toEqual(task);
            });
            
            it('should increment currentId property by one', () => {
                
                const taskManager = new TaskManager(8);
                
                const task = {
                    id: taskManager.currentId,
                    name: 'test1',
                    description: 'test1descript',
                    assignedTo: 'Thanh B',
                    dueDate: '8/10/2020',
                    status: 'TODO'
                };
                
                taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);
                
                expect(taskManager.currentId).toBe(9);
            });
        });
    });
    
    describe('#deleteTask', () => {
        describe('when removing a specific task using the deleteTask function', () => {
            it('should create a new tasks array without the deleted task', () => {

                const taskManager = new TaskManager(9);
                
                const task = {
                    id: taskManager.currentId,
                    name: 'test1',
                    description: 'test1descript',
                    assignedTo: 'Thanh B',
                    dueDate: '8/10/2020',
                    status: 'TODO'
                };
                
                taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);
                
                taskManager.deleteTask(task.id);
                
                expect(taskManager.tasks).not.toContain(task);
            });
        });
    });
    
    describe('#getTaskById', () => {
        describe('when finding a specific task by taskId', () => {
            it('should return that task', () => {
                
                const taskManager = new TaskManager(9);

                const task = {
                    id: taskManager.currentId,
                    name: 'test1',
                    description: 'test1descript',
                    assignedTo: 'Thanh B',
                    dueDate: '8/10/2020',
                    status: 'TODO'
                };
                
                taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);
                
                const result = taskManager.getTaskById(task.id);
                
                expect(result).toEqual(task);
                console.log(result)
            });
        });
    });
});