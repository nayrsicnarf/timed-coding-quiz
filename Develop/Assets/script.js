// h1 tag to display the titles for the starting page and high scores page

// p tag to display code quiz instructions on the starting page

// start quiz button on the starting page

// view high scores link at top left corner

// timer at top right corner

// container to hold the questions and answers during the quiz

// h2 tag to display each question and all done title

// ul to hold li answer buttons 

// p tag for all done page to display final score

// form for all done page

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