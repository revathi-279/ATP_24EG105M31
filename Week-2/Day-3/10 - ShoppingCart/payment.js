//payment.js - Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount, calculateDiscount, validateCoupon } from './discount.js';

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
// 2. Apply discount if coupon provided
// 3. Validate payment method (card/upi/cod)
// 4. Process payment (simulate)
// 5. Reduce stock for all items
// 6. Clear cart
// 7. Generate order summary
const cartItems = [...getCartItems()]
const subtotal = getCartTotal()

if(cartItems.length === 0)
 return 'Cart is empty'

let discount = 0
let total = subtotal

if(couponCode){
 const discountResult = applyDiscount(subtotal, couponCode, cartItems)
 discount = discountResult.discount
 total = discountResult.finalTotal
}

if(!validatePaymentMethod(paymentMethod))
 return 'Invalid payment method'

cartItems.forEach(item => {
 reduceStock(item.id, item.quantity)
})
// Return order summary:
const orderSummary = {
 orderId: generateOrderId(),
 items: cartItems,
 subtotal: subtotal,
 discount: discount,
 total: total,
 paymentMethod: paymentMethod,
 status: 'Success',
 message: 'Yayy..Order is confirmed!'
}

clearCart()

return orderSummary
}

export function validatePaymentMethod(method) {
// Check if method is valid (card/upi/cod)
if(method === 'card' || method === 'upi' || method === 'cod')
    return true
return false
}

function generateOrderId() {
// Generate random order ID
return 'ORD' + Date.now();
}