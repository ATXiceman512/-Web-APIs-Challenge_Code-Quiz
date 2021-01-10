var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var questionTitle = document.getElementById('title');
var questionAnswerList = document.getElementById('content');
var questionSubmitted = false;


// Set up the list of questions
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      "1. strings",
      "2. booleans",
      "3. alerts",
      "4. numbers"
    ],
    correctAnswer: "c"
  },
  {
    question: "Question 2",
    answers: [
      "Answer A",
      "Answer B",
      "Answer C"
    ],
    correctAnswer: "c"
  },
  {
    question: "Question 3",
    answers: [
      "Answer A",
      "Answer B",
      "Answer C",
      "Answer D"
    ],
    correctAnswer: "d"
  },
  {
    question: "Question 4",
    answers: [
      "Answer A",
      "Answer B",
      "Answer C",
      "Answer D"
    ],
    correctAnswer: "d"
  },
  {
    question: "Question 5",
    answers: [
      "Answer A",
      "Answer B",
      "Answer C",
      "Answer D"
    ],
    correctAnswer: "d"
  }
];


var formatQuestion = function (currentQuestion) {
  questionTitle.textContent = questions[currentQuestion].question;
  questionAnswerList.textContent = "";

  for (i = 0; i < questions[currentQuestion].answers.length; i++) {
    var answers = questions[currentQuestion].answers[i];
    var button = document.createElement("button");
    button.setAttribute("id", i);
    button.setAttribute("onclick", "checkAnswer(this.id)");
    button.textContent = answers;
    questionAnswerList.appendChild(button);
  }
}


// Hold variables for scoring
var correctAnswer = 0;
var questionsAnswered = 0;
var totalQuestions = questions.length;


//Start the countdown when button pressed
function countdown() {
  var timeLeft = 75;
  
  startBtn.textContent = "";

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.innerHTML = "<b>Time: </b>" + timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.innerHTML = "<b>Time: </b>" + timeLeft + " second remaining";
      timeLeft--;
    } else if (timeLeft === 0) {
      timerEl.innerHTML = "<b>Time: </b>" + timeLeft + " seconds remaining";
      clearInterval(timeInterval);
    }
    formatQuestion(questionsAnswered);
  }, 1000);
}

// Start timer
startBtn.onclick = countdown;



function checkAnswer(clicked_id,)
{
    alert(clicked_id);
    questionsAnswered++;
    formatQuestion(questionsAnswered)
}




