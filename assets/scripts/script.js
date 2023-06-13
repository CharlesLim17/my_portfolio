// Smooth scroll effect when menu item is clicked
const menuLinks = document.querySelectorAll('.nav a');
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const targetElement = document.querySelector(href);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});
