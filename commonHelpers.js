import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function u(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),input:document.querySelector(".js-input"),body:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader")}}const f="/goit-js-hw-11/assets/2-26327b7f.svg";function d(){return l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${f}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(){new c(".gallery a",{captionsData:"alt",captionDelay:250})}const h="41531809-f9219a766117007ff116a3463",n=u();n.form.addEventListener("submit",m);function m(t){t.preventDefault(),n.span.classList.add("loader"),n.body.innerHTML="",y()}function y(){fetch(`https://pixabay.com/api/?key=${h}&q=${n.input.value}&image_type=photo&orientation=horizontal&per_page=21`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.hits.length<=0&&d(),g(t),v(),p()}).catch(t=>console.log("error")).finally(n.form.reset())}function g(t){return n.body.innerHTML=t.hits.map(o=>`
            <a class="link" href="${o.largeImageURL}">
            <img
                class="img"
                src="${o.webformatURL}"
                alt="${o.tags}"
                width="360"
                height="200"
                loading="lazy"
            />
            <div class="text-bar">
                <div class="text-container">
                <h3 class="text-title">Likes</h3>
                <p class="text">${o.likes}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Views</h3>
                <p class="text">${o.views}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Comments</h3>
                <p class="text">${o.comments}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Downloads</h3>
                <p class="text">${o.downloads}</p>
                </div>
            </div> </a
            >`).join("")}function v(){return n.span.classList.remove("loader")}
//# sourceMappingURL=commonHelpers.js.map
