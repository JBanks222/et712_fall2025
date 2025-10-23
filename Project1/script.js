/**
 * Fun Learning for Kids - JavaScript
 * Created by: Jalen Banks
 * Using only methods from Labs 1-10 and Homeworks
 */

console.log("Fun Learning Website - Jalen Banks");

// Global variables for games
let currentStarCount = 3;
let currentTargetShape = "circle";
let achievements = 0;

// Wait for page to load
window.addEventListener("load", function() {
    console.log("Page loaded successfully!");
    initializeGames();
    setupScrollEffects();
});

// Initialize all games and interactions
function initializeGames() {
    setupColorCards();
    setupNumberCards();
    setupAnimalCards();
    setupShapeCards();
    setupCountingGame();
    setupShapeGame();
    setupNavigation();
}

// Component 1: Color Learning Cards
function setupColorCards() {
    let colorCards = document.querySelectorAll(".color-card");
    let colorFeedback = document.querySelector("#colorFeedback");
    
    for (let i = 0; i < colorCards.length; i++) {
        colorCards[i].addEventListener("click", function() {
            let colorName = this.getAttribute("data-color");
            showColorFeedback(colorName, colorFeedback);
            this.style.transform = "scale(1.2) rotate(10deg)";
            
            // Reset transform after animation
            setTimeout(function() {
                colorCards[i].style.transform = "";
            }, 500);
        });
        
        // Add hover effects
        colorCards[i].addEventListener("mouseover", function() {
            this.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
        });
        
        colorCards[i].addEventListener("mouseout", function() {
            this.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        });
    }
}

function showColorFeedback(colorName, feedbackElement) {
    let messages = [
        `Great job! You clicked on ${colorName}! 🎨`,
        `Awesome! ${colorName} is a beautiful color! ✨`,
        `Well done! You found the ${colorName} color! 🌈`
    ];
    
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    feedbackElement.textContent = randomMessage;
    feedbackElement.className = "feedback-area success";
    
    // Clear feedback after 3 seconds
    setTimeout(function() {
        feedbackElement.textContent = "";
        feedbackElement.className = "feedback-area";
    }, 3000);
    
    checkAchievement();
}

// Component 2: Number Learning Cards
function setupNumberCards() {
    let numberCards = document.querySelectorAll(".number-card");
    
    for (let i = 0; i < numberCards.length; i++) {
        numberCards[i].addEventListener("click", function() {
            let number = this.getAttribute("data-number");
            announceNumber(number);
            
            // Animation effect
            this.style.backgroundColor = "#ff6b6b";
            setTimeout(function() {
                numberCards[i].style.backgroundColor = "";
            }, 1000);
        });
    }
}

function announceNumber(number) {
    console.log(`Number ${number} was clicked!`);
    alert(`You clicked number ${number}! Count with me: ${number}!`);
}

// Component 3: Animal Sound Cards
function setupAnimalCards() {
    let animalCards = document.querySelectorAll(".animal-card");
    
    for (let i = 0; i < animalCards.length; i++) {
        animalCards[i].addEventListener("click", function() {
            let animalName = this.getAttribute("data-animal");
            let soundElement = this.querySelector(".animal-sound");
            playAnimalSound(animalName, soundElement);
            
            // Bounce animation
            this.style.transform = "scale(1.1)";
            setTimeout(function() {
                animalCards[i].style.transform = "";
            }, 300);
        });
    }
}

function playAnimalSound(animal, soundElement) {
    let sounds = {
        "cat": "Meow! Meow! 🐱",
        "dog": "Woof! Woof! 🐶", 
        "cow": "Moo! Moo! 🐄",
        "pig": "Oink! Oink! 🐷",
        "duck": "Quack! Quack! 🦆",
        "lion": "Roar! Roar! 🦁"
    };
    
    let originalText = soundElement.textContent;
    soundElement.textContent = sounds[animal];
    soundElement.style.fontSize = "1.5rem";
    soundElement.style.color = "#ff6b6b";
    
    setTimeout(function() {
        soundElement.textContent = originalText;
        soundElement.style.fontSize = "";
        soundElement.style.color = "";
    }, 2000);
}

// Component 4: Shape Learning Cards
function setupShapeCards() {
    let shapeCards = document.querySelectorAll(".shape-card");
    
    for (let i = 0; i < shapeCards.length; i++) {
        shapeCards[i].addEventListener("click", function() {
            let shapeName = this.getAttribute("data-shape");
            announceShape(shapeName);
            
            // Rotation animation
            this.style.transform = "rotate(360deg) scale(1.1)";
            setTimeout(function() {
                shapeCards[i].style.transform = "";
            }, 600);
        });
    }
}

function announceShape(shapeName) {
    alert(`This is a ${shapeName}! Shapes are everywhere around us! 📐`);
}

// Component 5: Counting Game
function setupCountingGame() {
    generateRandomStars();
    
    let checkButton = document.querySelector(".counting-game button");
    let countInput = document.querySelector("#countInput");
    
    if (checkButton) {
        checkButton.addEventListener("click", checkCount);
    }
    
    if (countInput) {
        countInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                checkCount();
            }
        });
    }
}

function generateRandomStars() {
    currentStarCount = Math.floor(Math.random() * 5) + 1;
    let starDisplay = document.querySelector("#starCount");
    let stars = "";
    
    for (let i = 0; i < currentStarCount; i++) {
        stars += "⭐";
    }
    
    if (starDisplay) {
        starDisplay.textContent = stars;
    }
}

