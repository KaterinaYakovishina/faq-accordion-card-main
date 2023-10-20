const answers = document.querySelectorAll(".answer-block");
const questions = document.querySelectorAll(".question");
const arrows = document.querySelectorAll("#arrowIcon");
let currentQuestionId;
let currentAnswer;
let currentQuestion;
let currentArrow;
let numberOfOpenQuestions = 0;
let openAswersList = [];
let openQuestionsList = [];
let transformedArrows = [];


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
  currentQuestion = questions[currentQuestionId];
  currentArrow = arrows[currentQuestionId];

   
  if (currentAnswer.style.display === "none") {
     
    currentArrow.style.transform = "rotate(180deg)";
    currentQuestion.style.color = "var(--tx-pr-blue)";
    currentQuestion.style.fontWeight = "700";
    currentAnswer.style.display = "initial";
    openAswersList.push(currentAnswer);
    openQuestionsList.push(currentQuestion);
    transformedArrows.push(currentArrow);
    numberOfOpenQuestions += 1;
       
  } 
  
  if (numberOfOpenQuestions === 2) {
    transformedArrows[0].removeAttribute('style');
    openAswersList[0].removeAttribute('style');
    openQuestionsList[0].removeAttribute('style');
    openAswersList[0].style.display = "none";
    numberOfOpenQuestions -= 1;
    openAswersList.shift(openAswersList[0]);   
    openQuestionsList.shift(openQuestionsList[0]);
    transformedArrows.shift(transformedArrows[0]);
  }

    
  }

 
