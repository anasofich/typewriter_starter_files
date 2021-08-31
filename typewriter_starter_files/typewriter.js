"use strict";

let text = document.querySelector(".typewritten").textContent.trim();
document.querySelector(".typewritten").textContent = "";
let maxNumber;
let iterator;
let character;

init();
console.log(text);

function init() {
  maxNumber = text.length;
  iterator = 0;
  loop();
}

function loop() {
  console.log("loop", iterator);
  console.log(character);

  character = text[iterator];
  document.querySelector(".typewritten").textContent += character;
  iterator++;

  if (iterator < maxNumber) {
    setTimeout(loop, 100);
  } /* else if (iterator == maxNumber) {
    document.querySelector(".typewritten").textContent = "";
    setTimeout(init, 200);
  } */
}
