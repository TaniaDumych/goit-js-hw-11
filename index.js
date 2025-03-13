import{a as d,i as c,S as m}from"./assets/vendor-CYg6pwNI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="49273794-9f9572efe635ab4987a028735",g="https://pixabay.com/api/";async function y(o){try{return(await d.get(g,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const l=document.querySelector(".gallery");let i;function h(o){if(!o.length){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a href="${a}" class="gallery-link">
            <img src="${s}" alt="${e}" class="gallery-image" />
          </a>
          <div class="info">
            <p><b> Likes:</b> ${r}</p>
            <p><b> Views:</b> ${n}</p>
            <p><b> Comments:</b> ${u}</p>
            <p><b> Downloads:</b> ${f}</p>
          </div>
        </li>
      `).join("");l.innerHTML=t,i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){l.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".form"),t=document.querySelector(".loader");if(!o){console.error("Form not found");return}if(!t){console.error("Loader not found");return}function s(){t.classList.add("active")}function a(){t.classList.remove("active")}o.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.elements["search-text"].value.trim();if(!r){c.warning({title:"Warning",message:"Please enter a search term!"});return}L(),s();try{const n=await y(r);h(n)}catch{c.error({title:"Error",message:"Something went wrong! Please try again."})}finally{a()}})});
//# sourceMappingURL=index.js.map
