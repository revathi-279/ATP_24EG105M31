/* ASSIGNMENT 3: Employee Payroll Processor
You are building a salary processing module in a company HR app.*/
const employees = [
    { id: 201, name: "Amit", salary: 45000, department: "IT" },
    { id: 202, name: "Neha", salary: 60000, department: "HR" },
    { id: 203, name: "Rahul", salary: 75000, department: "IT" },
    { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department 

const itDept = employees.filter(employee => employee.department === 'IT')
console.log(`Employees of IT Department are\n`,itDept)

// 2. map() to add:

const addBonus = employees.map(employee => employee.netSalary = (employee.salary + employee.salary * 0.10))
console.log(`After adding netSalary\n`,employees)

// 3. reduce() to calculate total salary payout

const totalSalary = employees.reduce((sum,employee) => sum + employee.salary,0) 
console.log(`Total Salary of employees is`,totalSalary)

// 4. find() employee with salary 30000

const findEmp = employees.find(employee => employee.salary === 30000)
console.log(`Details of employee are\n`,findEmp)

// 5. findIndex() of employee "Neha"

const findInd = employees.findIndex(employee => employee.name === 'Neha')
console.log(`Index of employee is`,findInd)
