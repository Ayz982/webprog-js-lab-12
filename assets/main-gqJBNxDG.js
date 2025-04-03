(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();async function d(){try{const t=await(await fetch("https://jsonplaceholder.typicode.com/users")).json();document.getElementById("usersList").innerHTML=t.map(e=>`
            <div>
                <p><strong>${e.name}</strong> (${e.email})</p>
                <p><strong>Адреса:</strong> ${e.address.street}, ${e.address.suite}, ${e.address.city}, ${e.address.zipcode}</p>
                <p><strong>Компанія:</strong> ${e.company.name} - "${e.company.catchPhrase}"</p>
                <p><strong>Телефон:</strong> ${e.phone}</p>
                <p><strong>Сайт:</strong> <a href="http://${e.website}" target="_blank">${e.website}</a></p>
            </div>
            <hr>
        `).join("")}catch(o){console.error(o),document.getElementById("usersList").innerHTML='<p style="color:red;">Помилка завантаження користувачів!</p>'}}function l(){document.getElementById("usersList").innerHTML=""}async function p(o){try{const t=await fetch(`https://jsonplaceholder.typicode.com/users/${o}`);if(!t.ok)throw new Error(`Помилка: ${t.status}`);return await t.json()}catch(t){return console.error(t),null}}async function u(){const o=document.getElementById("userId").value,t=document.getElementById("messageBox"),e=document.getElementById("userResult");if(t.innerHTML="",e.innerHTML="",!o){t.innerHTML='<p style="color:red;">Будь ласка, введіть ID</p>';return}const n=await p(o);n?(t.innerHTML='<p style="color:green;">Користувача знайдено!</p>',e.innerHTML=`
            <p><strong>${n.name}</strong> (${n.email})</p>
            <p><strong>Адреса:</strong> ${n.address.street}, ${n.address.suite}, ${n.address.city}, ${n.address.zipcode}</p>
            <p><strong>Компанія:</strong> ${n.company.name} - "${n.company.catchPhrase}"</p>
            <p><strong>Телефон:</strong> ${n.phone}</p>
            <p><strong>Сайт:</strong> <a href="http://${n.website}" target="_blank">${n.website}</a></p>
        `):t.innerHTML='<p style="color:red;">Користувача не знайдено!</p>'}let a=1;const m=5;async function g(o,t){try{const e=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${o}&_limit=${t}`);if(!e.ok)throw new Error(`HTTP Помилка: ${e.status}`);return await e.json()}catch(e){return console.error("Помилка завантаження постів:",e),[]}}async function y(o){const t=document.getElementById("postContainer");o.forEach(e=>{const n=document.createElement("div");n.classList.add("post"),n.innerHTML=`
            <h3>${e.title}</h3>
            <p>${e.body}</p>
        `,t.appendChild(n)})}async function i(){const o=await g(a,m);y(o),a++}document.getElementById("loadMorePostsButton").addEventListener("click",i);i();const f=document.querySelector(".nav__toggle");document.querySelector(".nav__list");f.addEventListener("click",()=>{document.querySelector(".nav").classList.toggle("active")});document.getElementById("loadMorePostsButton").addEventListener("click",i);document.querySelector("#fetch-users").addEventListener("click",d);document.querySelector("#hide-users").addEventListener("click",l);document.querySelector("#fetch-user").addEventListener("click",u);
//# sourceMappingURL=main-gqJBNxDG.js.map
