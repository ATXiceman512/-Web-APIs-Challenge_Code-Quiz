var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var questionTitle = document.getElementById('title');
var questionAnswerList = document.getElementById('content');
var timeLeft = 75;
var allQuestionsAnswered = false;

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
    // USE INDEX FOR ANSWER
    correctAnswer: 2
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      "1. <javascript>",
      "2. <scripting>",
      "3. <js>",
      "4. <script>"
    ],
    // USE INDEX FOR ANSWER
    correctAnswer: 3
  },
  {
    question: "What is the correct JavaScript syntax to change the content of the following HTML element? <p id='demo'>This is a demonstration.</p>",
    answers: [
      "1.  #demo.innerHTML = 'Hello World!';",
      "2.  document.getElementByName('p').innerHTML = 'Hello World!';",
      "3.  document.getElement('p').innerHTML = 'Hello World!';",
      "4.  document.getElementById('demo').innerHTML = 'Hello World!';"
    ],
    // USE INDEX FOR ANSWER
    correctAnswer: 3
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      "1. The <body> section",
      "2. The <head> section",
      "3. Both the <head> section and the <body> section are correct"
    ],
    // USE INDEX FOR ANSWER
    correctAnswer: 0
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
      "1.  <script href='xxx.js'>",
      "2.  <script src='xxx.js'>",
      "3.  <script name='xxx.js'>"
    ],
    // USE INDEX FOR ANSWER
    correctAnswer: 1
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

//Start the countdown when button pressed
function countdown() {

  startBtn.textContent = "";

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.innerHTML = "<b>Time: </b>" + timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft == 1) {
      timerEl.innerHTML = "<b>Time: </b>" + timeLeft + " second remaining";
      timeLeft--;
    } else if (timeLeft == 0 || questionsAnswered == questions.length) {
      timerEl.innerHTML = "<b>Time: </b>" + timeLeft + " seconds remaining";
      alert("Time Expired, you have answered " + correctAnswer + " out of " + questions.length);
      hiScores();
      clearInterval(timeInterval);
    }
    if(questionsAnswered != questions.length){
      formatQuestion(questionsAnswered);
      console.log("Running")
    } else{
      console.log("FINISHED");
      questionTitle.textContent = "You have finished the quiz! Score: " + correctAnswer + " out of " + questions.length + " in " + (75 - timeLeft) + " seconds";
      questionAnswerList.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}

// Start timer
startBtn.onclick = countdown;

// Checks the answer the user has given
function checkAnswer(clicked_id) {
  var currentQuestion = questions[questionsAnswered];

  if (timeLeft > 0) {
    // alert("You selected: " + currentQuestion.answers[clicked_id]);
    if (clicked_id == currentQuestion.correctAnswer) {
      alert("Correct!");
      correctAnswer++;
    } else {
      alert("Wrong! Deducting 10 seconds from Timer");
      timeLeft = timeLeft - 10;
    }
    if(questionsAnswered != questions.length){
      questionsAnswered++;
    }
  };
}




