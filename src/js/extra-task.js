let currentPage = 1; 
const postsPerPage = 5;

async function fetchPosts(page, limit) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
        if (!response.ok) {
            throw new Error(`HTTP Помилка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Помилка завантаження постів:', error);
        return [];
    }
}

async function displayPosts(posts) {
    const postContainer = document.getElementById('postContainer');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button class="button show-comments" data-post-id="${post.id}">Показати коментарі</button>
            <div class="comments" id="comments-${post.id}"></div>
        `;

        postContainer.appendChild(postElement);
    });
    document.querySelectorAll('.show-comments').forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.getAttribute('data-post-id');
            loadComments(postId);
        });
    });
}

function refreshPosts() {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = ''; 
    currentPage = 1; 
    loadInitialPosts();
}

async function loadInitialPosts() {
    const posts = await fetchPosts(currentPage, postsPerPage);
    displayPosts(posts);
}

async function loadMorePosts() {
    currentPage++;
    const posts = await fetchPosts(currentPage, postsPerPage);
    displayPosts(posts);
}

async function fetchComments(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        if (!response.ok) {
            throw new Error(`HTTP Помилка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Помилка завантаження коментарів до поста ${postId}:`, error);
        return [];
    }
}

async function loadComments(postId) {
    const commentsContainer = document.getElementById(`comments-${postId}`);
    if (commentsContainer.innerHTML !== '') {
        commentsContainer.innerHTML = '';
        return;
    }

    commentsContainer.innerHTML = 'Завантаження коментарів...';

    const comments = await fetchComments(postId);
    
    if (comments.length === 0) {
        commentsContainer.innerHTML = '<p>Коментарів немає.</p>';
        return;
    }

    commentsContainer.innerHTML = comments.map(comment => `
        <div class="comment">
            <p><strong>${comment.name}</strong>: ${comment.body}</p>
            <small>Email: ${comment.email}</small>
        </div>
    `).join('');
}

async function fetchPhotos() {
    try {
        const response = await fetch('https://picsum.photos/v2/list?limit=10'); 
        if (!response.ok) {
            throw new Error(`HTTP Помилка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Помилка завантаження фото:', error);
        return [];
    }
}

async function displayPhotos() {
    const photoContainer = document.getElementById('photos');
    photoContainer.innerHTML = 'Завантаження фото...';

    const photos = await fetchPhotos();
    photoContainer.innerHTML = photos.map(photo => `
        <div class="photo">
            <img src="${photo.download_url}" alt="${photo.author}" />
            <p>Автор: ${photo.author}</p>
        </div>
    `).join('');
}

document.getElementById('refreshPostsButton').addEventListener('click', refreshPosts);
document.getElementById('loadMorePostsButton').addEventListener('click', loadMorePosts);
document.getElementById('loadPhotosButton').addEventListener('click', displayPhotos);

loadInitialPosts();