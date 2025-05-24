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

let flashcards [
    {
        image: "images\hygge.png"
        Q: "What is the defining characteristic of Danish culture?",
        A: "Hygge."
    },
    {
        image: "images\Lego.png"
        Q: "Which world-famous toy is made in Denmark?",
        A: "Lego"
    },
    {   image: "images\BIG.png"
        Q: "What is the name of the world famous contemporary architect from Denmark?",
        A: "BIG (Bjarke Ingels)"
    }
    {   image: "images\dannebrog.png"
        Q: "Danes are very proud of their flag. Do you know how they call it?",
        A: "Dannebrog"
    }
    {   image: "images\MadsMikkelsen.png"
        Q: "The famous actor from Denmark, who was nominated for Oscar is..." ,
        A: "Mads Mikkelsen"
    }
    {   image: "images\Pandora.png"
        Q: "The world-known jewelry brand originated in Copenhagen is..." ,
        A: "Pandora"
    }
    {   image:  "images\B&O.png"
        Q: "Danish high-end audio and multimedia company known for its quality audio products is called..." ,
        A: "Bang&Olufsen (B&O)"
    }
    {   image: "images\ArneJakobsen.png"
        Q: "The name of the Danish architect and furniture designer, known for simple and well-designed chairs is..." ,
        A: "Arne Jakobsen"
    }
    {   image: "images\HCAndersen.png"
        Q: "Name of the Danish writer of plays,  best remembered for his fairy tales is.." ,
        A: "Hans Christian Andersen"
    }
    {   image: "images\Oresund.png"
        Q: "Name of the second longest bridge in Europe, connecting Denmark and Sweden is..." ,
        A: "Öresund Bridge"
    }
    ]
    