import{i as a}from"./assets/vendor-32231325.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(){return{form:document.querySelector(".js-form"),btn:document.querySelector(".js-btn"),input:document.querySelector(".js-input"),body:document.querySelector(".js-gallery")}}const f="/goit-js-hw-11/assets/2-26327b7f.svg",u="41531809-f9219a766117007ff116a3463",n=c();n.form.addEventListener("submit",d);function d(s){s.preventDefault(),fetch(`https://pixabay.com/api/?key=${u}&q=${n.input.value}&image_type=photo&orientation=horizontal&per_page=21`).then(r=>r.json()).then(r=>{r.hits.length<=0&&a.warning({backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",iconUrl:`${f}`,position:"topRight",title:"SORRY",message:"Sorry, there are no images matching your search query. Please try again!"}),n.body.innerHTML=r.hits.map(o=>`<a class="link" href="#"><img class="img" src="${o.webformatURL}" alt="${o.tags}" width="360" height="200" loading="lazy"></a>`).join("")}).catch(r=>console.log("error")).finally(n.form.reset())}
//# sourceMappingURL=commonHelpers.js.map
