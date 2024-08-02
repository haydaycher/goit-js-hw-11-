import{i as a,S as h}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="45161707-c900d4c58d729c828a58b7932",f="https://pixabay.com/api/",u=document.querySelector(".loader");function g(){u.style.display="flex"}function y(){u.style.display="none"}function b(r){const s=new URL(f);return s.searchParams.set("key",p),s.searchParams.set("q",r),s.searchParams.set("image_type","photo"),s.searchParams.set("orientation","horizontal"),s.searchParams.set("safesearch","true"),g(),fetch(s).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>o.hits).catch(o=>{throw console.error("Error fetching images:",o),o}).finally(()=>{y()})}const l=document.getElementById("gallery");let c;function E(r){if(l.innerHTML="",r.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=r.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:d,downloads:m})=>`
      <a href="${i}" class="gallery-item">
        <img src="${o}" alt="${e}" />
        <div class="info gallery-text-list">
          <p class="info-item"><b>Likes:</b> ${t}</p>
          <p class="info-item"><b>Views:</b> ${n}</p>
          <p class="info-item"><b>Comments:</b> ${d}</p>
          <p class="info-item"><b>Downloads:</b> ${m}</p>
        </div>
      </a>
    `).join("");l.innerHTML=s,c?c.refresh():c=new h(".gallery a",{captionsData:"alt",captionDelay:250})}document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("searchInput"),s=document.getElementById("searchForm"),o=document.getElementById("gallery"),i=r.getAttribute("placeholder");r.addEventListener("focus",()=>{r.setAttribute("data-placeholder",i),r.setAttribute("placeholder","")}),r.addEventListener("blur",()=>{r.setAttribute("placeholder",i)}),s.addEventListener("submit",e=>{e.preventDefault();const t=r.value.trim();if(t===""){a.error({title:"Error",message:"Please enter a search term.",position:"topRight"});return}o.innerHTML="",b(t).then(n=>{n.length===0?a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(a.success({title:"Success",message:`Found ${n.length} images.`,position:"topRight"}),E(n))}).catch(n=>{a.error({title:"Error",message:"Failed to fetch images.",position:"topRight"})}),r.value=""})});
//# sourceMappingURL=commonHelpers.js.map