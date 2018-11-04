// an array of questions
// var questions = [
//     {q: "What is the bottom brown part of a banana called?"
//         a: "Babutt"
//         a: "Bananus"
//         a: "Devil's Seed"
//         a: "Shut up, Kyle."},

// ]
var questionChoicesImagesAnswer = [{
    question: "What is the brown part on the bottom of a banana called?",
    choices: ["Babutt", "Bananus", "The Worst", "Shut up, Kyle. This is no time for puns." ],
    images:  [""],
    answer: 1
    }, {
    question:"Where do you get your style?",
    choices: ["The Future", "The Matrix", "Hipster, before it was cool", "Right Hand"],
    images: [""],
    answer: 0
    }];





$(document).ready(function() {
    console.log("DocReady");
    var triviaDiv = $("<div>");
    var timerDiv = $("<h3>").text();
    var questionDiv = $("<h3>").text();
    var buttonsDiv = $("<button>");

    function startup(){
       console.log("Startup Function")
    };
    startup();

    //START BUTTON TO START GAME
    function buttonPressed() {
        game();
    }

    function game(){
        // for loop of questionChoicesImagesAnswers
            // Timer per question. If timer runs out, next question.
            // clear trivia div
            // add question div with question
            // add choices div with choices, values
            // listen for values/timeout
                // wrong answer screen w/gif
                // timeout screen w/gif
                // correct answer screen w/gif
            // 3 seconds later, on to next question.

        // When for loop is over, run endgame function?
    }
    
    function endGame() {
        // display corect answers
        // display incorrect answers
        // display restart button which runs buttonPressed function.
    }




});


// If button value is === to answer, then add to wins.


// Answer Div/Next Page
    // Time remaining (Same or zero)
    // CORRECT!/WRONG!/OUT OF TIME!
    // The correct answer was: questions.answer 
        // (If answer was correct of out of time)
    // GIF PAGE

// All done!
    // Correct answers
    // Incorrect Answers
    // Unaswered
    // <button>Start Over?</buttom>