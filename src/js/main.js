const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
navToggle.addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active'); 
});
