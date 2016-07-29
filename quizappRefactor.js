var Question = function(options, correctAnswer, question) {
    this.options = options,
        this.correctAnswer = correctAnswer,
        this.question = question
}

var Answer = function(answer) {
    this.correct = answer
}

var totalQuestions = 7
var correctScore = 0
//answer is the input value from the bottoms at the bottom of the script
var answer = 1


var answer1 = new Answer(3)
var question1 = new Question(["Shark", "Koala", "Turtle", "Octopus"], answer1.correct, "Which animal can breathe through its butt?")

var answer2 = new Answer(4)
var question2 = new Question(["Dolphin", "Coyote", "Elephant", "Ostrich"], answer2.correct, "Which animal can travel faster than a horse?")

var answer3 = new Answer(2)
var question3 = new Question(["Snake", "Sheep", "Tiger", "Zebra"], answer3.correct, "Which animal is commonly used to produce antivenom?")

var answer4 = new Answer(1)
var question4 = new Question(["Mouse", "Bird", "Cat", "Lizard"], answer4.correct, "Which animal is incapable of vomiting?")

var answer5 = new Answer(3)
var question5 = new Question(["Grasshopper", "Fox", "Raindeer", "Polar Bear"], answer5.correct, "Which animal's eye color changes seasonally?")

var answer6 = new Answer(4)
var question6 = new Question(["Gorilla", "Bonobo", "Lion", "Sea Lion"], answer6.correct, "Which animal (other than a human) has been proven to keep a beat?")

var answer7 = new Answer(2)
var question7 = new Question(["Mouse", "Fly", "Frog", "Alpaca"], answer7.correct, "Which animal can taste with its feet?")

//the Quiz objects takes an array of objects which is the following
var questions = [question1, question2, question3, question4, question5, question6, question7];



var Quiz = function(questions) {
    this.n = questions.length;
    this.currentIdx = 0;
   
};


Quiz.prototype.currentquestion = function() {
    this.questions[this.currentIdx]
}

Quiz.prototype.nextQuestion = function() {
    this.currentIdx += 1;
}

var quiz = new Quiz(questions);

Quiz.prototype.scoreCalc = function() {
    	if (answer == (questions[this.currentIdx].correctAnswer)) {
        ++correctScore;
        console.log("hi");
        this.nextQuestion();
        this.displayQuestion();
    	};
    };  


$("button").click(function() {
    quiz.displayQuestion();
    $("#introDialogue").css('display', 'none');
});





Quiz.prototype.resetGame = function() {
    $("#qRemainingBox").fadeOut();
    $("#qNumbaBox").fadeOut();
    this.currentIdx = 0;
    $(".oButton").hide();
    $("#qSection").html("Giddy goat! You got " + correctScore + " of " + totalQuestions + " total questions correct!").css('visibility', 'visible').hide().fadeIn(400);
    $("#playAgain").css('display', 'block').hide().fadeIn(1200);
    $("#playAgain").click(function() {
        $("#playAgain").css('display', 'none');
        this.displayQuestion();
    });
}


Quiz.prototype.newGame = function() {
    correctScore = 0;
    $("#playAgain").click(this.newGame())
    $("#playAgain").css('visibility', 'hidden');
    $("#qSection").css('visibility', 'visible').hide();
    $("#introDialogue").css('display', 'block');
}

//answerAdd adds the correct answer to the score, but only
//if the input was validated by answerCheck

Quiz.prototype.answerCheck = function() {
    $("#warningDialogue").css('visibility', 'hidden') // hide hold ur horses dialogue
    if (input == true) {
        $(".oButton").css('background-color', '');
        console.log("hi");
        this.scoreCalc();
    } else { // show warning dialogue if no answer selected
        $("#warningDialogue").css('visibility', 'visible')
        $("#warningDialogue").html("Hold your horses! Please select an option.").css('visibility', 'visible').hide().fadeIn(400);
    };
}

Quiz.prototype.displayQuestion = function() {
        // reset input validation
        input = false;
        $("#qRemainingBox").fadeIn();
    	$("#qNumbaBox").fadeIn();
        if (this.currentIdx < this.n) {
            $("#qRemainingBox").text((this.n) - (this.currentIdx) + " questions left.");
            $("#qSection").text(questions[this.currentIdx].question).css('visibility', 'visible').hide().fadeIn(400);
            $("#option1").text(questions[this.currentIdx].options[0]).hide().fadeIn(750);
            $("#option2").text(questions[this.currentIdx].options[1]).hide().fadeIn(850);
            $("#option3").text(questions[this.currentIdx].options[2]).hide().fadeIn(950);
            $("#option4").text(questions[this.currentIdx].options[3]).hide().fadeIn(1050);
            $("#next").css('visibility', 'visible').hide().fadeIn(1200);
            $("#qNumbaBox").html("question " + (this.currentIdx + 1));
        } else { //displays results and play again button
            this.resetGame();
        };
    }


//Since I didn't use radio buttons, this code assigns a value to each of
//the buttons

$("#option1").click(function(){
    answer = 1;
    //this resets the background color of all buttons in case
    //a user changes their choice and chooses a different button
    $(".oButton").css('background-color', '');
    //changes the selected element's background color
    $(this).css('background-color', 'aquamarine');
    //validates input
    input = true;
})

$("#option2").click(function() {
    answer = 2;
    $(".oButton").css('background-color', '');
    $(this).css('background-color', 'aquamarine');
    input = true;
})

$("#option3").click(function() {
    answer = 3;
    $(".oButton").css('background-color', '');
    $(this).css('background-color', 'aquamarine');
    input = true;
})

$("#option4").click(function() {
    answer = 4;
    $(".oButton").css('background-color', '');
    $(this).css('background-color', 'aquamarine');
    input = true;


})

//answerCheck is the input validation function
$("#next").click(function() {
    quiz.answerCheck();
})