let currentQuestionIndex = 0 ; 
let selectedAnswers = new Array(questions.length).fill(null);
let timer ; 
timeLeft = 60 ; 

// signUp Functionalty 

function handleSignup(){
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    const errorBox = document.getElementById("signupErrro")

    if(!email || !password) {
        errorBox.textContent = "please enter both email and password"
    }
    if (!validateEmail(email)){
        errorBox.textContent = "invalid email format"
    }

    document.getElementById("signupBox").style.display = "none";
    document.getElementById("quizBox").style.display = "block";
    renderQuestion()
}

function validateEmail(email){
    const re = /\S+@\S+\.\S+/;
     return re.test(email)
}

// Quiz Functionalty 
function renderQuestion(){
    clearInterval(timer);
    timeLeft = 60;
    document.getElementById("quizBox").innerHTML = "";

    const q = questions[currentQuestionIndex];
    const selected = selectedAnswers[currentQuestionIndex];

    const questionHTML = `
    <h3>${q.question}</h3>
    <form id = "quizForm">
    ${q.options
        .map((options , i ) => `
        <div class ="option">
        <input type ="radio"
        name="answer" id ="opt${i}"
        value="${i}" ${
            selected == i ? "checked" : ""
        }>
        <label for="opt${i}">${option}</label>
        </div>
        `)
        .join("")
    }
    </form>
    <div>
    </div>
    `

}
