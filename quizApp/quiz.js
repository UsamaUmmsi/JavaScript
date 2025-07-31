let currentQuestionIndex = 0; 
let selectedAnswers = new Array(questions.length).fill(null)
let timer;
let timeLeft = 60;

// SignUp Funationalty 

function handleSignup(){
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    const errorBox = document.getElementById("signupBox");
    if(!email || !password){
        errorBox.textContent = "Please Enter Both Email And Password"
        return;
    }
    if(!validateEmail(email)){
        errorBox.textContent = "invalid email format"
        return;
    };
    // All Good ==> Quiz Start 
    document.getElementById("signupBox").style.display = "none"
    document.getElementById("quizBox").style.display = "block"
    renderQuestion();
}

// quiz Functionalty 

function validateEmail(email){
    const re = /\S+@\S+\.\S+/;
    return re.test(email)
}

function renderQuestion(){
    clearInterval(timer)
    let timeLeft = 60;
    document.getElementById("quizBox").innerHTML = "";

    const q = questions
    [currentQuestionIndex];
    const selected = selectedAnswers
    [currentQuestionIndex];

    const question = `
    <h3>${q.question}</h3>
    <form id="quizForm">
    ${q.options
        .map((option , i )=> `
        <div class="option">
        <input type="radio"
        name="answer" id="opt${i}"
        value="${i}" ${
            selected == i ? "checked" : "" }>
            <label for="opy${i}">${option}<label>
        </div>
        `).join("") }
    
    
    </form>
    `

}






