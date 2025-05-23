//JavaScript file for FlashCards

//  Start Button Funtionality-Takes you to first question-hygge
document.getElementById("startButton") .onclick = function () {
    window.location.href = "startLearningpage.html";
}; // click to get answer-flip

let popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}