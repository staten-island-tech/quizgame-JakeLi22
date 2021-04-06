//question array

const quizQuestions = [
  {
    question: "question1?",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: 1,
  },
  {
    question: "question2?",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: 1,
  },
];

const quizTitle = document.getElementById("quiz-title");
const startButton = document.getElementById("start-btn");
const quizPanel = document.getElementById("quiz-panel");

//now get the title to display first id of the array
//function to display the text of the object by id
//write a function that adds 1 to the id when you press the next button
//listen for click event

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

function nextQuestion() {}

//make a quesion array

//when you select an answer
function choiceSelect() {}

//display question and answers
quizTitle.innerText = test;
let test = "woisd"; //doesn't work
