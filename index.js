import{i as n,S as m,a as d}from"./assets/vendor-CKnsOWbi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g=document.querySelector(".gallery");let l;function y(o){if(!o.length){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:a,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a href="${i}" class="gallery-link">
            <img src="${s}" alt="${e}" class="gallery-image" />
          </a>
          <div class="info">
            <p><b> Likes:</b> ${r}</p>
            <p><b> Views:</b> ${a}</p>
            <p><b> Comments:</b> ${u}</p>
            <p><b> Downloads:</b> ${f}</p>
          </div>
        </li>
      `).join("");g.innerHTML=t,l?l.refresh():l=new m(".gallery a",{captionsData:"alt",captionDelay:250})}const p="49273794-9f9572efe635ab4987a028735",h="https://pixabay.com/api/";async function b(o){try{return(await d.get(h,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const L=document.querySelector("form"),q=document.querySelector(".gallery"),c=document.querySelector(".loader");L.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){n.error({title:"Error",message:"Please enter a search query!"});return}q.innerHTML="",c.classList.remove("visually-hidden");try{const s=await b(t);console.log(s),s.length===0?n.warning({title:"Oops!",message:"No images found. Try again!"}):y(s)}catch{n.error({title:"Error",message:" Failed to fetch images. Try again later!"})}finally{c.classList.add("visually-hidden")}});
//# sourceMappingURL=index.js.map
