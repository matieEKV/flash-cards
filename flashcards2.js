//  MARIA LINES START

// localstorage set value
localStorage.setItem("flashCardsArray", JSON.stringify(flashCardsArray));
// get item
var arrayStored = JSON.parse(localStorage.getItem("flashCardsArray"));
console.log(arrayStored)

///  start button funtionalitytakes you to first question

// var startButton = document.getElementById("startButton");
// if (startButton) {
//     startButton.onclick = function () {
//         window.location.href = "startLearningpage.html";
//     };
// }

//   array
import { flashCardsArray} from './flashcarArray.js'


// Get elements from page
var questionDiv = document.getElementById("cardQuestion");
var answerDiv = document.getElementById("cardAnswer");
var nextBtn = document.getElementById("btn-next1");
// var backBtn = document.getElementById("btn-back1");
var flipCard = document.querySelector("#cardContainer .card");
var homeBtn = document.getElementById("frontPage");

// Eventlistener for flipping  card
if (flipCard) {
  flipCard.addEventListener("click", function () {
      flipCard.classList.toggle("flip");
  });
}

let currentCards = flashCards.length > 0 ? [...flashCards] : [];
// guard clause/ this checks if the html elements are there- if therenare not there it stops the fuction 
function loadNextCard() {
  if (!flipCard || !questionDiv || !answerDiv) {
     return;
    
  }
  

  if (currentCards.length === 0) {//when the end of the array is reached - u finished
      youhavefinished();
      return; // Exit if no cards left
  }

  const random = Math.floor(Math.random() * currentCards.length);
  const randomCard = currentCards[random];
console.log(randomCard);

  questionDiv.innerText = randomCard.question;
console.log(questionDiv);

  let answerHTML = "";
     if (randomCard.image) {
         answerHTML += "<img src='" + randomCard.image + "' style='max-width: 90%; max-height:170px; position:absolute; top:0%;  margin:10px auto; display:block; border-radius:5px;'>";
  }
  console.log(randomCard.image);

  answerHTML += "<p>" + randomCard.answer +"</p>";
  answerDiv.innerHTML = answerHTML;
console.log(answerDiv);

  // make card not flipped when goes to next one
  flipCard.classList.remove('flip');
console.log(flipCard);

  //  answerDiv.style.color =" #87A9AA"; 

  currentCards.splice(random, 1);
  console.log(currentCards); // remove card to prevent repeat  
};



function youhavefinished(){
  if (questionDiv) {
      questionDiv.innerText = "U Finished!";
  }
  if (answerDiv) {
      answerDiv.innerHTML = "<p>YAY</p>"; // Use innerHTML if setting HTML content
  }
  
};

// Eventlisteners for end  
if (questionDiv && answerDiv && nextBtn && flipCard) { // Ensure flipCard is also checked
loadNextCard();
console.log(loadNextCard);


  // next button to use loadNextCard
  nextBtn.addEventListener("click", loadNextCard);

  // Home button functionality
  if (homeBtn) {
      homeBtn.addEventListener("click", function () {
          window.location.href = "index.html";
      });
  }
} else {
  
}

  
