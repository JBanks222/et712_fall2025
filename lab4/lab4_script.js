/**
 * Jalen Banks
 * lab 4, functions
 * Sep 9th, 2025
 */
console.log("JALEN BANKS")
// define function to print a message
function msg() {
    console.log("--------Example 1-------")
    console.log("Hellow World")
}

// define a function to print from 3 to 1
function printCount() {
    console.log("----Example 2-----")
    for (let n = 3; n > 0; n--) {
        console.log(n)
    }
}

// define a function that passes a username
function greeting(username) {
    console.log("----Example 3-----")
    console.log(`Welcome to JS ${username} `)
}

// define a function that passes a message and print it in uppercase

function upperMessage(message) {
    console.log("----Example 4-----")
    let changeUpper = message.toUpperCase()
    console.log(changeUpper)

}

// define a function to simulate a snake eyes game.
// pass two numbers to function, and check if both numbers are "1"
function isSnakeEyes(dice1, dice2) {
    console.log("----Example 5-----")
    if (dice1 === 1 && dice2 === 1) {
        console.log("Snake Eyes!")
    }
    else {
        console.log("Not Snake Eyes!")
    }
}

// define a function that returns the area of a rectangle

function areaRectangle(length, width) {
    console.log("-----Example 6-----")
    return length * width
}

// define a function to check a temp. If the temperature is greater than 75, returns 'true', otherwise, it returns a 'false'
function checkTemperature(temperature) {
    console.log("-----Example 7-----")
    if (temperature >= 75) {
        return true
    }
    else {
        return false
    }

}

// EXERCISE 1
console.log("-----EXERCISE 1-----")
console.log(`\nWELCOME TO THE BIG NUMBER GAME!`)

function checkBigNumber(input) {
    let number = Number(input)

    if (isNaN(number)) {
        console.log("That is not a valid number. TRY AGAIN!")
    }
    else {
        if (number < 222) {
            console.log("The Number needs to be Greater or Equal to 222!")
        }
        else {
            console.log("This number is big enough!")
        }
    }
}

let input = prompt("Enter a number :)")
checkBigNumber(input)
