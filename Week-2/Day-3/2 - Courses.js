/*Assignment 2: Online Course Name Processor
Scenario : You are preparing a course list for display on a website.*/

const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1.filter() courses with name length > 5

let above5 = courses.filter(course => course.length > 5)
console.log(`Greater than 5 are ${above5}`)

// 2.map() to convert course names to uppercase

let uppercase = courses.map(course => course.toUpperCase())
console.log(`After converting to Uppercase ${uppercase}`)

// 3. reduce() to generate a single string

let singleString = uppercase.reduce((acc,course) => acc + " | " + course) 
   //Here acc stores the first element,course stores the next element and the result is again stored in acc
console.log(`List into a single string : ${singleString}`)

// 4. find() the course "react"

let search = courses.find(course => course === 'react')
console.log(search)

// 5. findIndex() of "node"

let index = courses.findIndex(course => course === 'node')
console.log(`Index of react is ${index}`)



   
