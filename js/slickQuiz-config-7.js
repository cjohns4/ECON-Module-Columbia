// Setup your quiz text and questions here

// NOTE: PAY ATTENTION TO COMMAS!

var quizJSON = {
    "info": {
        "name":    "Review",
        "main":    "<p>Please review the following questions to reinforce your understanding of the material.</p>",
        "results": "<h5>Learn More</h5><p>If you didn't do as well as you'd hoped, please go back and review the week's material. Refresh the page and return to this tab to try the review again.</p>",
        "level1":  "Excellent",
        "level2":  "Good",
        "level3":  "Okay",
        "level4":  "Needs Improvement",
        "level5":  "Poor" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Question",
            "a": [
                {"option": "option",    "correct": true},
                {"option": "option",    "correct": false},
                {"option": "option",    "correct": false},
                {"option": "option",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Yes!</span> You got it right.</p>",
            "incorrect": "<p><span>Sorry.</span> That's not the correct answer.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "Question",
            "a": [
                {"option": "option",    "correct": true},
                {"option": "option",   	"correct": false},
                {"option": "option",    "correct": false},
                {"option": "option", 	"correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> That is the correct answer.</p>",
            "incorrect": "<p><span>Sorry.</span> That's not the correct answer.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Question",
            "a": [
                {"option": "option",    "correct": true},
                {"option": "option",    "correct": true},
                {"option": "option",  	"correct": false},
                {"option": "option",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Excellent!</span> You are correct.</p>",
            "incorrect": "<p><span>Not Quite.</span> That's not the correct answer.</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, One True Answer
            "q": "Question",
            "a": [
                {"option": "option",    "correct": true},
                {"option": "option",    "correct": false},
                {"option": "option",    "correct": false},
                {"option": "option",	"correct": false} // no comma here
            ],
            "correct": "<p><span>Very good!</span> You are correct.</p>",
            "incorrect": "<p><span>Sorry.</span> That's not the correct answer.</p>" // no comma here
        },
        { // Question 5 - True or False, One True Answer
            "q": "Question",
            "a": [
                {"option": "True",		"correct": true},
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> The answer is true/false.</p>",
            "incorrect": "<p><span>Incorrect.</span> The answer is true/false.</p>" // no comma here
        } // no comma here
    ]
};
