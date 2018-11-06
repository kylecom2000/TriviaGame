var questionChoicesImageAnswer = [
    {
    // question 00
    question: "What is the brown part on the bottom of a banana called?",
    choices: ["Babutt", "Bananus", "The Worst", "Shut up, Kyle. This is no time for puns." ],
    image:  ["assets/images/01banana.gif"],
    answer: 1
    }, 
    {
    // question 01
    question:"In what 1985 film did Val Kilmer turn a professor’s house into a giant popcorn maker?",
    choices: ["Real Genius", "The Matrix", "WarGames", "Top Gun"],
    image: ["assets/images/02realGenius.gif"],
    answer: 0
    }, {
    // question 02
    question: "He did Danger Zone in 86 and Footloose in 84, what song did Kenny Loggins create for a 1980 film?",
    choices: ["Love Will Follow", "What a Fool Believes", "If You Believe", "I'm All Right" ],
    image:  ["assets/images/03caddyshack.gif"],
    answer: 3
    }, {
    // question 03
    question: "What popular 80s group got their name from the 1960s Jane Fonda film Barbarella?",
    choices: ["The Cure", "Duran Duran", "Depeche Mode", "Bon Jovi" ],
    image:  ["assets/images/04barbarella.gif"],
    answer: 1
    }, {
    // question 04
    question: "What father/daughter pair released a single 'Valley Girl' which was intended to mock the valley girl image?",
    choices: ["will and Willow Smith", "Miley and Billy Ray Cyrus", "Frank and Moon Unit Zappa", "Johnny and Rosanne Cash" ],
    //zappa on the shitter.
    image:  ["assets/images/05zappa.jpg"],
    answer: 2
    }, {
    // question 05
    question: "His first ever role was on an episode of Clarissa Explains It All in 1993, but what actor broke into the film world by not wanting his father’s life in 1999?",
    choices: ["Justin Timberlake", "James Van Der Beek", "Tom Cruise", "Macaulay Culkin" ],
    image:  ["assets/images/06vanderbeek.gif"],
    answer: 1
    }, {
    // question 06
    question: "What did Bill Murray say he would’ve named Owen Wilson in The Life Aquatic with Steve Zissou?",
    choices: ["Kingsley", "Bradon", "Chad", "Harlowe" ],
    image:  ["assets/images/07murray.gif"],
    answer: 0
    }, {
    // question 07
    question: "Born in 1920, what famous American author is best known for his 1953 novel Fahrenheit 451?",
    choices: ["Robert A. Heinlein", "Orson Welles", "Ray Bradbury", "L. Ron Hubbord" ],
    image:  ["assets/images/08books.gif"],
    answer: 2
    }, {
    // question 08
    question: "What was the first and last name of Ray Liotta’s character in Martin Scorsese’s 1990 gangster flick Goodfellas?",
    choices: ["Henry Hill", "Paul Cicero", "Fat Andy", "Mikey Franzese" ],
    image:  ["assets/images/09liotta.gif"],
    answer: 0
    }, 
    {
    // question 09
    question: "What now retired quarterback was fined $50,000 for allegedly sexting a reporter in 2008 and was temporarily banned by the NFL from drinking alcohol after admitting he was addicted to Vicodin?",
    choices: ["Peyton Manning", "Brett Favre", "Drew Brees", "Andy Dalton" ],
    image:  ["assets/images/10favre.gif"],
    answer: 1
    }
];





