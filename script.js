// Dark/Light mode toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
// Roles array
const roles = ["Frontend Developer", "UI/UX Developer", "Editor", "AI Enthusiast", "Hackathon Lover"];
let i = 0, j = 0;
let currentText = '';
let isDeleting = false;
const roleElement = document.getElementById('roles');

function typeWriter() {
  if (i >= roles.length) i = 0;
  const fullText = roles[i];

  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
  } else {
    currentText = fullText.substring(0, currentText.length + 1);
  }

  roleElement.innerHTML = currentText;

  // Random position effect

  if (!isDeleting && currentText === fullText) {
    isDeleting = true;
    setTimeout(typeWriter, 1000); // pause at full text
  } else if (isDeleting && currentText === '') {
    isDeleting = false;
    i++;
    setTimeout(typeWriter, 200);
  } else {
    setTimeout(typeWriter, isDeleting ? 100 : 150);
  }
}

typeWriter();
