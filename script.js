// 
// Part 1: Event Handling
// 
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("messageOutput").textContent =
    "🎉 You clicked the button!";
});

// 
// Part 2: Interactive Features
// 

// Counter
let count = 0;
document.getElementById("increase").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  document.getElementById("count").textContent = count;
});

// Light/Dark Mode
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ Toggle
document.querySelector(".faq-question").addEventListener("click", () => {
  const answer = document.querySelector(".faq-answer");
  answer.style.display =
    answer.style.display === "block" ? "none" : "block";
});

// 
// Part 3: Form Validation
// 
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page reload

  // Clear old errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent =
      "Name must be at least 3 characters.";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email address.";
    isValid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    isValid = false;
  }

  // Success message
  if (isValid) {
    document.getElementById("formSuccess").textContent =
      "✅ Form submitted successfully!";
    document.getElementById("signupForm").reset();
  }
});
