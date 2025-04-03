const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
navToggle.addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active'); 
});
import { getUsers, hideUsers, fetchUser } from './http-requests.js';

// Прив'язка функцій до кнопок через ID
document.querySelector('#fetch-users').addEventListener('click', getUsers);
document.querySelector('#hide-users').addEventListener('click', hideUsers);
document.querySelector('#fetch-user').addEventListener('click', fetchUser);