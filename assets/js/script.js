var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

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

startBtn.onclick = countdown;
