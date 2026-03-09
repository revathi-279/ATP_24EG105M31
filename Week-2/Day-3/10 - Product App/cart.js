import { getProductById, checkStock } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {

 const product = getProductById(productId)

 if(!product){
    return 'Product not found'
 }

 if(!checkStock(productId, quantity)){
    return 'Product out of stock..Failed to add to cart!'
 }

 let productInCart = cartItems.find(item => item.id === productId)

 if(productInCart){
    productInCart.quantity += quantity
 }
 else{
    cartItems.push({
        ...product,
        quantity: quantity
    })
 }

 return 'Product added to cart'
}
export function removeFromCart(productId) {

 const productIndex = cartItems.findIndex(item => item.id === productId)

 if(productIndex === -1)
    return 'Product not found in the cart'

 cartItems.splice(productIndex,1)

 return 'Product removed from the cart'
}
export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
// Check stock before updating
 if(checkStock(productId,newQuantity)) {
  const product = cartItems.find(item => item.id === productId)
  product.quantity = newQuantity 
  return 'Product quantity updated successfully'
 }
 else
    return 'Product out of stock..Cannot update the quantity!'
}

export function getCartItems() {
// Return all cart items with product details
return cartItems
}

export function getCartTotal() {

 const total = cartItems.reduce((sum,item) => {
    return sum + (item.price * item.quantity)
 },0)

 return total
}

export function clearCart() {
// Empty the cart
cartItems.splice(0,cartItems.length)
return 'Cart is cleared'
}