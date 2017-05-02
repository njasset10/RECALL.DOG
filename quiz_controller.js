function Quiz(questions){
	this.score = 0;
	this.questions = questions;
	this.questionindex = 0;
}

Quiz.prototype.getquestionindex = function() {
	return this.questions[this.questionindex];
}

Quiz.prototype.isended = function(){
	return this.questions.length ==== this.questionindex;
}

quiz.prototype.guess = function(answer){
	this.questionindex++;
	
	if(this.getquestionindex().correctanswer(answer)){
	this.score++;
	}
}