// Card Gallery Navigation JavaScript

// Get DOM elements
const gallery = document.getElementById('gallery');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const indicator = document.getElementById('indicator');

// Gallery settings
const totalCards = 6;
const cardsVisible = 3;
const totalSets = totalCards / cardsVisible; // 2 sets (cards 1-3, cards 4-6)
let currentSet = 0; // Start with first set (0 = cards 1-3, 1 = cards 4-6)

// Function to update the gallery position
function updateGallery() {
    // Calculate the transform based on sets
    // Gallery is 200% wide, so to show second set, move by 50%
    // Set 0: translateX(0%) shows cards 1-3
    // Set 1: translateX(-50%) shows cards 4-6
    const translateX = currentSet * -50;
    
    // Apply the transform
    gallery.style.transform = `translateX(${translateX}%)`;
    
    // Update indicator text
    const startCard = (currentSet * cardsVisible) + 1;
    const endCard = startCard + cardsVisible - 1;
    indicator.textContent = `Showing cards ${startCard}-${endCard} of ${totalCards}`;
}

// Function to go to next set
function goToNextSet() {
    currentSet++;
    
    // If we've gone past the last set, loop back to the first
    if (currentSet >= totalSets) {
        currentSet = 0;
    }
    
    updateGallery();
}

// Function to go to previous set
function goToPreviousSet() {
    currentSet--;
    
    // If we've gone before the first set, loop to the last
    if (currentSet < 0) {
        currentSet = totalSets - 1;
    }
    
    updateGallery();
}

// Add event listeners for navigation buttons
rightButton.addEventListener('click', goToNextSet);
leftButton.addEventListener('click', goToPreviousSet);

// Optional: Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        goToNextSet();
    } else if (event.key === 'ArrowLeft') {
        goToPreviousSet();
    }
});

// Initialize the gallery
updateGallery();