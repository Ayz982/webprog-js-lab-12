(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();async function i(){try{const e=await(await fetch("https://jsonplaceholder.typicode.com/users")).json();document.getElementById("usersList").innerHTML=e.map(t=>`
            <div>
                <p><strong>${t.name}</strong> (${t.email})</p>
                <p><strong>Адреса:</strong> ${t.address.street}, ${t.address.suite}, ${t.address.city}, ${t.address.zipcode}</p>
                <p><strong>Компанія:</strong> ${t.company.name} - "${t.company.catchPhrase}"</p>
                <p><strong>Телефон:</strong> ${t.phone}</p>
                <p><strong>Сайт:</strong> <a href="http://${t.website}" target="_blank">${t.website}</a></p>
            </div>
            <hr>
        `).join("")}catch(o){console.error(o),document.getElementById("usersList").innerHTML='<p style="color:red;">Помилка завантаження користувачів!</p>'}}function d(){document.getElementById("usersList").innerHTML=""}async function a(o){try{const e=await fetch(`https://jsonplaceholder.typicode.com/users/${o}`);if(!e.ok)throw new Error(`Помилка: ${e.status}`);return await e.json()}catch(e){return console.error(e),null}}async function l(){const o=document.getElementById("userId").value,e=document.getElementById("messageBox"),t=document.getElementById("userResult");if(e.innerHTML="",t.innerHTML="",!o){e.innerHTML='<p style="color:red;">Будь ласка, введіть ID</p>';return}const r=await a(o);r?(e.innerHTML='<p style="color:green;">Користувача знайдено!</p>',t.innerHTML=`
            <p><strong>${r.name}</strong> (${r.email})</p>
            <p><strong>Адреса:</strong> ${r.address.street}, ${r.address.suite}, ${r.address.city}, ${r.address.zipcode}</p>
            <p><strong>Компанія:</strong> ${r.company.name} - "${r.company.catchPhrase}"</p>
            <p><strong>Телефон:</strong> ${r.phone}</p>
            <p><strong>Сайт:</strong> <a href="http://${r.website}" target="_blank">${r.website}</a></p>
        `):e.innerHTML='<p style="color:red;">Користувача не знайдено!</p>'}const p=document.querySelector(".nav__toggle");document.querySelector(".nav__list");p.addEventListener("click",()=>{document.querySelector(".nav").classList.toggle("active")});document.querySelector("#fetch-users").addEventListener("click",i);document.querySelector("#hide-users").addEventListener("click",d);document.querySelector("#fetch-user").addEventListener("click",l);
//# sourceMappingURL=main-DdADOyK2.js.map
