//JavaScript file for FlashCards

//  Start Button Funtionality-Takes you to first question-hygge

/*
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

*/

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
    ]
    
    console.log (flashcards)

    // save the new card from user

    document.getElementById("submitButton").addEventListener("click", () => {
      const questionInput = document.getElementById("questionFromUser").value();
      const answerInput = document.getElementById("answerFromUser").value();

      if (!questionInput || !answerInput) {
        alert("Please enter both a question and an answer");
        return;
      }

      const newCard = {
        image: "images/defaultImageForNewCard",
        question: questionInput,
        answer: answerInput
      };

      flashCardsArray.push(newCard);
      // when we put all on local storage: localStorage.setItem("flashCardsArray", JSON.stringify(flashCardsArray));

      console.log("New flashcard saved:", newCard);
      alert("New flashcard saved successfully");

      // Clear input fields after saving
      document.getElementById("questionFromUser").value = "";
      document.getElementById("answerFromUser").value = "";
    });
