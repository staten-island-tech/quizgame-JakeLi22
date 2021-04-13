DOMSelectors = {
  quizTitle: document.getElementById("quiz-title"),
  startButton: document.getElementById("start-btn"),
  nextButton: document.getElementById("next-btn"),
  doneButton: document.getElementById("done-btn"),
  quizHider: document.getElementById("element-hider"),
  scoreDisplay: document.getElementById("score"),
  answerButtonOne: document.getElementById("choice1"),
  answerButtonTwo: document.getElementById("choice2"),
};
const choices = [
  {
    question: "Rhino horns are made of keratin",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
    ],
  },
  {
    question: "Scorpions glow under UV light",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
    ],
  },
  {
    question: "Goats are cannibalistic",
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
    ],
  },
  {
    question: "A squid has 12 tentacles",
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
    ],
  },
  {
    question: "Jellyfish are a type of a fish",
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
    ],
  },
  {
    question: "Tigers can swim",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
    ],
  },
  {
    question: "Tortoises can swim well",
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
    ],
  },
  {
    question: "Platypuses lay eggs",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
    ],
  },
  {
    question: "Kangaroos have been known to drown their attackers",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
    ],
  },
  {
    question: "Burmese Pythos are native to Florida",
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
    ],
  },
];

//start quiz

DOMSelectors.startButton.addEventListener("click", startQuiz);
DOMSelectors.nextButton.addEventListener("click", nextQuestion);
DOMSelectors.answerButtonOne.addEventListener("click", choiceSelect);
DOMSelectors.answerButtonTwo.addEventListener("click", choiceSelect);
DOMSelectors.doneButton.addEventListener("click", resetQuiz);

function startQuiz() {
  console.log("started");
  DOMSelectors.startButton.classList.add("hide"); //to hide the element
  //have quiz panel hidden and remove "hide" in this function
  DOMSelectors.answerButtonOne.classList.remove("hide");
  DOMSelectors.answerButtonTwo.classList.remove("hide");
  DOMSelectors.nextButton.classList.remove("hide");
  firstQuestionIndex = 0;
  nextQuestion();
}
//next question

function nextQuestion() {
  const questionIndex = firstQuestionIndex++; // add 1 to the first question index
  const displayQuestion = choices[questionIndex];
  const result = displayQuestion.question;
  DOMSelectors.quizTitle.innerText = result; // displays the quesiton of the changing choice index
  if (questionIndex === choices.length - 1) scoreCalculator(); //once the end of the sequence is reached start the score calculator function
  const choiceA = choices[questionIndex].answers[0].text;
  const choiceB = choices[questionIndex].answers[1].text; //iterating answer 1 and 2
  DOMSelectors.answerButtonOne.innerText = choiceA; //display answer 1
  DOMSelectors.answerButtonTwo.innerText = choiceB; //display answer 2
}

//when you select an answer
function choiceSelect() {
  console.log("selected");
  /*if (choices.answers.correct === true) {
    i = 0;
    const quizScore = i++; //not working
  }*/
}

//display question and answers

function scoreCalculator() {
  console.log("calculated");
  DOMSelectors.quizHider.classList.add("hide");
  DOMSelectors.scoreDisplay.classList.remove("hide");
  DOMSelectors.doneButton.classList.remove("hide");
  //scoreDisplay.textContent += quizScore;
}

function resetQuiz() {
  location.reload();
}
