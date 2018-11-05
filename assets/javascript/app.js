var questionChoicesImageAnswer = [{
    // question 01
    question: "What is the brown part on the bottom of a banana called?",
    choices: ["Babutt", "Bananus", "The Worst", "Shut up, Kyle. This is no time for puns." ],
    image:  ["assets/images/01banana.gif"],
    answer: 1
    }, {
    // question 02
    question:"In what 1985 film did Val Kilmer turn a professor’s house into a giant popcorn maker?",
    choices: ["Real Genius", "The Matrix", "WarGames", "Top Gun"],
    image: ["assets/images/02realGenius.gif"],
    answer: 0
    }, {
    // question 03
    question: "He did Danger Zone in 86 and Footloose in 84, what song did Kenny Loggins create for a 1980 film?",
    choices: ["Love Will Follow", "What a Fool Believes", "If You Believe", "I'm All Right" ],
    image:  ["assets/images/03caddyshack.gif"],
    answer: 3
    }, {
    // question 04
    question: "What popular 80s group got their name from the 1960s Jane Fonda film Barbarella?",
    choices: ["The Cure", "Duran Duran", "Depeche Mode", "Bon Jovi" ],
    image:  ["assets/images/04barbarella.gif"],
    answer: 1
    }, {
    // question 05
    question: "What father/daughter pair released a single 'Valley Girl' which was intended to mock the valley girl image?",
    choices: ["will and Willow Smith", "Miley and Billy Ray Cyrus", "Frank and Moon Unit Zappa", "Johnny and Rosanne Cash" ],
    //zappa on the shitter.
    image:  ["assets/images/05zappa.jpg"],
    answer: 2
    }, {
    // question 06
    question: "His first ever role was on an episode of Clarissa Explains It All in 1993, but what actor broke into the film world by not wanting his father’s life in 1999?",
    choices: ["Justin Timberlake", "James Van Der Beek", "Tom Cruise", "Macaulay Culkin" ],
    image:  ["assets/images/06vanderbeek.gif"],
    answer: 1
    }, {
    // question 07
    question: "What did Bill Murray say he would’ve named Owen Wilson in The Life Aquatic with Steve Zissou?",
    choices: ["Kingsley", "Bradon", "Chad", "Harlowe" ],
    image:  ["assets/images/07murray.gif"],
    answer: 0
    }, {
    // question 08
    question: "Born in 1920, what famous American author is best known for his 1953 novel Fahrenheit 451?",
    choices: ["Robert A. Heinlein", "Orson Welles", "Ray Bradbury", "L. Ron Hubbord" ],
    image:  ["assets/images/08books.gif"],
    answer: 2
    }, {
    // question 09
    question: "What was the first and last name of Ray Liotta’s character in Martin Scorsese’s 1990 gangster flick Goodfellas?",
    choices: ["Henry Hill", "Paul Cicero", "Fat Andy", "Mikey Franzese" ],
    image:  ["assets/images/09liotta.gif"],
    answer: 0
    }, {
    // question 10
    question: "What now retired quarterback was fined $50,000 for allegedly sexting a reporter in 2008 and was temporarily banned by the NFL from drinking alcohol after admitting he was addicted to Vicodin?",
    choices: ["Peyton Manning", "Brett Favre", "Drew Brees", "Andy Dalton" ],
    image:  ["assets/images/10favre.gif"],
    answer: 1
    }, {

    }];





