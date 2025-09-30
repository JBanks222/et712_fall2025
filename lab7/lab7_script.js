// collect (select) the elements
let shape = document.querySelector(".shapeDivision");
let btn_square = document.querySelector(".btn_square");
let btn_circle = document.querySelector(".btn_circle");
let btn_rectangle = document.querySelector(".btn_rectangle");
let btn_press = document.querySelector(".btnpress");

// add an event to each button
btn_square.addEventListener("click", function () {
  shape.className = "square";
  shape.textContent = "SQUARE";
  shape.style.backgroundColor = "gold";
  shape.style.fontSize = "3rem";
});

btn_circle.addEventListener("click", function () {
  shape.className = "circle";
  shape.textContent = "CIRCLE";
  shape.style.backgroundColor = "hotpink";
  shape.style.fontSize = "1rem";
});

btn_rectangle.addEventListener("click", function () {
  shape.className = "rectangle";
  shape.textContent = "RECTANGLE";
  shape.style.backgroundColor = "lightblue";
  shape.style.fontSize = "2rem";
});

// traditional event handler example
btn_press.onclick = function () {
  alert("Button pressed using traditional event handler!");
};

let btnpress = document.querySelector(".btnpress")
btnpress.onclick= function(){alert(`${new Date()}`)}

// mouse mevents
let x = document.querySelector(".x")
let circle_paragraph = document.querySelector(".circle_paragragh")
x.onmouseover = function(){circle_paragraph.textcontent += " -  CIRCLE - "}

//COPY AND PASTE COMMENTS FROM BRIGHTSPACE AND THEN COPY HTML AND PASTE HTML IN HTML FILE
// add a mouseout event to change text content to STUDENTS FULL NAME