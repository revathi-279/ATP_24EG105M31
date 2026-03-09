//iii. discount.js - Coupon and discount logic

import { getCartTotal } from "./cart.js";

// Available coupons
const coupons = {
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
// 2. Check minimum amount requirement
// 3. Check category requirement (if any)
// Return { valid: true/false, message: '...' }
const coupon = coupons[couponCode]
if(!coupon)
    return {valid:false,message:"Invalid coupon code"}
if(cartTotal < coupon.minAmount)
    return {valid:false,message:`Minimum total cart amount should be ${coupon.minAmount}`}
if(coupon.category) {
    const categoryMatch = cartItems.find(item => item.category === coupon.category)
if(!categoryMatch)
    return {valid:false,message:'Coupon is not applicable for these items category'}
}
return {valid:true,message:'Coupon is valid'}
}
export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
// Return discount amount
const coupon = coupons[couponCode]
if(!coupon)
    return 0
let discountAmount = 0
    if(coupon.type === 'percentage') {
     discountAmount= (cartTotal * coupon.value) / 100
    }
    else if(coupon.type === 'flat') {
        discountAmount = coupon.value
    }
return discountAmount
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
// 2. If valid, calculate discount
// 3. Return final amount and discount details
// Return { 
//   originalTotal: ..., 
//   discount: ..., 
//   finalTotal: ...,
//   message: '...'
const validation = validateCoupon(couponCode,cartTotal,cartItems)
if(!validation.valid) {
    return {
        originalTotal : cartTotal,
        discount : 0,
        finalTotal : cartTotal,
        message:validation.message
    }
}
const discount = calculateDiscount(couponCode,cartTotal)
const finalTotal = cartTotal - discount 

   return {
    originalTotal : cartTotal,
    discount : discount,
    finalTotal : finalTotal,
    message : 'Discount applied successfully'}
 }
