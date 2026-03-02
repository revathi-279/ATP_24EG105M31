const marks = [59,72,98,87,90];
let min = marks[0];  /*Assuming the first element is smallest
 to compare with other elements*/
for(let mark of marks) {
  if(mark < min)          //Compares every element of array with minimum element
    min = mark;
}
console.log(`The smallest element in the marks array is ${min}`);