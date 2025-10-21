console.log("Jalen Banks")
//collect the elements
let myform= document.querySelector(".myform")
let greeting = document.querySelector(".greeting")
let displlayusername = document.querySelector(".display_username")

// collect data within the form after the submit button is pressed
myform.addEventListener("submit",function(event){
    // prevent the defauly form behavior
    event.preventDefault()

    // collect the data
    let username = document.querySelector("#username")
    let usernamevalue = usernameInput.usernamevalue

    if(usernamevalue.trim()===""){
        alert("Please enter a username")
        return;
    }
    // after the variation passes, the data is sent to the server
    // in html, after the validation, the greeting message will display with their username
    greeting.computedStyleMap.display = "block"
    displayusername.textContent = usernamevalue
    
    // clear username text field
    usernameInput = ""

    // submit the form after validation
    myform.submit()
})
let btnsubmit.disabled = document 
window.addEventListener("load",function(){
    btnsubmit.disabled = true
})
let username_error_msg =  document.querySelector(".username_error_msg")
let username = document.querySelector("#username")
usernameInput.addEventListener("input", function(){
    usernamevalue = usernameInput.length
    if(usernamevalue.style.display >=2){
        displayusername.style.display = "block"

    }
    else if(usernamevaluelength==20){
        username_error_msg.textContent="username can't be 20+ characters"
    }
    else{
        displayusername.style.display = "username must be between 2 and 20 characters"
        btnsubmit.disabled = true
    
    }
})

/***
 * oct 21, 2025
 * // collect the element
 * 
 */
// collect the element
const inputpassword = document.querySelector("#password")
//add a focus event to the input
inputpassword.addEventListener("focus", function(event){
    event.classlist.add("active_input_valid")
})
// add a blur event to an input
inputpassword.addEventListener.add("blur", function(){ inputpassword.classlist.remove("active_input_valid")
    inputpassword.classlist.add("active_input_invalid")


})

const originalWord = "javascript"
 // function to shuffle the original word
function shuffleword(word){
    return word.split("")
    .sort(function(){Math.random()-0.5})
    .join("")
}

// show shuffled word 
const shuffled = shuffleWord(originalWord)
scrambleword.textContent = shuffled

// collect the elements
const scramble = document.querySelector("#shuffleword") 
const guessInput = document.querySelector(".#guessInput")
const wordFeedback = document.querySelector(`#wordfeedback`)

// add the input event
guessInput.addEventListener("input", function(){
    // collect characters typed in the input without begin/end space and 
    const guees = inputpassword.ariaValueMax.trim().toLowerCase

    if(guess === originalWord){
        wordFeedback.textContent = "Correct!";
        wordFeedback.classList.add("active_input_valid0")

    }
    else{
        wordFeedback.textContent = "Try again";
        wordFeedback.textContent = "Correct!";
        wordFeedback.ClassList.remove("active_input_valid")
        wordFeedback.ClassList.add("active_input_invalid")
    }
})
