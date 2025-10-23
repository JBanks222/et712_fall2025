# Lab 10 - Form Events & Word Game
*Quick notes on what each file does*

## Files Overview:

**lab10.html** - main page with 2 forms
- form 1: username/password validation 
- form 2: word scramble game
- links to CSS and JS files

**lab10.css** - all the styling
- makes forms look like the screenshot (light blue bg, purple headers, etc.)
- button starts gray, turns green on hover when enabled
- input field styling with blue borders

**lab10_script.js** - all the interactive stuff
- username validation (2-20 chars, enables/disables submit btn)
- password focus/blur events (changes border colors)
- word scramble logic (shuffles "javascript", checks user guesses)
- form submission handling

**formsent.html** - success page after form submit
- just says "form submitted" with link back to main page

## How they work together:

1. HTML loads CSS for styling + JS for functionality
2. JS listens for user input events (typing, clicking, etc.)
3. CSS classes get added/removed by JS for visual feedback
4. When form validates, redirects to formsent.html

## Key interactions:
- Type in username → JS validates → CSS changes button color
- Focus on password → JS adds CSS class → border turns green  
- Type word guess → JS checks if correct → CSS shows feedback
- Submit form → JS prevents default → shows success msg → redirects

*basically HTML = structure, CSS = looks, JS = behavior*