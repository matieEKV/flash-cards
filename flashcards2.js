//  MARIA LINES START

//   array
 import { flashCardsArray} from './flashcarArray.js'
// localstorage set value
localStorage.setItem("flashCardsArray", JSON.stringify(flashCardsArray));
// get item
var arrayStored = JSON.parse(localStorage.getItem("flashCardsArray"));

///  start button funtionality takes you to first question

// var startButton = document.getElementById("startButton");
// if (startButton) {
//     startButton.onclick = function () {
//         window.location.href = "startLearningpage.html";
//     };
// }

// Get elements from page
var questionDiv = document.getElementById("cardQuestion");
var answerDiv = document.getElementById("cardAnswer"); 
var nextBtn = document.getElementById("btn-next1");
var backBtn = document.getElementById("btn-back1");
var flipCard = document.querySelector("#cardContainer .card");
var homeBtn = document.getElementById("frontPage");

// Eventlistener for flipping  card
if (flipCard) {
  flipCard.addEventListener("click", function () {
      flipCard.classList.toggle("flip");
  });
}

// Create a working copy of flashcards for the current session/game
//  let arrayStored = flashCardsArray.length > 0 ? [...flashCardsArray] : [];



function loadNextCard() {

  if (!flipCard || !questionDiv || !answerDiv) {
     return;
  }
  if (arrayStored.length === 0) {//when the end of the array is reached - u finished
      youhavefinished();
      return; // Exit if no cards left
  }

  const random = Math.floor(Math.random() * arrayStored.length);
  const randomCard = arrayStored[random];

  questionDiv.innerText = randomCard.question;

  let answerHTML = "";
     if (randomCard.image) {
         answerHTML += "<img src='" + randomCard.image + "' style='max-width: 90%; max-height:170px; position:absolute; top:0%;  margin:10px auto; display:block; border-radius:5px;'>";
  }

  answerHTML += "<p>" + randomCard.answer +"</p>";
  answerDiv.innerHTML = answerHTML;

  // make card not flipped when goes to next one
  flipCard.classList.remove('flip');

  //  answerDiv.style.color =" #87A9AA"; 
  // storePrevious(random)
  arrayStored.splice(random, 1);// remove card to prevent repeat  
  
};



function youhavefinished(){
  if (questionDiv) {
      questionDiv.innerText = "You Finished!";
  }
  if (answerDiv) {
      answerDiv.innerHTML = "<p>TYLLYKE</p>"; // Use innerHTML if setting HTML content
  }
};

// Eventlisteners for end  
if (questionDiv && answerDiv && nextBtn && flipCard) { // Ensure flipCard is also checked
loadNextCard();

  // next button to use loadNextCard
  nextBtn.addEventListener("click", loadNextCard);
//  backBtn.addEventListener("click", storePrevious );

  // Home button functionality
  if (homeBtn) {
      homeBtn.addEventListener("click", function () {
          window.location.href = "index.html";
      });
  }
} 

// function storePrevious(index) {
//   const randomCard = arrayStored[index] 
//  answerDiv.innerHTML = randomCard.answer;
//  questionDiv.innerText = randomCard.question;
// }
