// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize AOS animations
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 700,
    once: true
  });
}

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
