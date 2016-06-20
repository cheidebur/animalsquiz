var totalQuestions = 7

var questions = [

		{	
			num: 1,
			ask: "Which animal can breathe through its butt?",
			options: ["Shark", "Koala", "Turtle", "Octopus"],
			correct: 2,
			image: "Image"
		},

		{
			num: 2,
			ask: "Which animal can travel faster than a horse?",
			options: ["Dolphin", "Coyote", "Elephant", "Ostrich"],
			correct: 4,
			image: "Image"
		},

		{
			num: 3,
			ask: "Is this question number three?",
			options: ["Why", "yes", "it", "is"],
			correct: 2,
			image: "Image"
		},

		{
			num: 4,
			ask: "Is this question number four?",
			options: ["Why", "yes", "it", "is"],
			correct: 2,
			image: "Image"
		},

		{
			num: 5,
			ask: "Is this question number five?",
			options: ["Why", "yes", "it", "is"],
			correct: 2,
			image: "Image"
		},

		{
			num: 6,
			ask: "Is this question number six?",
			options: ["Why", "yes", "it", "is"],
			correct: 2,
			image: "Image"
		},

		{
			num: 7,
			ask: "Is this question number seven?",
			options: ["Why", "yes", "it", "is"],
			correct: 2,
			image: "Image"
		}]


	

function displayQuestion(num) {
	
	$("#qRemainingBox").text((totalQuestions) - (questions[num].num));
	$("#qSection").text(questions[num].ask).css('visibility', 'visible').hide().fadeIn(400);
	$("#option1").text(questions[num].options[0]).hide().fadeIn(750);
	$("#option2").text(questions[num].options[1]).hide().fadeIn(850);
	$("#option3").text(questions[num].options[2]).hide().fadeIn(950);
	$("#option4").text(questions[num].options[3]).hide().fadeIn(1050);
	$("#next").css('visibility', 'visible').hide().fadeIn(1200);
	$("#qNumbaBox").html(questions[num].num);
	console.log("Your function was executed.");
};






$("button").click(function(){
	displayQuestion(1);
});






//log values from buttons

$("#option1").click(function() {
	var answer = 1;
	console.log(answer);
	//if (answer == );
})

$("#option2").click(function() {
	var answer = 2;
	console.log(answer);
})

$("#option3").click(function() {
	var answer = 3;
	console.log(answer);
})

$("#option4").click(function() {
	var answer = 4;
	console.log(answer);
})