$(document).ready(function() {
    console.log("DocReady");

    var currentQuestion = 0;
    var correct = 0;
    var notCorrect = 0;
    var countdown;
    var countdownNumber;
    
    function countdown_init() {
        countdownNumber = 30;
        countdownTrigger();
    }
    
    function countdownTrigger() {
        // console.log("countdownTrigger function called");
        if(countdownNumber > 0) {
            countdownNumber--;
            if (countdownNumber === 0){
                timesUp();
            }
            $("#timerHTML").text("Timer: " + countdownNumber);
            if(countdownNumber > 0) {
                countdown = setTimeout(countdownTrigger , 1000);
            }
        }
    }
    
    function countdownClear() {
        clearTimeout(countdown);
    }


    // ___________________________________________________________
    // On startup of html document, run this function....
    startup();
    // ___________________________________________________________

    // displays a start button, waits for a click from said start button.
    function startup(){
        // debugger;
        console.log("Startup Function");
        // create start button
        $("#triviaHTML").append("<h2>10 Questions, Can you Guess them all?</h2><br>");
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
        // set question index and scores to zero.
        currentQuestion = 0;
        correct = 0;
        notCorrect = 0;
        // display scared wizard of oz gif for 4 seconds
        $("#triviaHTML").append("<img src='assets/images/scared.gif'>");
        // $("#triviaHTML").append("<br>")
        setTimeout(game, 5000);
    }

    function clearHTML() {
        console.log("clearHTML function called");
        // clear html for next function
        $("#timerHTML").empty();
        $("#triviaHTML").empty();
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
        console.log(currentQuestion);
        console.log("choiceButtons function called");
        for (i = 0; i < questionChoicesImageAnswer[currentQuestion].choices.length; i++) {
            var choices = questionChoicesImageAnswer[currentQuestion].choices[i];
            var buttonStuff = $("<button>");
            buttonStuff.text(choices);
            buttonStuff.attr("class", "choice");
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
        console.log("displayAnswerText function called")
        var answerWasText = questionChoicesImageAnswer[currentQuestion].choices[questionChoicesImageAnswer[currentQuestion].answer];

        $("#triviaHTML").append("<h3>The answer was: " + answerWasText + "</h3>").append("<br>");
    }

    function displayScore() {
        // create a score table.
        var Answers = $("<h4>Correct Answers: " + correct + "</h4><br><h4>Incorrect Answers: " + notCorrect + "</h4><br>")
        //display some score correct and not notCorrect shits.
        $("#triviaHTML").append(Answers);
    }

    function wrongAnswer() {
        console.log("wrongAnswer function called");
        notCorrect++;
        clearHTML();
        // TIMER STOP
        countdownClear();
        // DISPLAY TIMER

        // display score
        displayScore();
        // tell thewm how incorrect they are.
        $("#triviaHTML").append("<h3>That's not correct!</h3><br>");
        //inform user of the correct answer
        displayAnswerText();
        // call current question gif.
        gifGetter();
        // add one to current question counter.
       
        currentQuestion++;
        setTimeout(game, 5000);
    }

    function rightAnswer() {
        console.log("rightAnswer function called");
        correct++;
        clearHTML();
        // Timer stop
        countdownClear();
        // timer display

        // display score
        displayScore();
        // congratulate user on answer.
        $("#triviaHTML").append("<h3>That's correct!</h3><br>");
        // call current question gif.
        gifGetter();
        // add one to current question counter.
        
        currentQuestion++;

        setTimeout(game, 5000);
    }

    function timesUp() {
        console.log("timesUp finction called");
        //display stopped time
        clearHTML();
        countdownClear();
        // say TIMES UP, 
        displayScore();
        // message
        $("#triviaHTML").append("<h3>You ran out of time!</h3><br>");
        // and the correct answer
        displayAnswerText();
        // call current question gif.
        gifGetter();
        // add one to current question counter.
        currentQuestion++;
        // keep screen up for 4? seconds.
        setTimeout(game, 5000);
    }

    function game(){
        console.log("game function called______________");
        if (currentQuestion < questionChoicesImageAnswer.length) {
            console.log("game function IF statement called.");
            clearHTML();
            addQuestion();
            choiceButtons();
            countdown_init();
            $(".choice").click(choicesClicked);
        } 
        else {
            console.log("game function ELSE statement called.");
            endGame();
        }
        
        
        // call function to display timer

        // display Timer
        // timerStart();
        // call function to display question
        

        // call function to display choices
        

        // listen for choice or timer to reach zero
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
        clearHTML();

        displayScore();
        // display restart button which runs buttonPressed function.
        var restartButton = $("<button>");
        restartButton.attr("class", "restart");
        restartButton.text("Restart?");
        // add button, and a break element to HTML
        $("#triviaHTML").append(restartButton).append("<br>");
        $(".restart").click(startRestartButton);
    }
});