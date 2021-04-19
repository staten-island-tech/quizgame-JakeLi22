import { DOMSelectors } from "./Dom";
import { choices } from "./menu";

DOMSelectors.startButton.addEventListener("click", startQuiz);
DOMSelectors.nextButton.addEventListener("click", nextQuestion);
DOMSelectors.answerButtonOne.addEventListener("click", choiceSelectA);
DOMSelectors.answerButtonTwo.addEventListener("click", choiceSelectB);
DOMSelectors.doneButton.addEventListener("click", resetQuiz);

let firstQuestionIndex = 0;
let score = 0;

//start quiz
function startQuiz() {
  console.log("started");
  DOMSelectors.startButton.classList.add("hide"); //to hide the element
  //have quiz panel hidden and remove "hide" in this function
  DOMSelectors.answerButtonOne.classList.remove("hide");
  DOMSelectors.answerButtonTwo.classList.remove("hide");
  DOMSelectors.nextButton.classList.remove("hide");
  firstQuestionIndex = 0;
  score = 0;
  nextQuestion();
}
//next question

function nextQuestion() {
  firstQuestionIndex++; // add 1 to the first question index
  const displayQuestion = choices[firstQuestionIndex];
  const result = displayQuestion.question;
  DOMSelectors.quizTitle.innerText = result; // displays the quesiton of the changing choice index

  const choiceA = displayQuestion.answers[0].text;
  const choiceB = displayQuestion.answers[1].text; //iterating answer 1 and 2
  DOMSelectors.answerButtonOne.innerText = choiceA; //display answer 1
  DOMSelectors.answerButtonTwo.innerText = choiceB; //display answer 2
  DOMSelectors.answerButtonOne.classList.remove("clicked", "hide");
  DOMSelectors.answerButtonTwo.classList.remove("clicked", "hide");

  if (DOMSelectors.answerButtonOne.classList.contains("clicked")) {
    console.log("hi");
  } else if (DOMSelectors.answerButtonTwo.classList.contains("clicked")) {
    console.log("hello");
  }
  //if element contains 'clicked' class, then check if it
  if (firstQuestionIndex === choices.length - 1) scoreCalculator();
  console.log(score); //once the end of the sequence is reached start the score calculator function
}

//when you select an answer
function choiceSelectA() {
  DOMSelectors.answerButtonOne.classList.add("clicked");
  DOMSelectors.answerButtonTwo.classList.add("hide");
  console.log("selected A");
}
function choiceSelectB() {
  DOMSelectors.answerButtonTwo.classList.add("clicked");
  DOMSelectors.answerButtonOne.classList.add("hide");
}
//display question and answers
function scoreCalculator() {
  console.log("calculated");
  DOMSelectors.quizHider.classList.add("hide");
  DOMSelectors.scoreDisplay.classList.remove("hide");
  DOMSelectors.doneButton.classList.remove("hide");
  DOMSelectors.scoreDisplay.textContent += score;
}

function resetQuiz() {
  location.reload();
}
