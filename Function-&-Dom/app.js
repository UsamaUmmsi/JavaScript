// Toggle mobile nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Optional: Smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('open'); // Close nav on link click
  });
});
// Shrink navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});

