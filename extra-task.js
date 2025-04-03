import"./assets/main-gqJBNxDG.js";let s=1;const r=5;async function c(t,o){try{const n=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${t}&_limit=${o}`);if(!n.ok)throw new Error(`HTTP Помилка: ${n.status}`);return await n.json()}catch(n){return console.error("Помилка завантаження постів:",n),[]}}async function i(t){const o=document.getElementById("postContainer");t.forEach(n=>{const e=document.createElement("div");e.classList.add("post"),e.innerHTML=`
            <h2>${n.title}</h2>
            <p>${n.body}</p>
            <button class="button show-comments" data-post-id="${n.id}">Показати коментарі</button>
            <div class="comments" id="comments-${n.id}"></div>
        `,o.appendChild(e)}),document.querySelectorAll(".show-comments").forEach(n=>{n.addEventListener("click",function(){const e=this.getAttribute("data-post-id");u(e)})})}function d(){const t=document.getElementById("postContainer");t.innerHTML="",s=1,a()}async function a(){const t=await c(s,r);i(t)}async function l(){s++;const t=await c(s,r);i(t)}async function m(t){try{const o=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${t}`);if(!o.ok)throw new Error(`HTTP Помилка: ${o.status}`);return await o.json()}catch(o){return console.error(`Помилка завантаження коментарів до поста ${t}:`,o),[]}}async function u(t){const o=document.getElementById(`comments-${t}`);if(o.innerHTML!==""){o.innerHTML="";return}o.innerHTML="Завантаження коментарів...";const n=await m(t);if(n.length===0){o.innerHTML="<p>Коментарів немає.</p>";return}o.innerHTML=n.map(e=>`
        <div class="comment">
            <p><strong>${e.name}</strong>: ${e.body}</p>
            <small>Email: ${e.email}</small>
        </div>
    `).join("")}async function p(){try{const t=await fetch("https://picsum.photos/v2/list?limit=10");if(!t.ok)throw new Error(`HTTP Помилка: ${t.status}`);return await t.json()}catch(t){return console.error("Помилка завантаження фото:",t),[]}}async function h(){const t=document.getElementById("photos");t.innerHTML="Завантаження фото...";const o=await p();t.innerHTML=o.map(n=>`
        <div class="photo">
            <img src="${n.download_url}" alt="${n.author}" />
            <p>Автор: ${n.author}</p>
        </div>
    `).join("")}document.getElementById("refreshPostsButton").addEventListener("click",d);document.getElementById("loadMorePostsButton").addEventListener("click",l);document.getElementById("loadPhotosButton").addEventListener("click",h);a();
//# sourceMappingURL=extra-task.js.map
