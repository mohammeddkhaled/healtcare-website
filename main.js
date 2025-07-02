const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.getElementById('close-menu');

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle('active');// Toggle active class to show/hide the menu
   hamburger.style.display = 'hide'; // Hide hamburger icon when menu is open
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');// Remove active class to close the menu
  hamburger.style.display = 'hide'; // show hamburger when menu closes
});

