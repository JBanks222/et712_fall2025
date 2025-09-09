/*
Homework 1: control flow and loops
Student's name: Jalen Banks
*/

console.log("\n------ Program 1: conditional statement -----")

// Ask user to enter something in popup dialog
let userInput = prompt("Enter something:")

// Check the type of data entered
if (userInput === null) {
    console.log("Null and void!")
}
else if (userInput === "") {
    console.log("Your answer was blank!")
}
else {
    let number = Number(userInput)
    
    if (isNaN(number)) {
        console.log("You entered text or invalid data")
    }
    else if (number > 0) {
        console.log("Think positively!")
    }
    else if (number < 0) {
        console.log("Never have negative balance!")
    }
    else {
        console.log("Yin and Yang!")
    }
}

console.log("\n------ Program 2: for loop and nested conditional statement -----")

// Declare an empty array
let numbers = []

// Use for loop to collect ten numbers
for (let i = 0; i < 10; i++) {
    let userNumber = parseInt(prompt(`Enter number ${i + 1} of 10:`))
    numbers.push(userNumber)
}

// Count multiples of 3, 5, and 7
let multiplesOf3 = 0
let multiplesOf5 = 0
let multiplesOf7 = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        multiplesOf3++
    }
    if (numbers[i] % 5 === 0) {
        multiplesOf5++
    }
    if (numbers[i] % 7 === 0) {
        multiplesOf7++
    }
}

// Display results
console.log(`${multiplesOf3} numbers are multiple of 3`)
console.log(`${multiplesOf5} numbers are multiple of 5`)
console.log(`${multiplesOf7} numbers are multiple of 7`)