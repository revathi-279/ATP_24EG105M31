let a = 18;
let b = 20;
let c = 64;
console.log(`In ${a},${b},${c}:`)
if(a > b && a > c)                  //Checks if a is greater than both b and c
    console.log(`{a} is greater`);
else if(b > c)                     //Checks if b is greater than both a and c 
    console.log(`${b} is greater`);
else
    console.log(`${c} is greater`);
