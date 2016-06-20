



function qAppear(qNumber, questionPoop) {
		$('#topQuestion').css({'opacity': '1'});
	  	$("#topQuestion").show();
	 	$(questionPoop).show();
	  	$("#progress").show();
	 	$('#progressLamp' + qNumber).addClass('currentQuestion');
	 	$('#q' + qNumber).show();
	  	$('#submitButton').show();
	  	$('#orangeTv').show();
	  	$('#rhBanner').delay(300).fadeIn(1000);
};



qAppear('1', '#firstQuestion');
qAppear('2', '#secondQuestion');

