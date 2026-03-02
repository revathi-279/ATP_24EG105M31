/* ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard" */
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
 let inStockProducts = cart.filter((productObj)=> productObj.inStock === true)
 console.log(`Instock products are`,inStockProducts)

let newArray = cart.map(product => {
  return {
    name : product.name,
    totalPrice : product.price * product.quantity
  }
})
console.log("New array is ",newArray)

//let newCart = cart.map()
let total = cart.reduce((sum,productPrice) => (sum + productPrice.price),0)
console.log(total)
let getMouse = cart.find(product => product.name === 'Mouse')
console.log(getMouse)
let findKeyboard = cart.findIndex(product => product.name === 'Keyboard') 
console.log(findKeyboard)