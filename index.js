import{a as u,S as f,i}from"./assets/vendor-CYg6pwNI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="49273794-9f9572efe635ab4987a028735",p="https://pixabay.com/api/";async function g(n){try{return(await u.get(p,{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Error fetching images:",t),[]}}const y=document.querySelector(".gallery"),d=new f(".gallery a");function h(n){y.innerHTML=n.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:s,downloads:l})=>`
        <li class="gallery-item">
          <a href="${o}">
            <img src="${t}" alt="${a}" />
          </a>
          <div class="info">
            <p>👍 ${e}</p>
            <p>👁️ ${r}</p>
            <p>💬 ${s}</p>
            <p>⬇️ ${l}</p>
          </div>
        </li>
      `).join(""),d.refresh()}const c=document.querySelector(".form"),L=c.querySelector('input[name="search-text"]'),S=document.querySelector(".gallery");c.addEventListener("submit",async n=>{n.preventDefault();const t=L.value.trim();if(!t){i.warning({title:"Warning",message:"Please enter a search query!"});return}S.innerHTML="";try{const o=await g(t);if(o.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}c.reset()});
//# sourceMappingURL=index.js.map