function checkCount() {
    let userInput = document.querySelector("#countInput").value;
    let feedback = document.querySelector("#countFeedback");
    let userNumber = parseInt(userInput);
    
    if (userNumber === currentStarCount) {
        feedback.textContent = `🎉 Correct! There are ${currentStarCount} stars! Great counting!`;
        feedback.className = "success";
        showAchievementModal("You're amazing at counting! 🌟");
        
        // Generate new stars after 2 seconds
        setTimeout(function() {
            generateRandomStars();
            document.querySelector("#countInput").value = "";
            feedback.textContent = "";
            feedback.className = "";
        }, 2000);
    } else {
        feedback.textContent = `Try again! Count the stars carefully. 🤔`;
        feedback.className = "error";
        
        setTimeout(function() {
            feedback.textContent = "";
            feedback.className = "";
        }, 2000);
    }
}

// Component 6: Shape Matching Game
function setupShapeGame() {
    generateRandomShape();
    
    let shapeOptions = document.querySelectorAll(".shape-option");
    for (let i = 0; i < shapeOptions.length; i++) {
        shapeOptions[i].addEventListener("click", function() {
            let selectedShape = this.getAttribute("data-shape");
            checkShapeMatch(selectedShape);
        });
    }
}

function generateRandomShape() {
    let shapes = ["circle", "square", "triangle", "rectangle"];
    currentTargetShape = shapes[Math.floor(Math.random() * shapes.length)];
    
    let targetDisplay = document.querySelector("#targetShape");
    if (targetDisplay) {
        targetDisplay.textContent = currentTargetShape.charAt(0).toUpperCase() + currentTargetShape.slice(1);
    }
}

function checkShapeMatch(selectedShape) {
    let feedback = document.querySelector("#shapeFeedback");
    
    if (selectedShape === currentTargetShape) {
        feedback.textContent = `🎉 Perfect! You found the ${currentTargetShape}!`;
        feedback.className = "success";
        showAchievementModal("You're a shape expert! 📐");
        
        // Generate new shape after 2 seconds
        setTimeout(function() {
            generateRandomShape();
            feedback.textContent = "";
            feedback.className = "";
        }, 2000);
    } else {
        feedback.textContent = `Try again! Look for the ${currentTargetShape}. 🤔`;
        feedback.className = "error";
        
        setTimeout(function() {
            feedback.textContent = "";
            feedback.className = "";
        }, 2000);
    }
}

// Component 7: Smooth Navigation
function setupNavigation() {
    let navLinks = document.querySelectorAll(".nav-link");
    
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function(event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            scrollToSection(targetId);
        });
    }
}

function scrollToSection(sectionId) {
    let targetSection = document.querySelector("#" + sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}

// Component 8: Go to Top Button with Scroll Detection
function setupScrollEffects() {
    let goToTopBtn = document.querySelector("#goToTop");
    
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        
        if (scrollPosition > 300) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
        
        // Change header background on scroll
        let header = document.querySelector(".main-header");
        if (scrollPosition > 100) {
            header.style.backgroundColor = "rgba(255, 107, 107, 0.95)";
        } else {
            header.style.backgroundColor = "";
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Component 9: Achievement Modal System
function checkAchievement() {
    achievements++;
    if (achievements % 5 === 0) {
        showAchievementModal(`Wow! You've completed ${achievements} activities! Keep learning! 🏆`);
    }
}

function showAchievementModal(message) {
    let modal = document.querySelector("#achievementModal");
    let modalMessage = document.querySelector("#modalMessage");
    
    if (modal && modalMessage) {
        modalMessage.textContent = message;
        modal.style.display = "block";
        
        // Auto close after 5 seconds
        setTimeout(function() {
            closeModal();
        }, 5000);
    }
}

function closeModal() {
    let modal = document.querySelector("#achievementModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    let modal = document.querySelector("#achievementModal");
    if (event.target === modal) {
        closeModal();
    }
});

// Component 10: Keyboard Navigation Support
document.addEventListener("keydown", function(event) {
    // Press 'Escape' to close modal
    if (event.key === "Escape") {
        closeModal();
    }
    
    // Press 'Home' to go to top
    if (event.key === "Home") {
        scrollToTop();
    }
    
    // Arrow keys for section navigation
    if (event.key === "ArrowDown") {
        let sections = ["home", "colors", "numbers", "animals", "shapes"];
        let currentSection = getCurrentSection();
        let currentIndex = sections.indexOf(currentSection);
        
        if (currentIndex < sections.length - 1) {
            scrollToSection(sections[currentIndex + 1]);
        }
    }
    
    if (event.key === "ArrowUp") {
        let sections = ["home", "colors", "numbers", "animals", "shapes"];
        let currentSection = getCurrentSection();
        let currentIndex = sections.indexOf(currentSection);
        
        if (currentIndex > 0) {
            scrollToSection(sections[currentIndex - 1]);
        }
    }
});

function getCurrentSection() {
    let sections = document.querySelectorAll("section");
    let scrollPosition = window.scrollY + 200;
    
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        let sectionTop = section.offsetTop;
        let sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            return section.id;
        }
    }
    
    return "home";
}

// Fun animations on page load
window.addEventListener("load", function() {
    let cards = document.querySelectorAll(".color-card, .number-card, .animal-card, .shape-card");
    
    for (let i = 0; i < cards.length; i++) {
        setTimeout(function() {
            cards[i].style.opacity = "0";
            cards[i].style.transform = "translateY(50px)";
            cards[i].style.transition = "all 0.5s ease";
            
            setTimeout(function() {
                cards[i].style.opacity = "1";
                cards[i].style.transform = "translateY(0)";
            }, 100);
        }, i * 100);
    }
});

console.log("All interactive components loaded successfully!");