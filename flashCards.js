//JavaScript file for FlashCards

//  Start Button Funtionality-Takes you to first question-hygge
// document.getElementById("startButton") .onclick = function () {
//     window.location.href = "startLearningpage.html";
// }; // click to get answer-flip

//open/close popup element when clicked
let popup = document.getElementById('popup');
let modalBtn = document.getElementById('createPlayer');
let modalContainer = document.getElementById('newPlayersModal');
let closeBtn = document.getElementById('cancelButton');


// Open popup window for download cards and dim the background when button clicked
function openPopup() {
    if (popup) {    //added a condition to check if popup available, not available in modal
        popup.classList.add("open-popup")
    }
    document.getElementById("overlay").style.display = "block";
};

// TWO PLAYER GAME PAGE

// Close popup window for download cards and remove dimmed background
function closePopup() {
    if (popup) {  //added a condition to check if popup available, not available in modal
        popup.classList.remove("open-popup")
    }
    document.getElementById("overlay").style.display = "none";
};

// Open modal window for two player user input and dim background
modalBtn.addEventListener('click', function() {
    modalContainer.classList.add("open-popup")
    document.getElementById("overlay").style.display = "block";
});

function closeModal() {
    modalContainer.classList.remove("open-popup")
    document.getElementById("overlay").style.display = "none";
}
// Close modal window and remove dimmed background
closeBtn.addEventListener('click', closeModal);

// save player names
let playerOneNameInput = document.getElementById('playerOne');
let playerTwoNameInput = document.getElementById('playerTwo');
let startGame = document.getElementById('startGame');
let playerOneName = document.getElementById('playerOneName');
let playerTwoName = document.getElementById('playerTwoName');
let gameButtonContainer = document.querySelector('.gameButtonContainer');

//function that adds user input names to the name element
function addNames() {
    playerOneName.innerText = playerOneNameInput.value.toUpperCase();
    playerTwoName.innerText = playerTwoNameInput.value.toUpperCase();
}
//function that hides the "Add new players" button
function hideContainer() {
    gameButtonContainer.style.display = 'none';
}
//function that calls threefunction when start button clicked
function addNamesHideContainer() {
    addNames();
    hideContainer();
    closeModal();
}
startGame.addEventListener('click', addNamesHideContainer);