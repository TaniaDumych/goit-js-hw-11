import{a as f,S as y,i}from"./assets/vendor-CYg6pwNI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="49273794-9f9572efe635ab4987a028735",p="https://pixabay.com/api/";async function d(o){try{return(await f.get(p,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const h=document.querySelector(".gallery");function b(o){if(!o.length){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=o.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:c,comments:u,downloads:m})=>`
        <li class="gallery-item">
          <a href="${e}" class="gallery-link">
            <img src="${n}" alt="${r}" class="gallery-image" />
          </a>
          <div class="info">
            <p><b> Likes:</b> ${a}</p>
            <p><b> Views:</b> ${c}</p>
            <p><b> Comments:</b> ${u}</p>
            <p><b> Downloads:</b> ${m}</p>
          </div>
        </li>
      `).join("");h.innerHTML=t,new y(".gallery a").refresh()}function L(){const o=document.querySelector(".gallery");o.innerHTML=""}const w=document.querySelector(".form"),l=document.querySelector(".loader");w.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){i.warning({title:"Warning",message:"Please enter a search term!"});return}L(),l.style.display="block";try{const s=await d(t);b(s)}catch{i.error({title:"Error",message:"Something went wrong! Please try again."})}finally{l.style.display="none"}});
//# sourceMappingURL=index.js.map
