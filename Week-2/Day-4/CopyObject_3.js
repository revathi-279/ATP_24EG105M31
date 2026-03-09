/*Exercise 2: Update User Object
Goal: Learn object cloning & adding new property
Original object should remain unchanged.*/
let user = {
    name: "Ravi",
    city: "Hyderabad"
};
// Create a new object updatedUser
let updatedUser = {}
// Copy all properties from user
updatedUser = structuredClone(user)
// Add a new property age: 25
updatedUser.age = 25
// Print both objects
console.log(user)
console.log(updatedUser)

