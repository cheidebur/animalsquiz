var totalQuestions = 7

var num = 0

var correctScore = 0

var answer = 1

var questions = [

		{	
			num: 1,
			ask: "Which animal can breathe through its butt?",
			options: ["Shark", "Koala", "Turtle", "Octopus"],
			correct: 3,
			image: "Image"
		},

		{
			num: 2,
			ask: "Which animal can travel faster than a horse?",
			options: ["Dolphin", "Coyote", "Elephant", "Ostrich"],
			correct: 4,
		},

		{
			num: 3,
			ask: "Is this question number three?",
			options: ["Why", "yes", "it", "is"],
			correct: 2,
		},

		{
			num: 4,
			ask: "Is this question number four?",
			options: ["Why", "yes", "it", "is"],
			correct: 2,
		},

		{
			num: 5,
			ask: "Is this question number five?",
			options: ["Why", "yes", "it", "is"],
			correct: 2,
		},

		{
			num: 6,
			ask: "Is this question number six?",
			options: ["Why", "yes", "it", "is"],
			correct: 2,
		},

		{
			num: 7,
			ask: "Is this question number seven?",
			options: ["Why", "yes", "it", "is"],
			correct: 2,
		}]


	

function displayQuestion(num) {

	input = false; // reset input validation

	if ( num < 7) {
	
	$("#qRemainingBox").text((totalQuestions) - (questions[num].num) + " questions left.");
	$("#qSection").text(questions[num].ask).css('visibility', 'visible').hide().fadeIn(400);
	$("#option1").text(questions[num].options[0]).hide().fadeIn(750);
	$("#option2").text(questions[num].options[1]).hide().fadeIn(850);
	$("#option3").text(questions[num].options[2]).hide().fadeIn(950);
	$("#option4").text(questions[num].options[3]).hide().fadeIn(1050);
	$("#next").css('visibility', 'visible').hide().fadeIn(1200);
	$("#qNumbaBox").html("question " + questions[num].num);
	console.log("Your function was executed.");

	} else { //displays results and play again button


		$("#qSection").html("Giddy goat! You got " + correctScore + " of " + totalQuestions + " total questions correct!").css('visibility', 'visible').hide().fadeIn(400);
		$(".oButton").hide();
		$("#playAgain").css('visibility', 'visible').hide().fadeIn(1200);
		$("#playAgain").click(newGame);
	};
};


//\/\/\/ new game \/\/\/


function newGame() {
	
	num = 0;
	correctScore = 0;
	answerCorrect = 0;
	$("#playAgain").css('visibility', 'hidden');
	$("#qSection").css('visibility', 'visible').hide();
	$("#introDialogue").css('display', 'block');
}


$("button").click(function(){
	displayQuestion(0);
	$("#introDialogue").css('display', 'none');
});



//\/\/\/ log values from buttons and provide feedback responsiveness \/\/\/


	$("#option1").click(function() {
		answer = 1;
		$(".oButton").css('background-color', '');
		$(this).css('background-color', 'aquamarine');
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

	$("#next").click(function() {
		answerCheck();

	})


//\/\/\/ check if answer was chosen and display dialogue if not \/\/\/




function answerCheck() {
	$("#warningDialogue").css('visibility', 'hidden') // hide hold ur horses dialogue
	if (input == true)  {
	
	$(".oButton").css('background-color', '');
	answerFleek();
	
	} else { // show warning dialogue if no answer selected
		$("#warningDialogue").css('visibility', 'visible') 
		$("#warningDialogue").html("Hold your horses! Please select an option.").css('visibility', 'visible').hide().fadeIn(400);
	};

}


//\/\/\/ log correct answer and proceed to next question \/\/\/


function answerFleek() {

	if (answer == (questions[num].correct)) {
		++correctScore;
	}

	num++;
	displayQuestion(num);

};


