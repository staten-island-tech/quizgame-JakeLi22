const quizTitle = document.getElementById("quiz-title");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const quizPanel = document.getElementById("quiz-panel");

//start quiz

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("started");
  //startButton.classList.add("hide"); //to hide the element
  //might wanna come up with you own method, but this is a way
  //show the quiz panel
  nextQuestion();
}
//next question

function nextQuestion() {
  quizTitle.innerText = "test";
}

//make a quesion array

//when you select an answer
function choiceSelect() {
  question: "when season were you born?";
  answers: [
    { text: "summer", correct: true },
    { text: "winter", correct: false },
  ];
  question: "when month were you born?";
  answers: [
    { text: "june", correct: true },
    { text: "july", correct: false },
  ];
  question: "when day were you born?";
  answers: [
    { text: "19", correct: true },
    { text: "20", correct: false },
  ];
}

//display question and answers
