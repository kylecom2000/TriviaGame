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
    image:  ["assets/images/05zappa.gif"],
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
    // var triviaDiv = $("<div>");
    // var timerDiv = $("<h3>").text();
    // var questionDiv = $("<h3>").text();
    // var buttonsDiv = $("<button>");

    var currentQuestion = 0;
    // variable created to index the current question correct answer.
    var theAnswer = questionChoicesImageAnswer[currentQuestion].choices[questionChoicesImageAnswer[currentQuestion].answer];

    function startup(){
        console.log("Startup Function")
        // create start button
        var startUpButton = $("<button>");
        startUpButton.attr("class", "startRestart")
        
        $("#triviaHTML").append(startUpButton);

        $(".startRestart").click(startRestartButton);
    };
    startup();

    //START BUTTON TO START GAME
    function startRestartButton() {
        console.log("start/restart button was clicked");
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

        $("#triviaHTML").append(theGif);
    }

    function gifGetter() {
        // display the current question gif to the html
        console.log("gifGetting function called");
        var gifLocation = questionChoicesImageAnswer[currentQuestion].image;
        var theGif = $("<img>");
        theGif.attr("src", gifLocation);
        $("#triviaHTML").append(theGif);
    }


    function wrongAnswer() {
        console.log("wrongAnswer function called");
        //inform user of the correct answer
        $("#triviaHTML").append(theAnswer);
        // call current question gif.
        gifGetter();
        // add one to current question counter.
        currentQuestion++;
    }

    function rightAnswer() {
        console.log("rightAnswer function called");
        // congratulate user on answer.

        // call current question gif.
        gifGetter();
        // add one to current question counter.
        currentQuestion++;
    }

    function timesUp() {
        console.log("timesUp finction called");
        // say TIMES UP, and the correct answer
        // call current question gif.
        gifGetter();
        // add one to current question counter.
        currentQuestion++;
    }

    function game(){
        console.log("game function called");
        // call function to display timer
        // call function to display question
        // call function to display choices
        // listen for choice or timer to reach zero
        // call right, wrong, or times up function
    }
    
    function endGame() {
        console.log("endgame function called.");
        // display corect answers
        // display incorrect answers
        // display restart button which runs buttonPressed function.
    }




});