const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
navToggle.addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active'); 
});
import { getUsers, hideUsers, fetchUser } from './http-requests.js';
import { fetchPosts, loadMorePosts } from './pagination.js';

document.getElementById('loadMorePostsButton').addEventListener('click', loadMorePosts);

document.querySelector('#fetch-users').addEventListener('click', getUsers);
document.querySelector('#hide-users').addEventListener('click', hideUsers);
document.querySelector('#fetch-user').addEventListener('click', fetchUser);