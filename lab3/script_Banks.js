/**
 * students full name
 * Lab 3, loops
 * Sept 4, 2025
 */

console.log("Jalen Banks")
console.log(`\n ----example 1: for loop as a counter` )
// for loop to print from 0 to 5 (including 5)
// needs to be two ++ for syntax reasons, 1 + means nothing
for(let x = 0; x <= 5 ; x++ ){
    console.log(x)

}
console.log(`\n ----example 2: for loop and condtional statements` )
// print all even numbers between -20 to 20 (including 20)
for(let x = -20; x <= 20;x++ ){
    if(x%2 == 0){
        console.log(x)
    }

}
console.log(`\n ----example 3: for loop as a decending counter` )
// print numbers from 3 to 0 ---> 3,2,1,0
for(let x = 3; x>= 0; x--){
    console.log(x)
}
console.log(`\n ----example 4: for loop in an array` )
let cars = ['Mazda', 'BMW', 'Tesla','Jeep','Honda']
for(let index = 0; index<cars.length ;index++){
    console.log(cars[index])
}
console.log("for the loop using the 'of' statement")
for(let each of cars){
    console.log(each)
}
console.log(`\n ----example 5: Application using for loops` )
// find how many car's name has more than 4 characters
let car_counter = 0;
for(let index = 0; index<cars.length ;index++){

    if(cars[index].length > 4){
        car_counter ++
// ++ is incrementing by 1 for each car name that fir the parameters
    }
}
console.log(`There is/are ${car_counter} car names with 4+ characters`)

console.log(`\n ----example 6: Application using for loops` )
// ask the user to guess number between 1 and 9 the user has three chances
let GUESS = 8
for(let counter = 1; counter <= 3 ; counter++){
    let user_number =parseInt(prompt("Enter a number between 1 and 9"))
    console.log(`user guess = ${user_number}`)
    if(user_number === GUESS){
        console.log(`Great! the number is ${GUESS}`)
        break
    }
    else if(user_number>GUESS){
        console.log(`Wrong! the number should be lower`)

    }
    else if(user_number<GUESS){
        console.log(`Wrong! the number should be lower`)
    }
    if(counter===3){
        console.log(`Better luck next time`)
    }

        
    
}
console.log(`\n ----example 7:While loop as a counter` )

let y = 0
while(y<=5){
    console.log(y)
    y++
}
console.log(`\n ----example 8: while loop to validate an input` )
// check if the input number is between 1 and 9
let number = parseInt(prompt("enter a number between 1 and 9"))
// use while loop to recollect the number if the number is not between 1 and 9
while(number<1 || number > 9){
    number = parseInt(prompt("ERROR: Enter a number between 1 and 9"))

}
console.log(`The collected number is ${number}`)

console.log('\n ---- example 9: simulate a bank transaction ----')
let balance = 1000

while (true) {
  console.log('How can I help you today?')
  console.log('press 1 for account balance')
  console.log('press 2 for deposit')
  console.log('press 3 for withdrawal')
  console.log('press 4 for CANCEL')

  let user_transaction = parseInt(
    prompt(
      'How can I help you today?\n' +
      'press 1 for account balance\n' +
      'press 2 for deposit\n' +
      'press 3 for withdrawal\n' +
      'press 4 for CANCEL'
    )
  )

  switch (user_transaction) {
    case 1:
      console.log(`Your balance is $${balance}`)
      break

    case 2:
      let deposit = parseInt(prompt('How much do you want to deposit?'))
      if (deposit > 0) {
        balance = balance + deposit
        console.log(`Deposited $${deposit}. New balance: $${balance}`)
      } else {
        console.log('ERROR! invalid amount')
      }
      break

    case 3:
      let withdrawal = parseInt(prompt('How much do you want to withdraw?'))
      if (withdrawal > 0 && withdrawal <= balance) {
        balance = balance - withdrawal
        console.log(`Withdrew $${withdrawal}. New balance: $${balance}`)
      } else {
        console.log('ERROR! invalid amount')
      }
      break

    case 4:
      console.log('Thank you for banking with QCC')
      break

    default:
      console.log('ERROR! invalid selection')
      break
  }

  if (user_transaction === 4) {
    break
  }
}
