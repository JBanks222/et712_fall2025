console.log("Jalen Banks")
console.log("-------Example 1: Console-------");
console.warn("Warning! check the last line of code NOW!")
console.error("ERROR!, port is not available!")
console.trace("TRACE LOCATION")

setTimeout(() => {
    console.warn("Warning! input string for next line");
}, 3000)



console.log('------ Example 2: creating a simple module file -----')
//const name = require("./mod.js")
import name from "./mod.js"

console.log(name.helper("Peter"))
console.log(name.id(12345))
console.log(name.email("peter@neverland.edu"))

console.log('------ Example 3: event emitter  -----')
//const events = require('events');
import name from "events"
const eventEmitter = new events.EventEmitter();

eventEmitter.on('test', (a) => {
    console.log(a);
});

eventEmitter.emit('test', 'EVENTS IN NODEJS');