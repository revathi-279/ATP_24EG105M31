/* DAY - 4 : ASSIGNMENT - 5
Student Performance Dashboard
You are working on a college result analysis system.*/

const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed (marks ≥ 40)

const passed = students.filter(student => student.marks >= 40)
console.log(`Students who have passed are:\n`,passed)

/* 2. map() to add a grade field ≥90 → A, ≥75 → B, ≥60 → C, else → D */

const grade = students.map(student => {
    if(student.marks >= 90)
        student.grade = 'A'            //Adding grade field inside the student object
    else if(student.marks >= 75)
        student.grade = 'B'
    else if(student.marks >= 60)
        student.grade = 'C'
    else student.grade = 'D'
})
console.log(`After adding grade field:\n`,students) 

// 3. reduce() to calculate average marks

let numOfStudents = 0
for(let student of students)
    numOfStudents ++
let sum = students.reduce((sum , student)=> sum + student.marks,0)
avgMarks = sum / numOfStudents
console.log(`The average marks of students is ${avgMarks}`)

// 4. find() the student who scored 92
const scored92 = students.find(student => student.marks === 92)
console.log(`The details of student who scored 92 is:\n`,scored92) 

// 5. findIndex() of student "Kiran"

const findKiran = students.findIndex(student => student.name === 'Kiran')
console.log(`Index of Kiran is ${findKiran}`)