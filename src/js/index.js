//question array

const questions = [
  { text: "question1?" },
  { text: "question2?" },
  /*{ text: "question3" },
  { text: "question4" },
  { text: "question5" },
  { text: "question6" },
  { text: "question7" },*/
];

const title = document.querySelector("#title");

title.innerText = test;
let test = "word";
const test1 = ["jake", "Jake", "JAKE"];
//now get the title to display first id of the array
//function to display the text of the object by id
//write a function that adds 1 to the id when you press the next button
//listen for click event

//start quiz
const startButton = document.getElementById("start-btn");
const quizPanel = document.getElementById("quiz-panel");

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
