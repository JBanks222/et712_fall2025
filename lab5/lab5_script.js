/***
 * LAB 5:more about functions, object
 * Jalen Banks
 * Sep 11, 2025
 */

console.log("Jalen Banks")
//EXAMPLE 1
// annonymous function in a variable
let greet = function (username) {
    console.log(`Welcome to function ${username}`)

}
// arrow function => instead of `function`
let greeting = (username) => {
    console.log(`Good afternoon ${username}`)
}
// EXAMPLE 2 : Default parameters
// randomly generated a number between 1 and 9
// function will as pass the amount of time
function rand_number(x = 1) {
    for (let n = 1; n <= x; n++) {
        let num = Math.ceil(Math.random() * 9)
        console.log(`${num}`)
    }

}
// EXAMPLE 3: spread syntax ...
numbers = [2, 0, -10, 5, 8, -9]
let max_number = Math.max(...numbers)
console.log(`\n-----Example 3: spread------`)
console.log(`The Maximun number = ${max_number}`)

// create an object `car`
const car = {
    type: "Fiat",
    model: "500",
    color: "white",

    // method
    car_description: function () {
        return `Car type = ${this.type}, ${this.model}, car color = ${this.color}`
    }

}

// EXAMPLE 5 
// create an object `myMath` that will calculate a perimeter of a rectangle or the area
const myMath = {
    // methods
    perimeter: function (w, l) { return (2 * w) + (2 * l) },
    area: function (w = 0, l = 0) { return w * l }
}
// Example 6
const cat = {
    // properties 
    name: "Mickey",
    color: "Black with white spots",
    breed: "unknown",

    //method
    meow: () => { console.log("MEOW MEOW MEOW MEOW") }
}

//EXAMPLE 7
const hen = {
    // properties
    name: "Helen",
    eggCount: 0,

    // method
    layAnEgg: function () {
        this.eggCount++;
        return `${this.name} lays an egg`
    },
    resetEggCount() {
        this.eggCount = 0
        return `${this.name} egg count = ${this.eggCount}`
    }
}

//EXAMPLE 8: try catch
function yell(message = "") {
    try {
        console.log(message.toUpperCase().repeat(3))
    }
    catch (error) {
        console.log(error)
        console.log(`Please pass a string next time!`)
    }
}

//DEBUG EXAMPLES AND COMPLETE ASSIGNMENT EXERCISES

console.log(`\n-----Lab Exercise 1: JS Object------`)

// Lab exercise 1: create mycalculator object
const mycalculator = {
    // properties
    message: "Welcome to my calculator",
    side: 2,

    // methods
    area_square: function () {
        return Math.pow(this.side, 2)
    },

    volume_cube: function () {
        return Math.pow(this.side, 3)
    }
}

// Test the mycalculator object
console.log(mycalculator.message)
console.log(`Side length: ${mycalculator.side}`)
console.log(`Area of square: ${mycalculator.area_square()}`)
console.log(`Volume of cube: ${mycalculator.volume_cube()}`)

console.log(`\n-----Lab Exercise 2: JS Exception Handling------`)

// Lab exercise 2: readProperty function with try-catch
function readProperty(obj, prop) {
    try {
        return obj[prop]
    }
    catch (error) {
        return "Error accessing property"
    }
}

// Test the readProperty function
console.log("Testing readProperty function:")

// Test 1: Valid object and property
let testObj = { name: "John", age: 25, city: "New York" }
console.log(`Valid access: ${readProperty(testObj, "name")}`)

// Test 2: Valid object, non-existent property
console.log(`Non-existent property: ${readProperty(testObj, "height")}`)

// Test 3: Null object (should trigger error)
console.log(`Null object: ${readProperty(null, "name")}`)

// Test 4: Undefined object (should trigger error)
console.log(`Undefined object: ${readProperty(undefined, "name")}`)

// Test 5: Non-object parameter (should trigger error)
console.log(`String parameter: ${readProperty("hello", "length")}`)