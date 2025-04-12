// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ✅ Mobile Navigation Toggle
    const toggleButton = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
  
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
      });
    }
  
    // ✅ Highlight Current Page in Nav
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split("/").pop();
  
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.style.fontWeight = 'bold';
        link.style.textDecoration = 'underline';
      }
    });
  
    // ✅ Optional: Show alert on form submit (HTML-native forms only)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const isGoogleForm = form.action.includes('google');
      if (!isGoogleForm) {
        form.addEventListener('submit', () => {
          alert('Thank you! Your message has been sent.');
        });
      }
    });
  });
  