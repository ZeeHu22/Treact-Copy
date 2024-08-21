document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav__links');
  
    burgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });  