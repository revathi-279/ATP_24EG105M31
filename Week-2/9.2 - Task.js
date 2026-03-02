
const tasks = [];
import {validateTitle,validatePriority,validateDueDate} from './9.1 - Validator.js';
// 1. Add new task
function addTask(title, priority, dueDate) {
 if(!validateTitle() || !validatePriority() || !validateDueDate())
{
    return "Invalid Task"
}
tasks.push({title,priority,dueDate})
}

// 2. Get all tasks
function getAllTasks() {
 return tasks
}

// // 3. Mark task as complete
// function completeTask(taskId) {
// // Find task and mark as complete
// tasks.filter(task => task.)
// }
export {addTask,getAllTasks}