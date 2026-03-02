
/* Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.
Tasks:
// 2. map() to add 5 grace marks to each student
// 3. reduce() to find highest mark
// 4. find() first mark below 40
// 5. findIndex() of mark 92 */


const marks = [78, 92, 35, 88, 40, 67];

//1.filter() marks ≥ 40 (pass marks)

let passMarks = marks.filter(mark => mark >= 40)
console.log(`Pass marks are ${passMarks}`)

//2.map() to add 5 grace marks to each student

let  addMarks = marks.map(mark => mark + 5)
console.log(`After adding 5 to each marks : ${addMarks}`) 

//3.reduce() to find highest mark

let highestMark = marks.reduce((high,mark) => (high > mark)? high : mark)
console.log(`Highest Mark is ${highestMark}`)

//4.find() first mark below 40

let markBelow40 = marks.find(mark => mark < 40)
console.log(`First mark below 40 is ${markBelow40}`)

//5.findIndex() of mark 92

let index = marks.findIndex(mark => mark === 92)
console.log(`Index of 92 is ${index}`)