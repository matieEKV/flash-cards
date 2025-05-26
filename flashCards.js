//JavaScript file for FlashCards

//  Start Button Funtionality-Takes you to first question-hygge



// click to get answer-flip
const card = document.querySelectorAll(".card");
function flipCard() {
  this.classList.toggle("flip");
}
card.forEach(card => card.addEventListener("click", flipCard));

// open pop up 

let popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

