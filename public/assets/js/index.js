const hamburgerBtn = document.querySelector('.hamburger-icon');
const closeMenuBtn = document.querySelector('.close-menu-icon');
const menu = document.querySelector('.nav__links-container');

hamburgerBtn.addEventListener('click', () => {
  menu.classList.add('show-menu');
  closeMenuBtn.classList.add('show-close-btn');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('show-menu');
  closeMenuBtn.classList.remove('show-close-btn');
});
