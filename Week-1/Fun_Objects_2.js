const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

//Insert an employee at 2nd position
console.log("Inserted a new employee at 2nd position")
employees.splice(1,0,{eno:100,name:"Ram",marks:[89,93,88]})
console.log(employees)

//Remove an employee with name kiran
console.log("Removed the employee Kiran")
employees.splice(4,1)
console.log(employees)

//Change the mark of Sneha
console.log("Updated the marks of Sneha")
employees[3].marks.splice(2,1,75) 
console.log(employees)




