//  MARIA LINES START

///  start button funtionalitytakes you to first question

var startButton = document.getElementById("startButton");
if (startButton) {
    startButton.onclick = function () {
        window.location.href = "startLearningpage.html";
    };
}

//   array
import { flashCardsArray} from './flashcarArray.js'

  // function random
  function shuffleArray(array) {
   
    array.sort(() => Math.random() - 0.5);
  }
  // shuffle the flashCardsArray  when a cardstarts
shuffleArray(flashCardsArray);

console.log("Shuffled flashCardsArray:", flashCardsArray);


//  elements from startLearningpage.html
var cardQuestionElement = document.getElementById('cardQuestion');
var cardAnswerElement = document.getElementById('cardAnswer');
var nextButton = document.getElementById('btn-next1');
var prevButton = document.getElementById('btn-back1');
var cardToFlip = document.querySelector('#cardContainer .card');
var frontPageButton = document.getElementById('frontPage');

// function e flip action for the main card
function performCardFlip() {
    // 'this' refers to the element the listener is attached to (cardToFlip)
    if (this) {
        this.classList.toggle("flip");
    }
}

// Attach event listener for flipping to the specific card, if it exists
if (cardToFlip) {
    cardToFlip.addEventListener('click', performCardFlip);
}

var currentCardIndex = 0;
// logical 
function displayCard() {
   
    if (!flashCardsArray || flashCardsArray.length === 0) {
        if (cardQuestionElement) { // if element exists 
            cardQuestionElement.innerHTML = "<p>No cards !</p>";
        }
        if (cardAnswerElement) { //  if element exists
            cardAnswerElement.innerHTML = ""; // Use innerHTML
        }
        return;
    }

    var cardData = flashCardsArray[currentCardIndex];

    // Display question on the front
    var frontHTML = "<p style='text-align: center;'>" + cardData.question + "</p>";
    if (cardQuestionElement) cardQuestionElement.innerHTML = frontHTML;

    // Display answer and image on the back
    var backHTML = '';
    if (cardData.image) {
        backHTML += "<img src='" + cardData.image + "' alt='Card image' style='max-width: 90%; max-height: 120px; display: block; margin: 10px auto; border-radius: 5px;'>";
    }
    backHTML += "<p style='text-align: center;'>" + cardData.answer + "</p>";
    if (cardAnswerElement) cardAnswerElement.innerHTML = backHTML;

    //  card is showing the front when a new card is displayed

     if (cardToFlip && cardToFlip.classList.contains('flip')) {
        cardToFlip.classList.remove('flip');
    }
}

function showNextCard() {
    if (!flashCardsArray || flashCardsArray.length === 0) return; 
    currentCardIndex = currentCardIndex + 1;
    if (currentCardIndex >= flashCardsArray.length) {
        currentCardIndex = 0; // Loop to  beginning
    }
    displayCard();
}

function showPreviousCard() {
    if (!flashCardsArray || flashCardsArray.length === 0) return; //  guard clause
    currentCardIndex = currentCardIndex - 1;
    if (currentCardIndex < 0) {
        currentCardIndex = flashCardsArray.length - 1; // Loop to  end
    }
    displayCard();
}

// block setsthe card display and navigation on startLearningpage.html
if (cardQuestionElement && cardAnswerElement && nextButton && prevButton) {
    displayCard();

    nextButton.addEventListener('click', showNextCard);
    prevButton.addEventListener('click', showPreviousCard);

    if (frontPageButton) {
        frontPageButton.addEventListener('click', function() { 
            window.location.href = "index.html"; 
        });
  }
} else {
  
}




