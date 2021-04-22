import { DOMSelectors } from "./Dom";
import { choices } from "./questions";

DOMSelectors.startButton.addEventListener("click", startQuiz);
DOMSelectors.nextButton.addEventListener("click", nextQuestion);
DOMSelectors.answerButtonOne.addEventListener("click", choiceSelectA);
DOMSelectors.answerButtonTwo.addEventListener("click", choiceSelectB);
DOMSelectors.doneButton.addEventListener("click", resetQuiz);

let firstQuestionIndex = 0;
let score = 0;
let timeLeft = 10000;
let clockTime = 5;
/* // delay function
function delay(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
 */
//start quiz
function startQuiz() {
  console.log("started");
  DOMSelectors.startButton.classList.add("hide"); //to hide the element
  //have quiz panel hidden and remove "hide" in this function
  DOMSelectors.answerButtonOne.classList.remove("hide");
  DOMSelectors.answerButtonTwo.classList.remove("hide");
  DOMSelectors.nextButton.classList.remove("hide");
  DOMSelectors.clockTimer.classList.remove("hide");
  firstQuestionIndex = 0;
  score = 0;
  nextQuestion();
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
  console.log("selected B");
}

//next question
function nextQuestion() {
  timeLeft = 5000;
  clockTime = 5;

  const countDownTimer = setInterval(countDown, 1000);

  firstQuestionIndex++; // add 1 to the first question index
  DOMSelectors.nextButton.classList.add("hide");
  const displayQuestion = choices[firstQuestionIndex];
  const result = displayQuestion.question;
  DOMSelectors.quizTitle.innerText = result; // displays the quesiton of the changing choice index

  const choiceA = displayQuestion.answers[0];
  const choiceB = displayQuestion.answers[1]; //iterating answer 1 and 2
  DOMSelectors.answerButtonOne.innerText = choiceA.text; //display answer 1
  DOMSelectors.answerButtonTwo.innerText = choiceB.text; //display answer 2
  DOMSelectors.answerButtonOne.classList.remove("clicked", "hide");
  DOMSelectors.answerButtonTwo.classList.remove("clicked", "hide");

  setTimeout(function () {
    if (
      DOMSelectors.answerButtonOne.classList.contains("clicked") &&
      choiceA.correct === true
    ) {
      score++;
      DOMSelectors.nextButton.classList.remove("hide");
      //timeLeft = 0;
    } else if (
      DOMSelectors.answerButtonTwo.classList.contains("clicked") &&
      choiceB.correct === true
    ) {
      score++;
      DOMSelectors.nextButton.classList.remove("hide");
      // timeLeft = 0;
    } else {
      console.log("nope");
      DOMSelectors.nextButton.classList.remove("hide");
    }
  }, timeLeft);

  //if element contains 'clicked' class, then check if it
  if (firstQuestionIndex === choices.length - 1) scoreCalculator();
  console.log(score); //once the end of the sequence is reached start the score calculator function
}
function countDown() {
  if (clockTime > 0) {
    clockTime--;
  } else {
    clearInterval(countDownTimer);
    clockTime = 0;
  }
  console.log(clockTime);
  DOMSelectors.timer.innerText = clockTime;
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
