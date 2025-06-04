//JavaScript file for FlashCards
//having problems with merge...delete this
//   array of cards
let flashCardsArray = [
    {
        image: "images/hygge.png",
        question: "What is the defining characteristic of Danish culture?",
        answer: "Hygge."
    },
    {
        image: "images/Lego.png",
        question: "Which world-famous toy is made in Denmark?",
        answer: "Lego"
    },
    {
        image: "images/BIG.png",
        question: "What is the name of the world famous contemporary architect from Denmark?",
        answer: "BIG (Bjarke Ingels)"
    },
    {
        image: "images/dannebrog.png",
        question: "Danes are very proud of their flag. Do you know how they call it?",
        answer: "Dannebrog"
    },
    {
        image: "images/MadsMikkelsen.png",
        question: "The famous actor from Denmark, who was nominated for an Oscar, is...",
        answer: "Mads Mikkelsen"
    },
    {
        image: "images/Pandora.png",
        question: "The world-known jewelry brand originated in Copenhagen is...",
        answer: "Pandora"
    },
    {
        image: "images/B&O.png",
        question: "Danish high-end audio and multimedia company known for its quality audio products is called...",
        answer: "Bang & Olufsen (B&O)"
    },
    {
        image: "images/ArneJakobsen.png",
        question: "The name of the Danish architect and furniture designer, known for simple and well-designed chairs is...",
        answer: "Arne Jakobsen"
    },
    {
        image: "images/HCAndersen.png",
        question: "Name of the Danish writer of plays, best remembered for his fairy tales is...",
        answer: "Hans Christian Andersen"
    },
    {
        image: "images/Oresund.png",
        question: "Name of the second longest bridge in Europe, connecting Denmark and Sweden is...",
        answer: "Öresund Bridge"
    }
  ];


//  Start Button Funtionality-Takes you to first question-hygge
// document.getElementById("startButton") .onclick = function () {
//     window.location.href = "startLearningpage.html";
// }; // click to get answer-flip

// click to get answer-flip
const cards = document.querySelectorAll(".card");
function flipCard() {
    cards.forEach(card => {
  card.classList.toggle("flip");
});
}
cards.forEach(card => card.addEventListener("click", flipCard));

// open pop up 
let popup = document.getElementById('popup'); //
let modalBtn = document.getElementById('createPlayer');
let modalContainer = document.getElementById('newPlayersModal');
let closeBtn = document.getElementById('cancelButton');


// Open popup window for download cards and dim the background when button clicked
function openPopup() {
    // if (popup) {    //added a condition to check if popup available, not available in modal
    popup.classList.add("open-popup")
    document.getElementById("overlay").style.display = "block";
};

// TWO PLAYER GAME PAGE

// Close popup window for download cards and remove dimmed background
function closePopup() {
    popup.classList.remove("open-popup")
    document.getElementById("overlay").style.display = "none";
};

// Open modal window for two player user input
function openModal() {
    modalContainer?.classList.add("open-popup")
}

// open modal window when button clicked 
    modalBtn?.addEventListener('click', openModal);

// close modal window
function closeModal() {
    modalContainer?.classList.remove("open-popup")
}
// remove dimmed and blurred background
function unDim() {
    document.getElementById("overlayTwo").style.display = "none";
}
// Close modal window
closeBtn?.addEventListener('click', closeModal);

// save player names
let playerOneNameInput = document.getElementById('playerOne'); //name for player one
let playerTwoNameInput = document.getElementById('playerTwo'); //name for player two
let startGame = document.getElementById('startGame'); //button on modal to start the game once player's name are inputed
let playerOneName = document.getElementById('playerOneName'); //element that displayes player one name
let playerTwoName = document.getElementById('playerTwoName'); //element that displayes player two name
let gameButtonContainer = document.querySelector('.gameButtonContainer'); //element that holds 'Add new players' button

//function that adds user input names to the name element
function addNames() {
    playerOneName.innerText = playerOneNameInput.value.toUpperCase();
    playerTwoName.innerText = playerTwoNameInput.value.toUpperCase();
}
//function that hides the "Add new players" button
function hideContainer() {
    gameButtonContainer.style.display = 'none';
}
//function that calls four functions when start button clicked
function addNamesHideContainer() {
    addNames();
    loadNextCard();
    hideContainer();
    closeModal();
    unDim();
}

    startGame?.addEventListener('click', addNamesHideContainer);


// ANDJELA LINES START
   
// Let's check if the array is there
console.log(flashCardsArray);

// Check if the submit button exists before attaching the event listener
const submitButton = document.getElementById("submitButton");

if (submitButton) {
  // Save the new card from user
  submitButton.addEventListener("click", () => {
    const questionInputNewCard = document.getElementById("questionFromUser").value;
    const answerInputNewCard = document.getElementById("answerFromUser").value;

    // Make sure that user did not submit empty fields
    if (!questionInputNewCard || !answerInputNewCard) {
      alert("Please enter both a question and an answer.");
      return;
    }

    // Saving user's input as a new const, along with provided default image
    const newCard = {
      image: "images/defaultImageForNewCard",
      question: questionInputNewCard,
      answer: answerInputNewCard
    };

    // Adding new card to the end of our flashCardsArray
    flashCardsArray.push(newCard);


    // Saving the whole array with the new card to local storage
    localStorage.setItem("flashCardsArray", JSON.stringify(flashCardsArray));

    // Test to see if the card is saved
    console.log("New flashcard saved:", newCard);

    // Alert for user
    alert("New flashcard saved successfully.");

    // Clear input fields after saving
    document.getElementById("questionFromUser").value = "";
    document.getElementById("answerFromUser").value = "";

    // Test to see the array
    console.log("New array is saved in LOCAL STORAGE:", flashCardsArray);
  });
}  




























































































    // ANDJELA LINES STOP





























































































