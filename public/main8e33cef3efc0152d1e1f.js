(()=>{var e={180:()=>{const e=document.querySelector(".header__dark-mode"),t=document.querySelector("body"),a=localStorage.getItem("mode")?localStorage.getItem("mode"):null;a&&t.classList.add("dark-mode"),e.addEventListener("click",(()=>{t.classList.toggle("dark-mode"),a?localStorage.setItem("mode",""):localStorage.setItem("mode","dark")}))}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}(()=>{"use strict";const e=document.querySelector(".loader"),t=t=>{t?e.classList.remove("hidden"):e.classList.add("hidden")},n=async e=>{t(!0);const a=await fetch(e);if(!a.ok)throw t(!1),new Error("something went wrong...");const n=await a.json();return t(!1),n},o=document.querySelector(".cards"),s=e=>{o.innerHTML="",e.forEach((e=>{const t=e.name.common,a=e.population,n=e.region,s=e.capital?e.capital[0]:"no capital",r=e.flags.svg,c=document.createElement("li");c.classList.add("cards__item"),c.innerHTML=`\n            <a href="./about.html?country=/name/${t}">\n               <img src=${r} alt="algeria-flag" width="267" height="160">\n               <div class="cards__item-inner">\n                  <h3 class="cards__title">${t}</h3>\n                  <p class="population">Population: <span>${a}</span></p>\n                  <p class="region">Region: <span>${n}</span></p>\n                  <p class="capital">Capital: <span>${s}</span></p>\n               </div>\n            </a>\n      `,o.appendChild(c)}))},r=(document.querySelector(".country-info"),document.querySelector(".search"));r.search.addEventListener("input",(()=>{const e=r.search.value.toLowerCase(),t=document.querySelectorAll(".cards__item");document.querySelectorAll(".cards__title").forEach(((a,n)=>{a.textContent.toLowerCase().includes(e)?t[n].style.display="block":t[n].style.display="none"}))}));const c=document.querySelectorAll(".search__select-list li"),l=document.querySelector(".search__select span");c.forEach((e=>{e.addEventListener("click",(()=>{let t;l.textContent=e.textContent,t="All"==e.textContent?"https://restcountries.com/v3.1/all":`https://restcountries.com/v3.1/region/${e.textContent}`,n(t).then((e=>{s(e)})).catch((e=>{alert(e.message)}))}))})),a(180),n("https://restcountries.com/v3.1/all").then((e=>{s(e)})).catch((e=>{alert(e.message)}))})()})();