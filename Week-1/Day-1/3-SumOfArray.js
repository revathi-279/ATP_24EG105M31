function array(marks)
{
 let sum = 0; 
 for(let i = 0; i < marks.length; i++)     //iterates over every element
    sum += marks[i];
return sum;
}
let marks = [90,78,65,98];
let result = array(marks);
console.log(`The sum of marks is ${result}`);