$(document).ready(function() {
    console.log("DocReady");

    var currentQuestion = 0;
    var correct = 0;
    var notCorrect = 0;
    // variable created to index the current question correct answer.
    var theAnswerText = questionChoicesImageAnswer[currentQuestion].choices[questionChoicesImageAnswer[currentQuestion].answer];

    // ___________________________________________________________
    // On startup of html document, run this function....
    startup();
    // ___________________________________________________________

    // displays a start button, waits for a click from said start button.
    function startup(){
        console.log("Startup Function")
        // create start button
        var startUpButton = $("<button>");
        startUpButton.attr("class", "start");
        startUpButton.text("Start");
        // add button, and a break element to HTML
        $("#triviaHTML").append(startUpButton).append("<br>");
        // listen for click from the button class "startRestart"
        $(".start").click(startRestartButton);
    }

    //BUTTON TO START GAME
    function startRestartButton() {
        console.log("start button was clicked");
        // clear start/restart button
        clearHTML();
        // display scared wizard of oz gif for 4 seconds
        $("#triviaHTML").append("<img src='assets/images/scared.gif'>")
        // $("#triviaHTML").append("<br>")
        setTimeout(game, 1000);
    }

    function clearHTML() {
        console.log("clearHTML function called")
        // clear html for next function
        $("#triviaHTML").empty();
    }

    function timerStart() {
        // set timer 30 seconds,
        setTimeout(timesUp, 30000);
        
        // display timer to HTML
        $("#triviaHTML").append
    }

    function addQuestion() {
        console.log("addQuestion function called");
        // variable to hold question text
        var questionText = questionChoicesImageAnswer[currentQuestion].question;
        // create a question div
        var questionDiv = $("<h3>").text(questionText);
        
        // append the current question to the HTML
        $("#triviaHTML").append(questionDiv).append("<br");
    }

    function choiceButtons() {
        // button
        var buttonDiv = $("<button>");
        for (i = 0; i < questionChoicesImageAnswer[currentQuestion].choices.length; i++) {
            var choices = questionChoicesImageAnswer[currentQuestion].choices[i];
            var buttonStuff = $("<button>");
            buttonStuff.text(choices);
            buttonStuff.attr("class", "choice")
            buttonStuff.attr("value", i);
            // append choices from current question to buttons and to html
            $("#triviaHTML").append(buttonStuff).append("<br>");
        }
        
        
    }

    function gifGetter() {
        // display the current question gif to the html
        console.log("gifGetting function called");
        var gifLocation = questionChoicesImageAnswer[currentQuestion].image;
        var theGif = $("<img>").append("<br");
        theGif.attr("src", gifLocation);
        theGif.attr("alt", "AnswerGif");
        $("#triviaHTML").append(theGif);
    }

    function displayAnswerText() {

    }

    function displayScore() {
        //display some score correct and not notCorrect shits.
        $("#triviaHTML").append(theScore);
    }

    function wrongAnswer() {
        console.log("wrongAnswer function called");
        notCorrect++;
        clearHTML();
    
        //inform user of the correct answer
        displayAnswerText();
        // call current question gif.
        gifGetter();
        // add one to current question counter.
        currentQuestion++;
        setTimeout(game, 1000);
    }

    function rightAnswer() {
        console.log("rightAnswer function called");
        correct++;
        clearHTML();
        // congratulate user on answer.

        // call current question gif.
        gifGetter();
        // add one to current question counter.
        currentQuestion++;
        setTimeout(game, 1000);
    }

    function timesUp() {
        console.log("timesUp finction called");
        // say TIMES UP, and the correct answer

        //display stopped time

        // call current question gif.
        gifGetter();
        // add one to current question counter.
        currentQuestion++;
        setTimeout(game, 1000);
    }

    function game(){
        console.log("game function called");
      
        clearHTML();
        // call function to display timer
        if (currentQuestion === (questionChoicesImageAnswer.length + 1)) {
            console.log("game was called and questionChoicesImageAnswer.length +1 was === current question")
            // endGame();
        }
        // display Timer
        timerStart();
        // call function to display question
        addQuestion();
        // call function to display choices
        choiceButtons();
        // listen for choice or timer to reach zero
        $(".choice").click(choicesClicked);
        // call right, wrong, or times up function
    }
    
    function choicesClicked(event) {
        // CLEAR timer countdown
        // if the button value is equal or not to the current question answer....
        console.log(event);
        
        if (parseInt(event.target.value) === questionChoicesImageAnswer[currentQuestion].answer){
            console.log("Right Answer");
            rightAnswer();
        }
        else {
            wrongAnswer();
            console.log("Wrong Answer");
        }
    }

    function endGame() {
        console.log("endgame function called.");
        // display corect answers
        // display incorrect answers
        // display restart button which runs buttonPressed function.
        
        var restartButton = $("<button>");
        restartButton.attr("class", "restart");
        restartButton.text("Restart?");
        // add button, and a break element to HTML
        $("#triviaHTML").append(restartButton).append("<br>");
        $(".restart").click(startRestartButton);
    }
});