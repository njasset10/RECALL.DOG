function populate() {
	if(quiz.isended()){
		showscores();
	}
	else{
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i=0; i< choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices [i]);
		}

	ShowProgress();	
	
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
};

function ShowProgress(){
	var currentquestionnumber = quiz.questionindex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentquestionnumber + " of " + quiz.questions.length;
}



function showscores(){
	var gameoverhtml = "<h1>Result</h1>";
	gameoverhtml += "<h2 id='score'> Your Score: " + quiz.score + "</h2>";
	var_element = document.getElementById("quiz");
	element.innerHTML = gameoverhtml;
}

// Need to create a back-end database which stores 4-option multiple choice questions/choices/answers with each unique URL (however many make sense)
// on clicking the Chrome Extension - the user should be prompted with a "Do you want to remember this content?" and a "Recall.dog is on it" confirmation message
// each user will utlimately have a list of URLs with varying ages since addition (ultimately they would have CRUD capability on this list) - the age of each URL governs which content users see on any day (managed by the Chrome "Alerts" function and a static schedule we've set by day)
// each new day, the chrome plug-in displays a notification with the questions for that day (1 per URL if relevant to that day)
// for each submitted response, users should see if they were correct or not, and see the correct answer)
// when the User has completed all questions for the day, their score is shown as a % and this  % is stored 
// users ultimately should have CRUD capability on all questions viewed (or content providers will provide)



var questions = [
	new Question("Who wrote this application?", ["Nick", "Hilary", "Parker", "Respy"],"Nick"),
	new Question("What is Nick's dog's name?", ["Buddy", "Respy", "Dog", "Girl"],"Respy"),
	new Question("How are these questions populated?", ["Statically", "Dynamically", "Magically", "I Don't Know"],"Statically"),
	];
	
var quiz = new Quiz(questions);

populate();
