// h1 tag to display the titles for the starting page and high scores page
var h1Tag = document.createElement("h1");
h1Tag.textContent = "Timed Coding Quiz";
h1Tag.setAttribute("id", "title");
h1Tag.style.textAlign = "center";
document.body.appendChild(h1Tag);

// p tag to display code quiz instructions on the starting page
var p1Tag = document.createElement("p");
p1Tag.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your quiz time by 5 seconds and penalize your score by 2! Each correct answer adds 5 to your score! Good luck!";
p1Tag.style.textAlign = "center";
p1Tag.style.marginLeft = "auto";
p1Tag.style.marginRight = "auto";
p1Tag.style.width = "auto";
p1Tag.style.display = "block";
document.body.appendChild(p1Tag);

// start quiz button on the starting page
var startQuizButton = document.createElement("button");
startQuizButton.textContent = "Start Quiz";
startQuizButton.style.marginLeft = "auto";
startQuizButton.style.marginRight = "auto";
startQuizButton.style.display = "block";
startQuizButton.setAttribute("id", "startQuiz")
document.body.appendChild(startQuizButton);

// view high scores link at top left corner
var viewHighScoresPTag = document.createElement("p");
viewHighScoresPTag.textContent = "View High Scores";
viewHighScoresPTag.style.position = "fixed";
viewHighScoresPTag.style.color = "#755c96";
viewHighScoresPTag.style.top = "0";
viewHighScoresPTag.style.left = "0";
viewHighScoresPTag.marginTop = "4px";
viewHighScoresPTag.marginLeft = "4px";
viewHighScoresPTag.setAttribute("id", "viewHighScoresFromStart");
document.body.appendChild(viewHighScoresPTag)

// timer at top right corner
var timerPTag = document.createElement("p");
timerPTag.textContent = "Time: " + "0";
timerPTag.style.position = "fixed";
timerPTag.style.top = "0";
timerPTag.style.right = "0";
timerPTag.style.marginTop = "4px";
timerPTag.style.marginRight = "4px";
timerPTag.body.appendChild(timerPTag);

// container to hold the questions and answers during the quiz
var qAndAContainer = document.createElement("div");
qAndAContainer.style.textAlign = "left";
qAndAContainer.setAttribute("id", qAndAContainer);

// h2 tag to display each question and all done title
var h2Tag = document.createElement("h2");
h2Tag.textContent = "";
h2Tag.setAttribute("id", "titleQuestions")

// ul to hold li answer buttons 
var answerUlTag = document.createElement("ul");
answerUlTag.textContent = "";
answerUlTag.textAlign = "left";
answerUlTag.listStyleType = "none";
answerUlTag.style.paddingLeft = "0px";
answerUlTag.setAttribute("id", "answerUlTag");

// p tag for all done page to display final score
var p2Tag = document.createElement("p");
p2Tag.style.textAlign = "left";
p2Tag.setAttribute("id", "p2Tag");

// form for all done page
var doneForm = document.createElement("form");
doneForm.setAttribute("method", "post");
doneForm.setAttribute("id", "doneForm");
doneForm.textContnet = "Enter Initials: ";
var doneInput = document.createElement("input");
doneInput.setAttribute("id", "doneInput");
var doneButton = document.createElement("button");
doneButton.setAttribute("id", "submit");
doneButton.textContent = "SUBMIT";
doneButton.style.marginLeft = "6px";

// ul to hold high scores list

// correct or wrong text pop up

// container for the Go Back and Clear High Scores buttons on high scores page

// Go Back button 

// Clear High Scores button 

// questions and answers array

// empty arrays to hold the initials and scores for the high scores page 

// event listener for when the user clicks the view high scores link from the starting page 

// event listener for when the user clicks the start quiz button 

// function is called when the user clicks the view high scores link from the starting page 

// function is called when the user clicks the go back button from the high scores page 

// function is called when the user clicks the start quiz button

// initialize variables
    
// display countdown timer and call the createQuestionButtons function once before getting into the setInterval function to account for the 1 second delay 
    
// if statement tests to make sure the text showing the user's final score is removed if the user decides to take the quiz again
    
// if statement tests to make sure the form is removed
    
// if statement tests to make sure the correct/wrong pop up goes away
    
// interval function 
    
// event listener for when the user clicks the view high scores link during the quiz. The click will send the user to the high scores page and also end the quiz

// function creates the multiple choice answer buttons

// for loop to iterate through the object at index i in the questionsAndAnswers array. i is used as a parameter here that is sent from the userTakesQuiz function. The data-index attribute set here is used in the userTakesQuiz function to compare the answer button pressed by the user with the answer in the questionsAndAnswers array

// function renders the all done page when the quiz ends. It takes in one argument passed from the userTakesQuiz function which represents the user's score

// function is called when the user clicks the view high scores link during the quiz 
// function is called when the high scores page is to be displayed
// function is called when the user clicks the clear high scores button
