import{a as f,S as d,i as c}from"./assets/vendor-CYg6pwNI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="49273794-9f9572efe635ab4987a028735",g="https://pixabay.com/api/";async function p(o){try{return(await f.get(g,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const y=document.querySelector(".gallery");let i;function h(o){if(!o.length){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:a,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a href="${n}" class="gallery-link">
            <img src="${s}" alt="${e}" class="gallery-image" />
          </a>
          <div class="info">
            <p><b> Likes:</b> ${r}</p>
            <p><b> Views:</b> ${a}</p>
            <p><b> Comments:</b> ${l}</p>
            <p><b> Downloads:</b> ${u}</p>
          </div>
        </li>
      `).join("");y.innerHTML=t,i?i.refresh():i=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){const o=document.querySelector(".gallery");o.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".form"),t=document.querySelector(".loader");if(!o){console.error("Form not found");return}if(!t){console.error("Loader not found");return}function s(){t.classList.add("active")}function n(){t.classList.remove("active")}o.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.elements["search-text"].value.trim();if(!r){c.warning({title:"Warning",message:"Please enter a search term!"});return}L(),s();try{const a=await p(r);h(a)}catch{c.error({title:"Error",message:"Something went wrong! Please try again."})}finally{n()}})});
//# sourceMappingURL=index.js.map
