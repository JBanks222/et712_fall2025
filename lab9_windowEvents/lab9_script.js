let displaypexels = document.querySelector(".displaypexels")

window.addEventListener("scroll", funtion(){
    let y_pixels = window.scrollY
    displaypexels.innerHTML = `${y_pixels} px away from the top`
})

const toTop = document.querySelector(".toTop")
window.addEventListener("scroll", function(){
    let y_pixels = this.window.scrollY 
    if(y_pixels>600){
        toTop.style.display = "block"
    }
    else{
        toTop.style.display = "none"
    }
})

window.addEventListener("resize", function(){
    displaypexels.style.backgroundColor = "crimson"
})

// load event: when the pages finishes loading, open an alert dialog

window.addEventListener("load", function(){
    this.alert("page fully loaded!")
})

const openmodal = document.querySelector(".openmodal")
const modalOverlay = document.querySelector("#modalOverlay")
const closeBtn = document.querySelector("#closeBtn")

openmodal.addEventListener("click", function(){
    modalOverlay.style.display = "block"
})

closeBtn.addEventListener("click", function(){
    modalOverlay.style.display = "none"
})