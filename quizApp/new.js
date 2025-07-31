let currentQuestionIndex = 0;
let saveAnswer = new Array(questions.length).fill(null)
let timer; 
timeLeft = 60; 

function handleSignup(){
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    const errorBox = document.getElementById("signupError");

    if(!email || !password){
        errorBox.textContent = "Please Enter Both Email and Passowrd";
        return;
    }
    if (!validateEmail(email)){
        errorBox.textContent = "invalid email format";
        return;
        
    }

    // all good => quiz start 
     document.getElementById("signupBox").style.display = "none"
     document.getElementById("quizBox").style.display = "block"
     renderQuestion();

}

function validateEmail(email){
    const re = /\S+@\S+\.\S+/;
    re.test(email)
}

// Quiz Functionalty ----- 

function renderQuestion(){
    clearInterval(timer);
    timeLeft = 60;
    document.getElementById("quizBox").innerHTML = "";

    const q = questions[currentQuestionIndex];
    const selected = selectedAnswers[currentQuestionIndex];

    const questionHTML = ""
}