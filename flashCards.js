//JavaScript file for FlashCards

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
    modalContainer.classList.add("open-popup")
}

// open modal window when button clicked
modalBtn?.addEventListener('click', openModal); //? - if not null


// close modal window
function closeModal() {
    modalContainer.classList.remove("open-popup")
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
//function that calls foun functions when start button clicked
function addNamesHideContainer() {
    addNames();
    hideContainer();
    closeModal()
    unDim();
}

startGame?.addEventListener('click', addNamesHideContainer); //? - if not null

//array of cards

let flashCardsArray = [
    {
        image: "images/hygge.png" ,
        question: "What is the defining characteristic of Danish culture?",
        answer: "Hygge"
    },
    {
        image: "images/Lego.png" ,
        question: "Which world-famous toy is made in Denmark?",
        answer: "Lego"
    },
    {   image: "images/BIG.png" ,
        question: "What is the name of the world famous contemporary architect from Denmark?",
        answer: "BIG (Bjarke Ingels)"
    },
    {   image: "images/dannebrog.png" ,
        question: "Danes are very proud of their flag. Do you know how they call it?",
        answer: "Dannebrog"
    },
    {   image: "images/MadsMikkelsen.png" ,
        question: "The famous actor from Denmark, who was nominated for Oscar is..." ,
        answer: "Mads Mikkelsen"
    },
    {   image: "images/Pandora.png" ,
        question: "The world-known jewelry brand originated in Copenhagen is..." ,
        answer: "Pandora"
    },
    {   image:  "images/B&O.png" , 
        question: "Danish high-end audio and multimedia company known for its quality audio products is called..." ,
        answer: "Bang&Olufsen (B&O)"
    },
    {   image: "images/ArneJakobsen.png" ,
        question: "The name of the Danish architect and furniture designer, known for simple and well-designed chairs is..." ,
        answer: "Arne Jakobsen"
    },
    {   image: "images/HCAndersen.png", 
        question: "Name of the Danish writer of plays, best remembered for his fairy tales is.." ,
        answer: "Hans Christian Andersen"
    },
    {   image: "images/Oresund.png" ,
        question: "Name of the second longest bridge in Europe, connecting Denmark and Sweden is..." ,
        answer: "Öresund Bridge"
    }
    ];
    
    // Let's check if the array is there
    console.log(flashCardsArray);

    // save the new card from user

    // document.getElementById("submitButton").addEventListener("click", () => {
    //   const questionInput = document.getElementById("questionFromUser").value.trim();
    //   const answerInput = document.getElementById("answerFromUser").value.trim();

      // Make sure that user did not submit empty fields

    // ANDJELA LINES START
    //   if (!questionInput || !answerInput) {
    //     alert("Please enter both a question and an answer");
    //     return;
    //   }

      // Saving user's input as a new const, along with provided default image
    //   const newCard = {
    //     image: "images/defaultImageForNewCard.png",
    //     question: questionInput,
    //     answer: answerInput
    //   };

      //adding new card on the end of our flashCardArray
    //   flashCardsArray.push(newCard);

      //saving the whole array with the new card on local storage
      //The array needs to be stringified before saving in local storage.
      localStorage.setItem("flashCardsArray", JSON.stringify(flashCardsArray));
      

      //test to see if the card is saved
    //   console.log("New flashcard saved:", newCard);
      // alert for user > I should style this
    //   alert("New flashcard saved successfully");

      // Clear input fields after saving
    //   document.getElementById("questionFromUser").value = "";
    //   document.getElementById("answerFromUser").value = "";

      //test to see the array
      console.log("New array is saved in LOCAL STORAGE:", flashCardsArray);



























































































    // ANDJELA LINES STOP



//  MARIA LINES START




































































































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

//counters for scores
let countOne = 0;
let countTwo = 0;

//function which checks if the player's answer is correct
function validateAnswer() {
    answerOneDisplay.innerText = storeAnswerOne;
    answerTwoDisplay.innerText = storeAnswerTwo;

     if (storeAnswerOne === 'Hygge') {
        console.log(answerOne.value);
        countOne++;
        scoreOne.innerText = countOne;
        changeColorCorrectAnswer(answerOneDisplay);
    }
    else if (storeAnswerTwo === flashCardsArray.answer) {
        countTwo++;
        scoreTwo.innerText = countTwo;
        changeColorCorrectAnswer(answerTwoDisplay);
    }
}
//function to change the color of the correct answer to green after showing the answer
function changeColorCorrectAnswer(element) {
    element.style.color = "green";
}

function changeColorBack() {
    answerOneDisplay.style.color = "red";
    answerTwoDisplay.style.color = "red";
}

function clearAnswers() {
    storeAnswerOne = "";
    storeAnswerTwo = "";

}
//function that calls two functions - flip the card to show the correct answer and validates the answer of the players
function flipValidateClear () {
    flipCard();
    validateAnswer();
    clearAnswers();
}

//when show answer is clicked then
showAnswer?.addEventListener('click', flipValidateClear); //? - if not null

let storeAnswerOne = "";
let storeAnswerTwo = "";

//when submit button is clicked then 
submitAnswers.forEach(submitAnswer => {
    submitAnswer.addEventListener('click', (event) => {
        const clickedButton = event.target;
        if (clickedButton.id === 'submitOne') {
            console.log("answer one before storing: " + answerOne.value)
            storeAnswerOne = answerOne.value;
            console.log("answer one after storing: " + answerOne.value)
            answerOne.value = "";
        }
        else if (clickedButton.id === 'submitTwo') {
            storeAnswerTwo = answerTwo.value;
            answerTwo.value = "";
        }     
})
});

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


/*To be done: 
- maybe remove the check answer button after being clicked
- add next card button
- when the end of cards is reached - show who is the winner with some banner
- deal with case of answer input - and card answers */




//downloading flashcards as json


function downloadJSON() {
    let retrieveFlashCards =  localStorage.getItem("flashCardsArray");
    console.log("These are the flashcards: " + retrieveFlashCards);
    console.log("in the downloadJSON function now");
    const link = document.createElement('a');
    const fileJSON = new Blob([retrieveFlashCards], { type:'application/json'});
    link.href = URL.createObjectURL(fileJSON);
    link.download = "Danmark101.json";
    link.click();
    URL.revokeObjectURL(link.href);
};

//CARDS

let cardFront = document.querySelector('.front'); //variable for front of the card
let cardBack = document.querySelector('.back'); //variable for back of the card
let next = document.getElementById('btn-next1'); //variable for next card button

//when next card button is clicked then
next.addEventListener('click', () => {
    const random = Math.floor(Math.random() * flashCardsArray.length); //index of a random flashcard
    cardFront.innerText = flashCardsArray[random].question;
    cardBack.innerText = flashCardsArray[random].answer;
});


















































































// MATEA LINES STOP