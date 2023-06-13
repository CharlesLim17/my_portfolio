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


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNavFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}