function populate() {
	if(quiz.isended()){
		showscores();
	}
	else{
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
		//show choices
		var choices = quiz.getquestionindex().choices;
		for(var i=0; i< choices.length; i++) {
			var element = document.getelementbyid("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices [i]);
		}

	ShowProgress();	
	
	}
};

function guess(id, guess) {
	var button = document.getelementbyid(id);
	button.onclick = function() {
		quiz.guess(guess):
		populate();
	}
};

function ShowProgress(){
	var currentquestionnumber = quiz.questionindex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "question " + currentquestionnumber + "of " + quiz.questions.length;
}



function showscores(){
	var gameoverhtml = "<h1>Result</h1>";
	gameoverhtml += "<h2 id='score'> Your Score: " + quiz.score + "</h2>";
	var_element = document.getElementById("quiz");
	element.innerHTML = gameoverhtml;
}

var questions = [
	new Question("Who wrote this application?", ["Nick", "Hilary", "Parker", "Respy"],"Nick"),
	new Question("What is Nick's dog's name?", ["Buddy", "Respy", "Dog", "Girl"],"Respy"),
	new Question("How are these questions populated?", ["statically", "dynamically", "Magically", "I Don't Know"],"Statically"),
	];
	
var quiz = new Quiz(questions);

populate();