const questions = [
  {
    question: "Which is a JavaScript framework?",
    options: ["Laravel", "React", "Django", "Flask"],
    correct: 1,
  },
  {
    question: "Which is used to style HTML?",
    options: ["Python", "HTML", "CSS", "SQL"],
    correct: 2,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HighText Machine Language",
      "HyperText Markup Language",
      "HyperText Markdown Language",
      "None of the above",
    ],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let selectedAnswers = new Array(questions.length).fill(null);
let timer;
let timeLeft = 10;

// --- SIGNUP FUNCTIONALITY ---

function handleSignup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("signupError");

  if (!email || !password) {
    errorBox.textContent = "Please enter both email and password.";
    return;
  }

  if (!validateEmail(email)) {
    errorBox.textContent = "Invalid email format.";
    return;
  }

  // All good → start quiz
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("quizBox").style.display = "block";
  renderQuestion();
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// --- QUIZ FUNCTIONALITY ---

function renderQuestion() {
  clearInterval(timer);
  timeLeft = 10;
  document.getElementById("quizBox").innerHTML = "";

  const q = questions[currentQuestionIndex];
  const selected = selectedAnswers[currentQuestionIndex];

  const questionHTML = `
    <h3>${q.question}</h3>
    <form id="quizForm">
      ${q.options
        .map(
          (option, i) => `
        <div class="option">
          <input type="radio" name="answer" id="opt${i}" value="${i}" ${
            selected == i ? "checked" : ""
          }>
          <label for="opt${i}">${option}</label>
        </div>
      `
        )
        .join("")}
    </form>
    <div class="timer">⏰ Time Left: <span id="time">${timeLeft}</span>s</div>
    <div class="btn-group">
      <button class="navBtn" onclick="prevQuestion()" ${
        currentQuestionIndex === 0 ? "disabled" : ""
      }>⬅ Previous</button>
      ${
        currentQuestionIndex < questions.length - 1
          ? `<button class="navBtn" onclick="nextQuestion()">Next ➡</button>`
          : `<button class="submitBtn" onclick="submitQuiz()">Submit</button>`
      }
    </div>
  `;

  document.getElementById("quizBox").innerHTML = questionHTML;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function saveAnswer() {
  const selected = document.querySelector("input[name='answer']:checked");
  selectedAnswers[currentQuestionIndex] = selected
    ? parseInt(selected.value)
    : null;
}

function submitQuiz() {
  saveAnswer();
  clearInterval(timer);

  let correct = 0;
  questions.forEach((q, i) => {
    if (selectedAnswers[i] === q.correct) correct++;
  });

  document.getElementById(
    "quizBox"
  ).innerHTML = `<h2>Result</h2><p>✅ Correct: ${correct}</p><p>❌ Wrong: ${
    questions.length - correct
  }</p>`;
}
