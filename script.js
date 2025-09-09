// Dark Mode Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});

// Contact Form Submission

const form = document.getElementById("contactForm");

const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {

  e.preventDefault(); // prevent reload

  const name = document.getElementById("name").value;

  formMsg.textContent = `Thank you, ${name}! Your message has been sent.`;

  form.reset();

});