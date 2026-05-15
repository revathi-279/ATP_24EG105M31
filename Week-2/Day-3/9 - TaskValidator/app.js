import {addTask,getAllTasks} from './task.js'
import { validatePriority } from './validator.js'
addTask('Pay Exam Fee','High','2026-02-25')
addTask('Assignment','Medium','2026-03-01')
addTask('Reading','Medium','2026-03-10')
addTask('Sleeping','Low','2026-09-23')
validatePriority('Haha')
const tasks = getAllTasks()
console.log(tasks)