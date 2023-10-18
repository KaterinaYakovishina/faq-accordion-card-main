const answers = document.querySelectorAll(".answer-block");
const questions = document.querySelectorAll(".question");
const arrows = document.querySelectorAll("#arrowIcon");
let currentQuestion;
let currentAnswer;


answers.forEach((answer) => {
  answer.style.display = "none";
});

questions.forEach((question, index) => {
  question.setAttribute("id", index);
  question.addEventListener("click", showAnswer);
});


function showAnswer(question) {
  currentQuestion = question.target.id;
  currentAnswer = answers[currentQuestion];

  if (currentAnswer.style.display === "none") {
    arrows[currentQuestion].style.transform = "rotate(180deg)";
    questions[currentQuestion].style.color = "var(--tx-pr-blue)";
    questions[currentQuestion].style.fontWeight = "700";
    currentAnswer.style.display = "initial";
  } else {

    arrows[currentQuestion].removeAttribute('style');
    questions[currentQuestion].removeAttribute('style');
    currentAnswer.style.display = "none";
  }


}

