function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (email && password) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Signup successful! Please login.");
    window.location.href = "index.html";
  } else {
    alert("Please fill both fields.");
  }
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password.");
  }
}
