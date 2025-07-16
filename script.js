const quizData = [
  {
    question: "1. Which of the following sorting algorithms has the best average-case time complexity?",
    a: "Insertion Sort",
    b: "Bubble Sort",
    c: "Merge Sort",
    d: "Selection Sort",
    correct: "c",
  },
  {
    question: "2. In computer architecture, what does the term “pipelining” refer to?",
    a: "Connecting multiple computers over a network",
    b: "Backing up data through a channel",
    c: "Executing multiple instructions in overlapping phases",
    d: "Compressing instruction sets",
    correct: "c",
  },
  {
    question: "3. What is the derivative of ln(sin(x))?",
    a: "cos(x)",
    b: "cot(x)",
    c: "1/sin(x)",
    d: "sin(x)ln(x)",
    correct: "b",
  },
  {
    question: "4. Which of the following algorithms is NOT used for cryptographic encryption?",
    a: "RSA",
    b: "AES",
    c: "Blowfish",
    d: "Dijkstra's Algorithm",
    correct: "d",
  },
  {
    question: "5.Which of the following particles is a boson?",
     a: "Electron",
     b:  "Photon",
     c: "Neutron" ,
     d: "Proton",
    correct:  "b",
},
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});