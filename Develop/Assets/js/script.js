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
var rightOrWrongPTag = document.createElement("p");
rightOrWrongPTag.textContent = "";
rightOrWrongPTag.style.borderTop = "solid";
rightOrWrongPTag.style.color = "gray";
rightOrWrongPTag.setAttribute("id", "rightOrWrongPTag");
// container for the Go Back and Clear High Scores buttons on high scores page

// Go Back button 

// Clear High Scores button 

// questions and answers array
var questionsAndAnswers = [{
    q: "The condition in an if / else statement is enclosed within ____.",
    0: "1. quotes",
    1: "2. curly brackets",
    2: "3. parenthesis",
    3: "4. square brackets",
    answer: "3. parenthesis"
},
{
    q: "Arrays in JavaScript can be used to store ____.",
    0: "1. numbers and strings",
    1: "2. other arrays",
    2: "3. booleans",
    3: "4. all of the above",
    answer: "4. all of the above"  
},  
{
    q: "Which of the following programming languages is used for styling?",
    0: "1. JavaScript",
    1: "2. HTML",
    2: "3. CSS",
    3: "4. jQuery",
    answer: "3. CSS"   
},
{
    q: "Commonly used data types DO NOT include:",
    0: "1. strings",
    1: "2. booleans",
    2: "3. alerts",
    3: "4. numbers",
    answer: "3. alerts"
},
{
    q: "What does DOM stand for?",
    0: "1. Document Observed Module",
    1: "2. Document Object Module",
    2: "3. Document Object Model",
    3: "4. Doughnuts Oreos Milk",
    answer: "3. Document Object Model"
},
{
    q: "Math.random() returns what? ",
    0: "1. a random number between 1 and 10",
    1: "2. a random number between 0 (exclusive), and 1 (inclusive)",
    2: "3. a random number between 50 and 100",
    3: "4. a random number between 0 (inclusive), and 1 (exclusive)",
    answer: "4. a random number between 0 (inclusive), and 1 (exclusive)"
},
];

// empty arrays to hold the initials and scores for the high scores page 

// event listener for when the user clicks the view high scores link from the starting page 

// event listener for when the user clicks the start quiz button 
var clickStartQuiz = document.querySelector("#startQuiz");
clickStartQuiz.addEventListener("click", userTakeQuiz);

// function is called when the user clicks the view high scores link from the starting page 

// function is called when the user clicks the go back button from the high scores page 

// function is called when the user clicks the start quiz button
function userTakeQuiz() {
    // removes elements that are not preset during quiz
    document.body.removeChild(startQuizButton);
    document.body.removeChild(p1Tag);
    document.body.removeChild(h1Tag);

    // initialize variables
    let score = 0;
    let i = 0;
    let countdown = 60; // countdown set to 60 seconds
    let status = false; // this status variable is to keep track if the user gets the question correct so the next question will pop up

    // display countdown timer and call the questionsButtons function once before getting into the setInterval function to account for the 1 second delay 
    timerPTag.textContent = "Time: " + countdown--; questionsButtons(i);
    i++;

    // if statement tests to make sure the text showing the user's final score is removed if the user decides to take the quiz again
    if (document.querySelector("p2Tag")){
        qAndAContainer.removeChild(p2Tag);
    }

    // if statement tests to make sure the correct/wrong pop up goes away
    if (document.querySelector("rightOrWrongPTag")){
        qAndAContainer.removeChild(rightOrWrongPTag);
    }

    // if statement tests to make sure the form is removed
    if (document.querySelector("doneForm")) {
        qAndAContainer.removeChild(doneForm);
    }
    // interval function 
    var timerInterval = setInterval(function() {
        // display updated timer
        timerPTag.textContent = "Time: " + countdown;
        countdown--;

        // if statement tests to make sure the next question does not appear until the correct answer is selected
        if (status) {
            questionsButtons(i);
            status = false;
            i++;
        }

        // if statement tests when countdown is done, the quiz has ended
        if (countdown <= 0) {
            timerPTag.textContent = "Time: " + 0;
            clearInterval(timerInterval);
            donePage(score);
            i = 0; // sets i back to 0 so quiz can be taken again
            return; // return to make sure this function is no longer running
        }
    },
    1000);

    var ulAnswerList = document.querySelector("#answerUlTag");
    ulAnswerList.addEventListener("click", function (event) {
        var element = event.target;
        if (element.matches("button")) {
            var index = element.parentElement.getAttribute("data-index");
            if (element.textContent === questionsAndAnswers[index].answer) {
                correctOrWrongPTag.textContent = "Correct!";
                qAndAContainer.appendChild(correctOrWrongPTag);
                score += 5;
                status = true;
                if (i === questionsAndAnswers.length) {
                    clearInterval(timerInterval);
                    allDonePage(score);
                    i = 0; // set i back to 0 to ensure quiz can be retaken
                    return; // return to make sure this function is no longer running
                }
            } else {
                countdown -= 5;
                rightOrWrongPTag.textContent = "Wrong!";
                qAndAContainer.appendChild(rightOrWrongPTag);
                // this if statement tests to make sure the user's score is never negative and will otherwise subtract 2
                if (score <= 0) {
                    score = 0;
                } else {
                    score -= 2;
                }
                status = false;
            }
        }
    });
}

// event listener for when the user clicks the view high scores link during the quiz. The click will send the user to the high scores page and also end the quiz

// function creates the multiple choice answer buttons
function questionsButtons(i){
    // this while loops removes the previous answer buttons so it is cleared for the next set of questions
    while (answerUlTag.hasChildNodes()) {
        answerUlTag.removeChild(answerUlTag.childNodes[0]);
    }
    document.body.appendChild(qAndAContainer);
    qAndAContainer.appendChild(h2Tag);
    h2Tag.textContent = questionsAndAnswers[i].q;
    qAndAContainer.appendChild(answerUlTag);
}
// for loop to iterate through the object at index i in the questionsAndAnswers array. i is used as a parameter here that is sent from the userTakesQuiz function. The data-index attribute set here is used in the userTakesQuiz function to compare the answer button pressed by the user with the answer in the questionsAndAnswers array

// function renders the all done page when the quiz ends. It takes in one argument passed from the userTakesQuiz function which represents the user's score

// function is called when the user clicks the view high scores link during the quiz 
// function is called when the high scores page is to be displayed
// function is called when the user clicks the clear high scores button
