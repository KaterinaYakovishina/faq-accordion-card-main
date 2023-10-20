const answers = document.querySelectorAll(".answer-block");
const questions = document.querySelectorAll(".question");
const arrows = document.querySelectorAll("#arrowIcon");
let currentQuestionId;
let currentAnswer;
let numberOfOpenQuestions = 0;
let openAswersList = [];
let openQuestionsList = [];


answers.forEach((answer, index) => {
  answer.style.display = "none";
  answer.setAttribute('id', index);
});

questions.forEach((question, index) => {
  question.setAttribute("id", index);
  question.addEventListener("click", showAnswer);
});

function showAnswer(question) {
  currentQuestionId = question.target.id;
  currentAnswer = answers[currentQuestionId];

    
  if (currentAnswer.style.display === "none") {
     
    arrows[currentQuestionId].style.transform = "rotate(180deg)";
    questions[currentQuestionId].style.color = "var(--tx-pr-blue)";
    questions[currentQuestionId].style.fontWeight = "700";
    currentAnswer.style.display = "initial";
    openAswersList.push(currentAnswer);
    openQuestionsList.push(questions[currentQuestionId]);
    numberOfOpenQuestions += 1;
       
  } 

 if (numberOfOpenQuestions === 2) {
    openAswersList[0].removeAttribute('style');
    openQuestionsList[0].removeAttribute('style');
    openAswersList[0].style.display = "none";
    numberOfOpenQuestions -= 1;
    openAswersList.shift(openAswersList[0]);   
    openQuestionsList.shift(openQuestionsList[0]);
  }
 
  }

 