// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
//Function Signature
//input: number
//output: string indicating greater, less than, or equal to
//
//input: 42
//output: 42 is below boiling point
//
// input: 350
// output: 350 is above boiling point
//
// input: 212
// output: 212 is at boiling point
// Process: Create a function called boilingTemp that takes in a number called temp.

const boilingTemp = (temp) => {
  // If temp is greater than 212, return "temp is over the boiling point.
  if (temp >212) {
    return `${temp} is above boiling point`
  }
//If temp is less than 212, return "temp is below boiling point.
  else if (temp<212){
    return `${temp} is below boiling point`
  }
  //If temp is 212, return "temp is at boiling point".
  else if (temp===212){
    return `${temp} is at boiling point`
  }
  //Any other input, return error.
  else {
    return "error"
  }
}
const temp1 = 42
console.log(boilingTemp(42))
// Expected output: "42 is below boiling point"

const temp2 = 350
console.log(boilingTemp(350))
// Expected output: "350 is above boiling point"

const temp3 = 212
console.log(boilingTemp(212))
// Expected output: "212 is at boiling point"


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: Create one array named padres1984WorldSeriesRuns and one array called padres1998WorldSeriesRuns with the number of runs from each of those world series.
//Create a variable called comboRuns that combines the two World Series Runs arrays using concat.
// Show the length of the array using .length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
const comboRuns = padres1984WorldSeriesRuns.concat (padres1998WorldSeriesRuns)
console.log (comboRuns.length)
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: Create an array from the letters of the string by using split. Then reverse the order of the characters using reverse. Then put them back into a string again. 

const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: use lastIndexOf(value) to return the last instance of each value in the given array.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
console.log(myNumbers.lastIndexOf(42))
const givenValue1 = 42
// Expected output: 7
console.log(myNumbers.lastIndexOf(10))
const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: use .sort() to sort numbers in an array. Create a sorting function and use b - a to have the numbers sort in reverse order.

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// sanDiegoSummerTemperatures.sort((a,b) => b - a)
// console.log(sanDiegoSummerTemperatures)
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
sanDiegoWinterTemperatures.sort((a,b) => b - a)
console.log(sanDiegoWinterTemperatures)
// Expected output: [68, 67, 66, 66, 62, 59, 59]
