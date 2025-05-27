//JavaScript file for FlashCards

//  Start Button Funtionality-Takes you to first question-hygge
// document.getElementById("startButton") .onclick = function () {
//     window.location.href = "startLearningpage.html";
// }; // click to get answer-flip

// click to get answer-flip
const card = document.querySelectorAll(".card");
function flipCard() {
  this.classList.toggle("flip");
}
card.forEach(card => card.addEventListener("click", flipCard));

// open pop up 
let popup = document.getElementById('popup');
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
    modalContainer.classList.add("open-popup")
}

// open modal window when button clicked
modalBtn.addEventListener('click', openModal());

// close modal window
function closeModal() {
    modalContainer.classList.remove("open-popup")
}
// remove dimmed and blurred background
function unDim() {
    document.getElementById("overlayTwo").style.display = "none";
}
// Close modal window
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
//function that calls foun functions when start button clicked
function addNamesHideContainer() {
    addNames();
    hideContainer();
    closeModal()
    unDim();
}
startGame.addEventListener('click', addNamesHideContainer);

let flashCardsArray = [
    {
        image: "images\hygge.png" ,
        question: "What is the defining characteristic of Danish culture?",
        answer: "Hygge."
    },
    {
        image: "images\Lego.png" ,
        question: "Which world-famous toy is made in Denmark?",
        answer: "Lego"
    },
    {   image: "images\BIG.png" ,
        question: "What is the name of the world famous contemporary architect from Denmark?",
        answer: "BIG (Bjarke Ingels)"
    },
    {   image: "images\dannebrog.png" ,
        question: "Danes are very proud of their flag. Do you know how they call it?",
        answer: "Dannebrog"
    },
    {   image: "images\MadsMikkelsen.png" ,
        question: "The famous actor from Denmark, who was nominated for Oscar is..." ,
        answer: "Mads Mikkelsen"
    },
    {   image: "images\Pandora.png" ,
        question: "The world-known jewelry brand originated in Copenhagen is..." ,
        answer: "Pandora"
    },
    {   image:  "images\B&O.png" , 
        question: "Danish high-end audio and multimedia company known for its quality audio products is called..." ,
        answer: "Bang&Olufsen (B&O)"
    },
    {   image: "images\ArneJakobsen.png" ,
        question: "The name of the Danish architect and furniture designer, known for simple and well-designed chairs is..." ,
        answer: "Arne Jakobsen"
    },
    {   image: "images\HCAndersen.png", 
        question: "Name of the Danish writer of plays, best remembered for his fairy tales is.." ,
        answer: "Hans Christian Andersen"
    },
    {   image: "images\Oresund.png" ,
        question: "Name of the second longest bridge in Europe, connecting Denmark and Sweden is..." ,
        answer: "Öresund Bridge"
    }
    ];
    
    // Let's check if the array is there
    console.log(flashCardsArray);

    // save the new card from user

    document.getElementById("submitButton").addEventListener("click", () => {
      const questionInput = document.getElementById("questionFromUser").value.trim();
      const answerInput = document.getElementById("answerFromUser").value.trim();

      // Make sure that user did not submit empty fields
      if (!questionInput || !answerInput) {
        alert("Please enter both a question and an answer");
        return;
      }

      // Saving user's input as a new const, along with provided default image
      const newCard = {
        image: "images/defaultImageForNewCard",
        question: questionInput,
        answer: answerInput
      };

      //adding new card on the end of our flashCardArray
      flashCardsArray.push(newCard);
      // when we put all on local storage: localStorage.setItem("flashCardsArray", JSON.stringify(flashCardsArray));

      //test to see if the card is saved
      console.log("New flashcard saved:", newCard);
      // alert for user > I should style this
      alert("New flashcard saved successfully");

      // Clear input fields after saving
      document.getElementById("questionFromUser").value = "";
      document.getElementById("answerFromUser").value = "";
    });

    // ANDJELA LINES START









dfds
dfds























































































    // ANDJELA LINES STOP



//  MARIA LINES START




































































































// MARIA LINES STOP



//  MATEA LINES START
































































































// MATEA LINES STOP