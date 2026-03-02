//Modifying objects 
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",                   //Given data
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

// 1.Insert an employee at 2nd position

console.log("Inserted a new employee at 2nd position")
//array_name.splice(index,no.of elements to delete,new element to add)
employees.splice(1,0,{eno:100,name:"Ram",marks:[89,93,88]})
//At index 1, delete 0 elements and add the object
console.log(employees)

// 2.Remove an employee with name kiran

console.log("Removed the employee Kiran")
employees.splice(4,1)  //At index 4, delete 1 element i.e; deleting Kiran
console.log(employees)

// 3.Change the mark of Sneha

console.log("Updated the marks of Sneha")
employees[3].marks.splice(2,1,75)  /*In 3rd element of employees i.e; Sneha,in the key marks the value 
updated to 75*/
console.log(employees)




