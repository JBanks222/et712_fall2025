let displaypixels = document.querySelector(".displaypixels")

window.addEventListener("scroll", function () {
    let y_pixels = window.scrollY
    displaypixels.innerHTML = `${y_pixels} px away from the top`
})

const toTop = document.querySelector(".toTop")
window.addEventListener("scroll", function () {
    let y_pixels = this.window.scrollY
    if (y_pixels > 600) {
        toTop.style.display = "block"
    }
    else {
        toTop.style.display = "none"
    }
})

window.addEventListener("resize", function () {
    displaypixels.style.backgroundColor = "crimson"
})

// load event: when the pages finishes loading, open an alert dialog

window.addEventListener("load", function () {
    this.alert("page fully loaded!")
})

// Modal 1
const openmodal = document.querySelector(".openmodal")
const modalOverlay = document.querySelector("#modalOverlay")
const closeBtn = document.querySelector("#closeBtn")

// Modal 2
const openmodal2 = document.querySelector(".openmodal2")
const modalOverlay2 = document.querySelector("#modalOverlay2")
const closeBtn2 = document.querySelector("#closeBtn2")

// Modal 3
const openmodal3 = document.querySelector(".openmodal3")
const modalOverlay3 = document.querySelector("#modalOverlay3")
const closeBtn3 = document.querySelector("#closeBtn3")

console.log("Modal 1 elements:", openmodal, modalOverlay, closeBtn)
console.log("Modal 2 elements:", openmodal2, modalOverlay2, closeBtn2)
console.log("Modal 3 elements:", openmodal3, modalOverlay3, closeBtn3)

// Modal 1 Event Listeners
if (openmodal) {
    openmodal.addEventListener("click", function () {
        console.log("Image 1 clicked!")
        modalOverlay.style.display = "block"
    })
}

if (closeBtn) {
    closeBtn.addEventListener("click", function () {
        console.log("Close button 1 clicked!")
        modalOverlay.style.display = "none"
    })
}

// Modal 2 Event Listeners
if (openmodal2) {
    openmodal2.addEventListener("click", function () {
        console.log("Image 2 clicked!")
        modalOverlay2.style.display = "block"
    })
}

if (closeBtn2) {
    closeBtn2.addEventListener("click", function () {
        console.log("Close button 2 clicked!")
        modalOverlay2.style.display = "none"
    })
}

// Modal 3 Event Listeners
if (openmodal3) {
    openmodal3.addEventListener("click", function () {
        console.log("Image 3 clicked!")
        modalOverlay3.style.display = "block"
    })
}

if (closeBtn3) {
    closeBtn3.addEventListener("click", function () {
        console.log("Close button 3 clicked!")
        modalOverlay3.style.display = "none"
    })
}