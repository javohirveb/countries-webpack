(()=>{var n={180:()=>{const n=document.querySelector(".header__dark-mode"),e=document.querySelector("body"),a=localStorage.getItem("mode")?localStorage.getItem("mode"):null;a&&e.classList.add("dark-mode"),n.addEventListener("click",(()=>{e.classList.toggle("dark-mode"),a?localStorage.setItem("mode",""):localStorage.setItem("mode","dark")}))}},e={};function a(s){var o=e[s];if(void 0!==o)return o.exports;var t=e[s]={exports:{}};return n[s](t,t.exports,a),t.exports}(()=>{"use strict";a(180);const n=document.querySelector(".loader"),e=e=>{e?n.classList.remove("hidden"):n.classList.add("hidden")},s=(document.querySelector(".cards"),document.querySelector(".country-info")),o=window.location.search;(async n=>{e(!0);const a=await fetch(n);if(!a.ok)throw e(!1),new Error("something went wrong...");const s=await a.json();return e(!1),s})(`https://restcountries.com/v3.1/${new URLSearchParams(o).get("country")}`).then((n=>{(n=>{const{population:e,borders:a,subregion:o,capital:t,flags:r,name:c,region:l,tld:i,currencies:p,languages:u}=n,d=Object.values(c.nativeName)[0].official,m=Object.values(p)[0].name,g=Object.values(u);s.innerHTML=`\n   \n      <img class="country-info__img" src=${r.svg} alt="germany-flag" width="700" />\n      <div class="country-info__content">\n         <h2>${c.common}</h2>\n         <ul class="country-info__list">\n            <li class="country-info__item">\n               <p class="name">\n               Native Name:\n                  <span>${d}</span>\n               </p>\n               <p class="population">\n                  Population:\n                  <span>${e}</span>\n               </p>\n               <p class="region">\n                  Region:\n                  <span>${l}</span>\n               </p>\n               <p class="sub-region">\n                  Sub Region:\n                  <span>${o}</span>\n               </p>\n               <p class="capital">\n                  Capital:\n                  <span>${t}</span>\n               </p>\n            </li>\n            <li class="country-info__item">\n               <p class="name">\n                  Top Level Domain:\n                  <span>${i}</span>\n               </p>\n               <p class="population">\n                  Currencies:\n                  <span>${m}</span>\n               </p>\n               <p class="region">\n                  Languages:\n                  <span>${g}</span>\n               </p>\n            </li>\n         </ul>\n\n         <div class="country-info__borders">\n            <h3>Border Countries:</h3>\n            ${a?a.map((n=>`\n               <a href="../about.html?country=/alpha/${n}">${n}</a>\n               `)):"No Borders"}\n         </div>\n      </div>\n   `})(n[0])})).catch((n=>{alert(n.message)}))})()})();