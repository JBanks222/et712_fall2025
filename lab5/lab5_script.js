/***
 * LAB 5:more about functions, object
 * Jalen Banks
 * Sep 11, 2025
 */

console.log("Jalen Banks")
//EXAMPLE 1
// annonymous function in a variable
let greet = function(username){
    console.log(`Welcome to function ${username}`)

}
// arrow function => instead of `function`
let greeting = (username)=>{
    console.log(`Good afternoon ${username}`)
}
// EXAMPLE 2 : Default parameters
// randomly generated a number between 1 and 9
// function will as pass the amount of time
function rand_number(x=1){
    for(let n = 1; n <= x; n++){
        let num = Math.ceil(Math.random()*9)
        console.log(`${num}`)
    }
        
}
// EXAMPLE 3: spread syntax ...
numbers = [2,0, -10, 5, 8, -9]
let max_number = Math.max(...numbers)
console.log(`\n-----Example 3: spread------`)
console.log(`The Maximun number = ${max_number}`)

// create an object `car`
const car ={
    type: "Fiat",
    model: "500",
    color: "white",

    // method
    car_description : function(){
        return `Car type = ${this.type}, ${this.model}, car color = ${this.color}`
    }

}

// EXAMPLE 5 
// create an object `myMath` that will calculate a perimeter of a rectangle or the area
const myMath = {
    // methods
    perimeter : function(w,l){return (2*w)+(2*1)},
    area : function(w=0,l=0){return w*1}
}
// Example 6
const cat = {
    // properties 
    name: "Mickey",
    color: "Black with white spots",
    breed: "unknown",
    
    //method
    meow: ()=>{console.log("MEOW MEOW MEOW MEOW")}
}

//EXAMPLE 7
const hen = {
    // properties
    name : "Helen",
    eggCount : 0,

    // method
    layAnEgg : (){
        this.eggCount++;
         return `${this.name} lays an egg`
    },
    resetEggCount(){
        this.eggCount = 0
        return `${this.name} egg count = ${this.eggCount}`
    }

        
        
}

//EXAMPLE 8: try catch

    function yell(message=""){
        try{
            console.log(message.toUpperCase().repeat(3))
        
    }
    catch(error){
        console.log(error)
        console.log(`Please pass a string next time!`)
}
//DEBUG EXAMPLES AND COMPLETE ASSIGNMENT EXCERCISES


}

