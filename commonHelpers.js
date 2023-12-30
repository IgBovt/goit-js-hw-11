import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();function d(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),input:document.querySelector(".js-input"),body:document.querySelector(".js-gallery"),span:document.querySelector(".js-loader")}}const f="/goit-js-hw-11/assets/2-26327b7f.svg",u="41531809-f9219a766117007ff116a3463",s=d();s.form.addEventListener("submit",p);function p(r){r.preventDefault(),s.span.classList.add("loader"),s.body.innerHTML="",h()}function h(){fetch(`https://pixabay.com/api/?key=${u}&q=${s.input.value}&image_type=photo&orientation=horizontal&per_page=50`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{r.hits.length<=0&&l.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${f}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"}),s.body.innerHTML=r.hits.map(t=>`
            <a class="link" href="${t.largeImageURL}">
            <img
                class="img"
                src="${t.webformatURL}"
                alt="${t.tags}"
                width="360"
                height="200"
                loading="lazy"
            />
            <div class="text-bar">
                <div class="text-container">
                <h3 class="text-title">Likes</h3>
                <p class="text">${t.likes}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Views</h3>
                <p class="text">${t.views}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Comments</h3>
                <p class="text">${t.comments}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Downloads</h3>
                <p class="text">${t.downloads}</p>
                </div>
            </div> </a
            >`).join(""),s.span.classList.remove("loader"),new c(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(r=>console.log("error")).finally(s.form.reset())}
//# sourceMappingURL=commonHelpers.js.map
