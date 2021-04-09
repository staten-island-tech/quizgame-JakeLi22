const quizTitle = document.getElementById("quiz-title");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const quizPanel = document.getElementById("quiz-panel");
const choices = [
  {
    question: "when season were you born?",
    answers: [
      { text: "summer", correct: true },
      { text: "winter", correct: false },
    ],
  },
  {
    question: "when month were you born?",
    answers: [
      { text: "june", correct: true },
      { text: "july", correct: false },
    ],
  },
  {
    question: "when day were you born?",
    answers: [
      { text: "19", correct: true },
      { text: "20", correct: false },
    ],
  },
];

const test = ["one", "two", "three", "four"];
quizTitle.innerText = test[0];

//start quiz

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
function startQuiz() {
  console.log("started");
  //startButton.classList.add("hide"); //to hide the element
  //might wanna come up with you own method, but this is a way
  //show the quiz panel
  nextQuestion();
}
//next question

function nextQuestion() {
  //quizTitle.innerText = choices.question;
  const searchTerm = quizTitle.innerText; //first term of the array
  var index = test.indexOf(searchTerm) + 1; //adds one to the array
  if (index === test.length) index = 0; //instead of index = 0; set it to the score
  //once the end of the array is reached go back to teh beginining
  const result = test[index]; //result is the change in id
  quizTitle.innerText = result; //displays the result
}
//use id ++ to increment by 1

//make a quesion array

//when you select an answer
function choiceSelect() {}

//display question and answers

//question array {
