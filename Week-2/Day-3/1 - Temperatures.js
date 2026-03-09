/* Assignment 1: Daily Temperature Analyzer
Scenario : You are analyzing daily temperatures recorded by a weather app.*/

const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. filter() temperatures above 35

let tempsAbove35 = temperatures.filter(element => element > 35);   
console.log(`Temperatures above 35 are ${tempsAbove35}`);

//2. map() to convert all temperatures from Celsius → Fahrenheit

let fahrenheit = temperatures.map(element => {
    return  ((9 * element) / 5) + 32    
    /* c/5 = (f-32)/9 => f = 9c/5 + 32  (Celcius to fahrenheit conversion)*/
})
console.log(`Celcius to Fahrenheit : ${fahrenheit}`);

// 3. reduce() to calculate average temperature

let sumofTemp = temperatures.reduce((prev,element) => prev + element );  //Calculates sum of temperatures
averageTemp = sumofTemp / temperatures.length;   //Calculates average
console.log(`Average temperature is ${averageTemp}`);

// 4. find() first temperature above 40

let above30 = temperatures.find(element => element > 30);
console.log(`First temperature above 30 is ${above30}`);

//  5. findIndex() of temperature 28

let indexOf28 = temperatures.findIndex(element => element === 28);
console.log(`Index of 28 is ${indexOf28}`);


