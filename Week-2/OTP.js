/* 
2.OTP Countdown Simulator (Console App)
------------------------------------

Simulate OTP sending flow in Node.js:

Show “OTP Sent Successfully”

Start 10-second countdown

Allow resend only after countdown ends*/

console.log("OTP sent successfully")
let i = 10
let intervalId = setInterval(() => {
console.log(i--)
 if(i===0) {
    console.log("Resend OTP")
    clearInterval(intervalId)
 }
},1000);