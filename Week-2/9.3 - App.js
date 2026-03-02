import {addTask,getAllTasks} from './9.2 - Task.js'
import { validatePriority } from './9.1 - Validator.js'
addTask('Pay Exam Fee','High','2026-02-25')
addTask('Assignment','Medium','2026-03-01')
addTask('Reading','Low','2026-03-10')
addTask('Sleeping','haha','2026-09-23')
validatePriority('Haha')
const tasks = getAllTasks()
console.log(tasks)