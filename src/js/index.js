const quizTitle = document.getElementById("quiz-title");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const quizPanel = document.getElementById("quiz-panel");
const answerButtonsDiv = document.getElementsByClassName("choices");
const choices = [
  {
    question: "what season were you born?",
    answers: [
      { text: "summer", correct: true },
      { text: "winter", correct: false },
    ],
  },
  {
    question: "what month were you born?",
    answers: [
      { text: "june", correct: true },
      { text: "july", correct: false },
    ],
  },
  {
    question: "what day were you born?",
    answers: [
      { text: "19", correct: true },
      { text: "20", correct: false },
    ],
  },
];

//start quiz

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);

function startQuiz() {
  console.log("started");
  startButton.classList.add("hide"); //to hide the element
  //have quiz panel hidden and remove "hide" in this function
  quizPanel.classList.remove("hide");
  firstQuestionIndex = 0;
  nextQuestion();
}
//next question

function nextQuestion() {
  const questionIndex = firstQuestionIndex++; // add 1 to the first question index
  const displayQuestion = choices[questionIndex];
  const result = displayQuestion.question;
  quizTitle.innerText = result; // displays the quesiton of the changing choice index
  displayQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("option");
    button.addEventListener("click", choiceSelect);
    answerButtonsDiv.appendChild(button);
  });
  if (questionIndex === choices.length - 1) scoreCalculator(); //once the end of the sequence is reached start the score calculator function
}

//when you select an answer
function choiceSelect() {
  console.log("selected");
}

//display question and answers

function scoreCalculator() {
  console.log("calculated");
}
