var startQuiz = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var timerClock = document.querySelector("#time");
var questionArea = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var answers = document.querySelector("#choices");
var endScore = document.querySelector("#end-screen");
var submitName = document.querySelector("#submit");
var initials = document.querySelector("#initals")
var feedbackPage = document.querySelector("#feedback");

let time = 75;
let currentQuestionIndex = 0;
// Start Button //
startQuiz.addEventListener("click", function () {
  startScreen.setAttribute("class", "hide");
  timerClock.textContent = time;
  // Set interval to update the timer
 timer = setInterval(() => {
    time -= 1;
    timerClock.textContent = time;
  }, 1000);
  // Display the first question
  displayQuestion();
});
// Answer the questions //
answers.addEventListener("click", function (event) {
  let userAnswerIndex = event.target.getAttribute("data-index");
  let correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
  // Check if the answer is correct
  if (userAnswerIndex === correctAnswerIndex.toString()) {
  } else {
    // Incorrect answer logic
    time -= 15;
    timerClock.textContent = time;
  }
  // Move to the next question
  currentQuestionIndex++;
  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    // Display the next question
    displayQuestion();
  } else{
    questionTitle.setAttribute("class","hide");
    answers.setAttribute("class","hide");
    endScore.removeAttribute("class", "hide");
    document.getElementById("final-score").innerHTML = ":" + time;
    clearInterval(timer);
    // All questions have been answered, display a message or perform other actions
  }

});
submitName.addEventListener("click", function(e){
  initials1 = document.getElementById("initials");
  initials2 = [initials1.value];
  var scoreData = JSON.parse(localStorage.getItem("Storage")) || [];
  scoreData.push({storedI: initials2 , storedT: time});
  localStorage.setItem("Storage", JSON.stringify(scoreData));
  window.location.href = "highscores.html";
  
})

function displayQuestion() {
  // Display the current question and choices
  questionArea.removeAttribute("class", "hide");
  questionTitle.textContent = questions[currentQuestionIndex].title;
  renderChoices(questions[currentQuestionIndex].choices);
}
function renderChoices(choices) {
  // Render choices as buttons
  answers.innerHTML = "";
  for (let i = 0; i < choices.length; i++) {
    let button = document.createElement("button");
    button.setAttribute("data-index", i);
    button.textContent = choices[i];
    answers.append(button);
  }
}