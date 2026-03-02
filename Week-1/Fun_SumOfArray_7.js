function Sum(array) {
    let sum = 0;
    for(let element of array)
        sum += element;        //Adds all elements of array to the sum variable
    return sum;
}
const result = Sum([1,18,92,43,29]);
console.log(`The sum of the array is ${result}`);