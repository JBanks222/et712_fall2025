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
    else{
        displayusername.style.display = "username must be between 2 and 20 characters"
        btnsubmit.disabled = true
    
    }
})