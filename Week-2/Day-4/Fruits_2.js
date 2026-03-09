/* Exercise 1: Copy & Extend an Array
Goal: Learn array copying with spread
Expected Output
["apple", "banana"]
["apple", "banana", "orange"]
 Original array should NOT change.
*/
let fruits = ["apple", "banana"];
// Create a new array moreFruits
let moreFruits = []
// Copy all fruits from fruits
moreFruits = [...fruits]
// Add "orange" at the end using spread
moreFruits = [...fruits,"orange"]
// Print both arrays
console.log(fruits)
console.log(moreFruits)


