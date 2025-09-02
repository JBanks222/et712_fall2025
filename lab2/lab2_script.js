console.log("lab 2 by Jalen Banks")
console.log("\n------Example 1:array---------")
// create and init an array
let fruits = ["apple", "orange", "kiwi", "pineapple"]
console.log(` The 3rd fruit = ${fruits[2]}`)
console.log(` There is/are ${fruits.length}`)
// Remove the 1st element in array fruits using method 'shift()'
console.log(`original array ${fruits}`)
fruits.shift()

console.log(`remove the 1st element in array fruits = `)
// add elements to the array
fruits.unshift(25, "Mango", true)
console.log(`updated array with three new elements = ${fruits}`)
// add elemetns to the right aof an array

fruits.push("peter", 100)
console.log(`updated array with the two new elements to the right = ${fruits}`)
// find the index of an element
let index_blueberries = fruits.indexOf("blueberries")
console.log(`Is there any 'blueberries'?  ${index_blueberries}`)
// if the return index =-1, then the element doesnt exist
let index_PETER = fruits.indexOf("PETER")
console.log(`WHat is the index of 'PETER'? ${index_PETER}`)

console.log("\n----------Example 2: if statement-----")
// if the statement is used to check if The Condition statement is true. If it is TRUE then the program will run the lines in bettween the curly braces
let day = true
let night = false

//check if it is day time
if (day == true) {
    console.log(`good morning`)


}
console.log('END')

let n1 = 10
let n2 = "10"

// check if n1 is equal to n2
if (n1 == n2) {
    console.log(` n1 is equal to n2 --> ${n1 == n2}`)
}
console.log("end 2")

// CHECK IF N1 IS exactly equal to n2

if (n1 === n2) {
    console.log(` n1 is equal to n2 --> ${n1 == n2}`)
}
console.log("end 3")

console.log("\n-------Example 4: check if a number is even or odd------")
// if-else statement check two conditions

let number = 7

if (number % 2 === 0) {
    console.log(`${number} is EVEN `)
}
else {
    console.log(`${number} is ODD`)
}

console.log("\n-------Example 5: check if an input is a string or a number-----")

let user_input = prompt("enter a username")
let check_username = isNaN(parseFloat(user_input))
console.log(`${user_input} is not a number?${check_username}`)
if (check_username) {
    console.log(` ${user_input} is a STRING `)
}

console.log("\n-------Example 6:multiway conditional----")

let num1 = 9
let num2 = "20"
if (num1 === num2) {
    console.log(`num1 is EXACTLY EQUAL to num2`)
}
else if (num1 > num2) {
    console.log("num1 is GREATER num2")
}
else if (num1 < num2) {
    console.log("num1 is LESS than num2")

}
else {
    console.log("ERROR:unable to compare")
}

console.log("\n-------Example 7:Switch statement---")

let gender = 'Female'

switch (gender) {
    case "Female": case "f": case "female": case "FEMALE":
        console.log("Selected gender = FEMALE")
        break
    case "Male": case "MALE": case "M": case "m":
        console.log("selecetd gender = MALE")
        break
    case "Other": case "OTHER": case "other": case "o":
        console.log("Slected gender = OTHER")
        break
    default:
        console.log("ERROR:unable to read the sleecetd gender")
}

console.log("\n-------Exercise 1------")
// Exercise 1: if, else if, else statement
let user_value = prompt("Enter a value (could be a string or number)")
let parsed_number = parseFloat(user_value)
let is_not_number = isNaN(parsed_number)

if (is_not_number) {
    console.log(`${user_value} is a string`)
}
else if (parsed_number > 0) {
    console.log(`${parsed_number} is a positive number`)
}
else if (parsed_number < 0) {
    console.log(`${parsed_number} is a negative number`)
}
else {
    console.log(`the number is zero`)
}

console.log("\n-------Exercise 2------")
// Exercise 2: switch statement
let colors = ["red", "green", "orange", "olive", "magenta"]
let user_color = prompt("Select a color by entering a character (r, g, o, l, m)")

// use indexOf method to check if the user_color exists in array colors
let color_index = colors.indexOf(user_color.toLowerCase())

switch (user_color.toLowerCase()) {
    case "r":
        console.log("You selected red color")
        break
    case "g":
        console.log("You selected green color")
        break
    case "o":
        console.log("You selected orange color")
        break
    case "l":
        console.log("You selected olive color")
        break
    case "m":
        console.log("You selected magenta color")
        break
    default:
        console.log("Color is not in the list!")
}