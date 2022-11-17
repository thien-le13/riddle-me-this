var startButton = document.getElementById("start-btn");
var instructions = document.getElementById("instructions");
var questionBox = document.getElementById("question-box");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");

var shuffledQuestions;
var currentQuestion;

var questions = [
  {
    question: "1+1",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "2+2",
    answers: [
      { text: "1", correct: false },
      { text: "4", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "8+8",
    answers: [
      { text: "1", correct: false },
      { text: "16", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
];

function startQuiz() {
  instructions.classList.add("hide");
  questionBox.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  nextQuestion();
}

function nextQuestion() {
  resetAnswerButtons(answerButtonElement);
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(questions) {
  questionElement.innerText = questions.question;
  questions.answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}

function selectAnswer(event) {
  if (event.target.dataset.correct) {
    currentQuestionIndex++;
    nextQuestion();
  } else {
    alert("Incorrect! -15 seconds");
  }
}

function resetAnswerButtons(answerButtonElement) {
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

startButton.addEventListener("click", startQuiz);
