var questionChoicesImagesAnswer = [{
    // question 01
    question: "What is the brown part on the bottom of a banana called?",
    choices: ["Babutt", "Bananus", "The Worst", "Shut up, Kyle. This is no time for puns." ],
    images:  [""],
    answer: 1
    }, {
    // question 02
    question:"In what 1985 film did Val Kilmer turn a professor’s house into a giant popcorn maker?",
    choices: ["Real Genius", "The Matrix", "WarGames", "Top Gun"],
    images: [""],
    answer: 0
    }, {
    // question 03
    question: "He did Danger Zone in 86 and Footloose in 84, what song did Kenny Loggins create for a 1980 film?",
    choices: ["Love Will Follow", "What a Fool Believes", "If You Believe", "I'm All Right" ],
    images:  [""],
    answer: 3
    }, {
    // question 04
    question: "What popular 80s group got their name from the 1960s Jane Fonda film Barbarella?",
    choices: ["The Cure", "Duran Duran", "Depeche Mode", "Bon Jovi" ],
    images:  [""],
    answer: 1
    }, {
    // question 05
    question: "What father/daughter pair released a single 'Valley Girl' which was intended to mock the valley girl image?",
    choices: ["will and Willow Smith", "Miley and Billy Ray Cyrus", "Frank and Moon Unit Zappa", "Johnny and Rosanne Cash" ],
    images:  [""],
    answer: 2
    }, {
    // question 06
    question: "His first ever role was on an episode of Clarissa Explains It All in 1993, but what actor broke into the film world by not wanting his father’s life in 1999?",
    choices: ["Justin Timberlake", "James Van Der Beek", "Tom Cruise", "Macaulay Culkin" ],
    images:  [""],
    answer: 1
    }, {
    // question 07
    question: "What did Bill Murray say he would’ve named Owen Wilson in The Life Aquatic with Steve Zissou?",
    choices: ["Kingsley", "Bradon", "Chad", "Harlowe" ],
    images:  [""],
    answer: 0
    }, {
    // question 08
    question: "Born in 1920, what famous American author is best known for his 1953 novel Fahrenheit 451?",
    choices: ["Robert A. Heinlein", "Orson Welles", "Ray Bradbury", "L. Ron Hubbord" ],
    images:  [""],
    answer: 2
    }, {
    // question 09
    question: "What was the first and last name of Ray Liotta’s character in Martin Scorsese’s 1990 gangster flick Goodfellas?",
    choices: ["Henry Hill", "Paul Cicero", "Fat Andy", "Mikey Franzese" ],
    images:  [""],
    answer: 0
    }, {
    // question 10
    question: "What now retired quarterback was fined $50,000 for allegedly sexting a reporter in 2008 and was temporarily banned by the NFL from drinking alcohol after admitting he was addicted to Vicodin?",
    choices: ["Peyton Manning", "Brett Favre", "Drew Brees", "Andy Dalton" ],
    images:  [""],
    answer: 1
    }, {

    }];





$(document).ready(function() {
    console.log("DocReady");
    var triviaDiv = $("<div>");
    var timerDiv = $("<h3>").text();
    var questionDiv = $("<h3>").text();
    var buttonsDiv = $("<button>");

    function startup(){
       console.log("Startup Function")
       // create start button
    };
    startup();

    //START BUTTON TO START GAME
    function startRestartButton() {
        // clear start/restart button
        // display scared wizard of oz gif for 4 seconds
        game();
    }

    function clearHTML() {
        // clear html for next screen
    }

    function timerStart() {
        // set timer 30 seconds,
        // display timer to HTML
    }

    function addQuestion() {
        // append the current question to the HTML
    }

    function choiceButtons() {
        // append choices from current question to buttons and to html
    }

    function gifGetter() {
        // display the current question gif to the html
    }

    function wrongAnswer() {
        //inform user of the correct answer
    }

    function rightAnswer() {
        // congratulate user on answer.
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

        return;
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