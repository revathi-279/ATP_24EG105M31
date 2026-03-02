
// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    if(!title) 
        return "Title should not be empty"
    if(title.length > 3)
        return "Minimum 3 characters required"
    return true
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
   const priorities = ['Low','Medium','High']
   let result = priorities.includes(priority)
   if(!result)
    return "Invalid Priority"
  return true
      
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
  let dueDate = new Date('2026-09-27') //yyyy-mm-dd
  let today = new Date()
  if(dueDate > today)
    return "Invalid dueDate"
  return true
}
export {validateTitle,validatePriority,validateDueDate}