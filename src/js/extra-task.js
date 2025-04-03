document.addEventListener('DOMContentLoaded', () => {
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
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            postContainer.appendChild(postElement);
        });
    }

    async function loadMorePosts() {
        const posts = await fetchPosts(currentPage, postsPerPage);
        displayPosts(posts);
        currentPage++;
    }

    const loadMoreButton = document.getElementById('loadMorePostsButton');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', loadMorePosts);
    }

    loadMorePosts();
});
