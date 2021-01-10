var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var questionTitle = document.getElementById('title');
var questionAnswerList = document.getElementById('content');

// Set up the list of questions
var questions = [
  {
    question: "Question 1",
    answers: {
      a: "Answer A",
      b: "Answer B",
      c: "Answer C"
    },
    correctAnswer: "c"
  },
  {
    question: "Question 2",
    answers: {
      a: "Answer A",
      b: "Answer B",
      c: "Answer C"
    },
    correctAnswer: "c"
  },
  {
    question: "Question 3",
    answers: {
      a: "Answer A",
      b: "Answer B",
      c: "Answer C",
      d: "Answer D"
    },
    correctAnswer: "d"
  },
  {
    question: "Question 4",
    answers: {
      a: "Answer A",
      b: "Answer B",
      c: "Answer C",
      d: "Answer D"
    },
    correctAnswer: "d"
  },
  {
    question: "Question 5",
    answers: {
      a: "Answer A",
      b: "Answer B",
      c: "Answer C",
      d: "Answer D"
    },
    correctAnswer: "d"
  }
];

// Hold variables for scoring
var correctAnswer = 0;
var questionsAnswered = 0;
var totalQuestions = questions.length;


//Start the countdown when button pressed
function countdown() {
  var timeLeft = 75;

  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.innerHTML = "<b>Time: </b>" + timeLeft + " seconds remaining"; 
      timeLeft--;
    } else if (timeLeft === 1){
      timerEl.innerHTML = "<b>Time: </b>" + timeLeft + " second remaining";
      timeLeft--;
    } else if(timeLeft === 0) {
      timerEl.innerHTML = "<b>Time: </b>" + timeLeft + " seconds remaining";
      clearInterval(timeInterval);
    }
  }, 1000);
}

// Start timer
startBtn.onclick = countdown;
