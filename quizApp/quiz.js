// const questions = [
//   {
//     question: " Which is a JavaScript FrameWork ? ",
//     options: ["Laravel", "React", "Django", "Flask"],
//     correct: 1,
//   },
//   {
//     question: " Which is used to style HTML ? ",
//     options: ["Python", "HTML", "CSS", "SQL"],
//     correct: 2,
//   },
//   {
//     question: "what does HTML stand for ? ",
//     options: [
//       "HighText Machine Language",
//       "HyperText Markup Language",
//       "HyperText Markdown Language",
//       "None of the above",
//     ],
//     correct: 1,
//   },
//   {
//     question: "CSS kis cheez ke liye use hota hai?",
//     options: [
//       "HTML structure banane ke liye",
//       "Website ko interactive banane ke liye",
//       "Website ka design aur layout banane ke liye",
//       "Database create karne ke liye",
//     ],
//     correct: 3,
//   },
//   {
//     question: "What is the correct syntax to set background color in CSS?",
//     options: [
//       "background = red;",
//       "color-background: red;",
//       "background-color: red;",
//       "bgcolor: red;",
//     ],
//     correct: 3,
//   },
// ];

// let currentQuestionIndex = 0;
// let selectedAnswers = new Array(questions.length).fill(null);
// let timer;
// let timeleft = 10 ;

// --- SIGNUP FUNCTIONALITY ---

// function handleSignup(){
//     const email = document.getElementById("email").ariaValueMax.trim();
//     const password = document.getElementById("password").ariaValueMax.trim();
//     const errorBox = document.getElementById("signupError");
    
// }


// let questions = [
//   {
//     question: " Which is a JavaScript FrameWork ? ",
//     options: ["Laravel", "React", "Django", "Flask"],
//     correct: 1,
//   },
//    {
//     question: " Which is used to style HTML ? ",
//     options: ["Python", "HTML", "CSS", "SQL"],
//     correct: 2,
//   },
//   {
//     question: "what does HTML stand for ? ",
//     options: [
//       "HighText Machine Language",
//       "HyperText Markup Language",
//       "HyperText Markdown Language",
//       "None of the above",
//     ],
//     correct: 1,
//   },
//   {
//     question: "CSS kis cheez ke liye use hota hai?",
//     options: [
//       "HTML structure banane ke liye",
//       "Website ko interactive banane ke liye",
//       "Website ka design aur layout banane ke liye",
//       "Database create karne ke liye",
//     ],
//     correct: 3,
//   },
//   {
//     question: "What is the correct syntax to set background color in CSS?",
//     options: [
//       "background = red;",
//       "color-background: red;",
//       "background-color: red;",
//       "bgcolor: red;",
//     ],
//     correct: 3,
//   },

// ];

// let currentQuestionIndex = 0;
// let selectedAnswers = new Array(questions , length).fill(null);
// let timer;
// let timeLeft = 20;

// // SignUp Functionality

// function handleSignup(){
//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("passowrd").value.trim();
//   const errorBox = document.getElementById("signupError")

//   if (!email || !password) {
//     errorBox.textContent = "Please Enter both email and password.";
//     return;
//   }
//   if(!validateEmail(email)){
//     errorBox.textContent = "Invalid email format.";
//     return;
//   }

// }

// let questions = [
//   {
//     question: " Which is a JavaScript FrameWork ? ",
//     options: ["Laravel", "React", "Django", "Flask"],
//     correct: 1,
//   },
//    {
//     question: " Which is used to style HTML ? ",
//     options: ["Python", "HTML", "CSS", "SQL"],
//     correct: 2,
//   },
//   {
//     question: "what does HTML stand for ? ",
//     options: [
//       "HighText Machine Language",
//       "HyperText Markup Language",
//       "HyperText Markdown Language",
//       "None of the above",
//     ],
//     correct: 1,
//   },
//   {
//     question: "CSS kis cheez ke liye use hota hai?",
//     options: [
//       "HTML structure banane ke liye",
//       "Website ko interactive banane ke liye",
//       "Website ka design aur layout banane ke liye",
//       "Database create karne ke liye",
//     ],
//     correct: 3,
//   },
//   {
//     question: "What is the correct syntax to set background color in CSS?",
//     options: [
//       "background = red;",
//       "color-background: red;",
//       "background-color: red;",
//       "bgcolor: red;",
//     ],
//     correct: 3,
//   },

// ];
 
// Sign Up Function 

// function hundleSignup(){
//   const email = document.getElementById("email").value.trim()
//   const password = document.getElementById("password").value.trim()
//   const errorBox = document.getElementById("signupError");
//   if(!email || !passowrd){
//     errorBox.textContent = "Please Enter Both Email and Password";
//     return
//   }
//   if (!validateEmail(email)){
//     errorBox.textContent = "Invalid email format"
//     return;
//   }

// } 

// Sign Up Function 
// let currentQuestionIndex = 0; 
// let selectedAnswers = new Array(questions.length).fill(null)
// let timer ; 
// let timeleft = 60;

// function hundleSignup(){
//   const email = document.getElementById("email").value.trim()
//   const password = document.getElementById("passowrd").value.trim()
//   const errorBox = document.getElementById("errorBox")
//   if(!email || !password){
//     errorBox.textContent = "Please Enter both email and password";
//     return;
//   }
//   if(!validateEmail(email)){
//     errorBox.textContent = "Invalid-Email ";
//     return;
//   }

//   // All good -> start quiz 

//   document.getElementById("signupBox").style.display = "none";
//   document.getElementById("quizBox").style.display = "block";
//   renderQuestion()
// }

// function renderQuestion(){
//   clearInterval(timer);
//   timeleft = 60;
//   document.getElementById("quizBox").innerHTML="";
//   const q = questions[currentQuestionIndex];
//   const selected = selectedAnswers[currentQuestionIndex];
// }

let currentQuestionIndex = 0;
let selectedAnswers = new Array(questions.length).fill(null);
let timer ;
let timeleft = 60;

function hundleSignup(){
  const email = document.getElementById("email").value.trim()
  const password = document.getElementById("passowrd").value.trim()
  const errorBox = document.getElementById("signupError");
  if(!email || !password){
    errorBox.textContent = "Please enter both email and passowrd"
    return
  }
  if (!validateEmail(email)){
    errorBox.textContent = "InvalidEmail format"
    return;
  };

  document.getElementById("signupBox").style.display = "none"
  document.getElementById("quizBox").style.display = "block"
  renderQuestion();
}