// MARIA LINES STOP



//  MATEA LINES START

//downloading flashcards as json



// answer validation

let scoreOne = document.getElementById('scoreOne'); //variable for score player one
let scoreTwo = document.getElementById('scoreTwo'); //variable for score player two
let answerCard = document.querySelector('.back'); //variable for answer on the flashcard
let answerOne = document.getElementById('answerOneInput'); //variable for player one answer
let answerOneDisplay = document.getElementById('answerOne'); //variable for displaying the player answer
let answerTwoDisplay = document.getElementById('answerTwo'); //variable for displaying the player answer
let answerTwo = document.getElementById('answerTwoInput'); //variable for player two answer
let answers = document.querySelectorAll('.answers'); //variable for all players answers 
let submitAnswers = document.querySelectorAll('.submit'); //variable for all submit buttons
let submitOneBtn = document.getElementById('submitOne'); //variable for player one submit answer
let submitTwoBtn = document.getElementById('submitTwo'); //variable for player two submit answer
let showAnswer = document.getElementById('showAnswer'); //variable for show answer button
let flashCardFront = document.querySelectorAll('.frontCard'); //variable used for clicking to flip the front 
let flashCards = document.querySelectorAll(".flashCard"); //variable that holds all the cards
let cardFront = document.getElementById('front'); //variable for front of the card
let cardBack = document.querySelector('.backCard'); //variable for back of the card
let next = document.getElementById('nextCard'); //variable for next card button

//flipping the front card to back, but not the other way around
function cardFlipGame() {
    flashCards.forEach(flashCard => {
    flashCard.classList.add("flip");
    cardBack.style.color ="white";
});
}

flashCardFront.forEach(card => card.addEventListener("click", flipValidate));

//counters for scores
let countOne = 0;
let countTwo = 0;

//function which checks if the player's answer is correct
function validateAnswer() {
    answerOneDisplay.innerText = storeAnswerOne;
    answerTwoDisplay.innerText = storeAnswerTwo;

    if (storeAnswerOne.toUpperCase() == cardBack.innerText.toUpperCase()) {
        countOne++;
        scoreOne.innerText = countOne;
        changeColorCorrectAnswer(answerOneDisplay);
    }
    else {
        changeColorWrongAnswer(answerOneDisplay);
    }

    if (storeAnswerTwo.toUpperCase() == cardBack.innerText.toUpperCase()) {
        countTwo++;
        scoreTwo.innerText = countTwo;
        changeColorCorrectAnswer(answerTwoDisplay);
    }
    else {
        changeColorWrongAnswer(answerTwoDisplay);
    }
}

//function to change the color of the correct answer to green after showing the answer
function changeColorCorrectAnswer(element) {
    element.style.color = "green";
}

function changeColorWrongAnswer(element) {
    element.style.color = "red";
}
//function that calls two functions - flip the card to show the correct answer and validates the answer of the players
function flipValidate () {
    cardFlipGame();
    validateAnswer();
}

 function pronounceWinner() {
    console.log(scoreOne, scoreTwo);
    cardFront.innerText = "WHO IS THE WINNER OF THIS GAME?"
    if (countOne > countTwo) {
        cardBack.innerText = `${playerOneName.innerText} WINS!`;
    }
    else if (countOne < countTwo) {
        cardBack.innerText = `${playerTwoName.innerText} WINS!`;
    }
    else {
        cardBack.innerText = "IT IS A TIE!"
    }
 }

let storeAnswerOne = ""; //assign empty array to remove input
let storeAnswerTwo = ""; //assign empty array to remove input

//when submit button is clicked then 
submitAnswers.forEach(submitAnswer => {
    submitAnswer.addEventListener('click', (event) => {
        const clickedButton = event.target;
        if (clickedButton.id === 'submitOne') {
            storeAnswerOne = answerOne.value;
            answerOne.value = "";
        }
        else if (clickedButton.id === 'submitTwo') {
            storeAnswerTwo = answerTwo.value;
            answerTwo.value = "";
        } 
})
});

function loadNextCard() {
    const random = Math.floor(Math.random() * retrievedFlashCards.length); //index of a random flashcard
    cardFront.innerText = retrievedFlashCards[random].question; //asign question at index random to front card
    cardBack.innerText = retrievedFlashCards[random].answer; //asign answer at index random to back card
    flashCards.forEach(card => card.classList.remove('flip')); //remove flip from answer side to force the next card to show front
    retrievedFlashCards.splice(random, 1); //remove the card at index random to prevent repeat
    cardBack.style.color =" #87A9AA"; //change the font color to mask a bug
    if (retrievedFlashCards.length === 0) {
        pronounceWinner();
    }
}

let retrievedFlashCards = JSON.parse(localStorage.getItem("flashCardsArray"));//get parsed array from local storage

//card flipping and connecting to the array
next?.addEventListener('click', loadNextCard);

// input answer by clicking the enter button
// answers.forEach(answer => {
//     answer.addEventListener('keypress', (e) => {
//         if(e.key === 'Enter') {
//             submitAnswers.forEach(submitAnswer => {
//                 submitAnswer.click();
//             })
//         }
// })
// })

//downloading flashcards as json


function downloadJSON() {
    let retrieveFlashCards = localStorage.getItem("flashCardsArray");
    const link = document.createElement('a');
    const fileJSON = new Blob([retrieveFlashCards], { type:'application/json'});
    link.href = URL.createObjectURL(fileJSON);
    link.download = "Danmark101.json";
    link.click();
    URL.revokeObjectURL(link.href);
};

































































































// MATEA LINES STOP
