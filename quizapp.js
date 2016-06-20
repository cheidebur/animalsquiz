var totalQuestions = 7

var question1 = {
	num: 1,
	ask: "Which animal can breathe through its butt?",
	options: ["Shark", "Koala", "Turtle", "Octopus"],
	correct: 2,
	image: "Image"
}

var question2 = {
	num: 2,
	ask: "Which animal can travel faster than a horse?",
	options: ["Dolphin", "Coyote", "Elephant", "Ostrich"],
	correct: 4,
	image: "Image"
}

var question3 = {
	num: 3,
	ask: "Is this question number three?",
	options: ["Why", "yes", "it", "is"],
	correct: 2,
	image: "Image"
}

var question4 = {
	num: 3,
	ask: "Is this question number four?",
	options: ["Why", "yes", "it", "is"],
	correct: 2,
	image: "Image"
}

var question5 = {
	num: 3,
	ask: "Is this question number five?",
	options: ["Why", "yes", "it", "is"],
	correct: 2,
	image: "Image"
}

var question6 = {
	num: 3,
	ask: "Is this question number six?",
	options: ["Why", "yes", "it", "is"],
	correct: 2,
	image: "Image"
}

var question7 = {
	num: 3,
	ask: "Is this question number seven?",
	options: ["Why", "yes", "it", "is"],
	correct: 2,
	image: "Image"
}

var questionArray = [question1, question2, question3, 
	question4, question5, question6, question7];
	

function displayQuestion(questionNumber) {
	
	$("#qRemainingBox").text((totalQuestions) - (questionNumber.num));
	$("#qSection").text(questionNumber.ask).css('visibility', 'visible').hide().fadeIn(400);
	$("#option1").text(questionNumber.options[0]).hide().fadeIn(750);
	$("#option2").text(questionNumber.options[1]).hide().fadeIn(850);
	$("#option3").text(questionNumber.options[2]).hide().fadeIn(950);
	$("#option4").text(questionNumber.options[3]).hide().fadeIn(1050);
	$("#next").css('visibility', 'visible').hide().fadeIn(1200);
	$("#qNumbaBox").html(questionNumber.num);
	console.log("Your function was executed.");
};




$("button").click(function(){
	displayQuestion(question2);
});

