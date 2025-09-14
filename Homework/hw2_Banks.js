/*
Jalen Banks
Homework 2 - functions, loops, and conditional statement
*/

console.log("Jalen Banks - Homework 2")

console.log("\n------ Exercise 1: name_counting() function ------")

// Exercise 1: name_counting() function
function name_counting(arrayLength) {
    let names = ["Ann", "Peter", "Patricia", "Sam", "Katerina"]
    let count = 0
    
    for (let i = 0; i < arrayLength; i++) {
        if (names[i].length < 5) {
            count++
        }
    }
    
    return count
}

// Test the name_counting function
let names = ["Ann", "Peter", "Patricia", "Sam", "Katerina"]
console.log(`Array: ${names}`)
console.log(`Number of names with less than 5 characters: ${name_counting(names.length)}`)

console.log("\n------ Exercise 2: checkNum() function ------")

// Exercise 2: checkNum() function
function checkNum() {
    let userInput = prompt("Enter a number:")
    
    while (true) {
        let number = Number(userInput)
        
        if (userInput === null || userInput === "" || isNaN(number)) {
            userInput = prompt("Invalid input! Please enter a valid number:")
        }
        else {
            if (number % 2 === 0) {
                return true
            }
            else {
                return false
            }
        }
    }
}

// Test the checkNum function
let result = checkNum()
console.log(`Is the number even? ${result}`)