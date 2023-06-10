// Smooth scroll effect when menu item is clicked
const menuLinks = document.querySelectorAll('.nav a');
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle "open" class on hamburger menu icon when clicked
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
});
