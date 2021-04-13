const quizTitle = document.getElementById("quiz-title");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
//const quizPanel = document.getElementById("quiz-panel");
const answerButtonOne = document.getElementById("choice1");
const answerButtonTwo = document.getElementById("choice2");
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
answerButtonOne.addEventListener("click", choiceSelect);
answerButtonTwo.addEventListener("click", choiceSelect);

function startQuiz() {
  console.log("started");
  startButton.classList.add("hide"); //to hide the element
  //have quiz panel hidden and remove "hide" in this function
  answerButtonOne.classList.remove("hide");
  answerButtonTwo.classList.remove("hide");
  nextButton.classList.remove("hide");
  firstQuestionIndex = 0;
  nextQuestion();
}
//next question

function nextQuestion() {
  const questionIndex = firstQuestionIndex++; // add 1 to the first question index
  const displayQuestion = choices[questionIndex];
  const result = displayQuestion.question;
  quizTitle.innerText = result; // displays the quesiton of the changing choice index
  if (questionIndex === choices.length - 1) scoreCalculator(); //once the end of the sequence is reached start the score calculator function
  const choiceA = choices[questionIndex].answers[0].text;
  const choiceB = choices[questionIndex].answers[1].text; //iterating answer 1 and 2
  answerButtonOne.innerText = choiceA; //display answer 1
  answerButtonTwo.innerText = choiceB; //display answer 2
}

//when you select an answer
function choiceSelect() {
  console.log("selected");
}

//display question and answers

function scoreCalculator() {
  console.log("calculated");
}
