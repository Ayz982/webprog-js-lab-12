import"./assets/main-DdADOyK2.js";let s=1;const c=5;async function a(e,o){try{const t=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${e}&_limit=${o}`);if(!t.ok)throw new Error(`HTTP Помилка: ${t.status}`);return await t.json()}catch(t){return console.error("Помилка завантаження постів:",t),[]}}async function i(e){const o=document.getElementById("postContainer");e.forEach(t=>{const n=document.createElement("div");n.classList.add("post"),n.innerHTML=`
            <h3>${t.title}</h3>
            <p>${t.body}</p>
        `,o.appendChild(n)})}async function r(){const e=await a(s,c);i(e),s++}document.getElementById("loadMorePostsButton").addEventListener("click",r);r();
//# sourceMappingURL=pagination.js.map
