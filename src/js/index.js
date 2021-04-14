import { DOMSelectors } from "./Dom";
import { choices } from "./menu";

var firstQuestionIndex = 0;
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
  DOMSelectors.answerButtonOne.classList.add("clicked");
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
