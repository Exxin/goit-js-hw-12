import{a as B,S as h,i as c}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const I="42458778-da79c0017118817650d1b611e";async function y(t,r=1,e=15){try{return(await B.get(`https://pixabay.com/api/?key=${I}&q=${t}&page=${r}&per_page=${e}`)).data}catch(s){throw console.error("Error fetching data:",s),s}}const b=document.getElementById("loader"),$=document.getElementById("gallery"),v=new h(".gallery a"),m=document.getElementById("loadMoreBtn");function g(t,r){if(r&&(b.style.display="none"),t.length===0){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}t.forEach(e=>{const s=document.createElement("div");s.classList.add("card"),s.innerHTML=`
            <a href="${e.largeImageURL}" data-lightbox="gallery">
                <img src="${e.webformatURL}" alt="${e.tags}">
            </a>
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
        `,$.appendChild(s)}),v.refresh()}function l(){m.style.display="none"}function O(){m.style.display="block"}function u(){c.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}const P=document.getElementById("loader"),M=document.getElementById("gallery");new h(".gallery a");const S=document.getElementById("loadMoreBtn"),A=document.getElementById("searchForm"),p=document.getElementById("searchInput"),E="block",L="none";function i(t){P.style.display=t}let a=1,f=!1;A.addEventListener("submit",async function(t){t.preventDefault();const r=p.value.trim();if(r===""){c.error({title:"Error",message:"Please enter a search term"});return}i(E),M.innerHTML="",a=1,f=!1;try{const e=await y(r,a);g(e.hits,!0),e.hits.length===0?(l(),u()):(O(),a++,w())}catch(e){console.error("Error fetching data:",e),c.error({title:"Error",message:"An error occurred while fetching data. Please try again."})}finally{i(L)}});S.addEventListener("click",async function(){try{if(f){l(),u();return}const t=p.value.trim();i(E);const r=await y(t,a);r.hits.length===0?(f=!0,l(),u()):(g(r.hits,!1),a++,w())}catch(t){console.error("Error fetching data:",t),c.error({title:"Error",message:"An error occurred while fetching more data. Please try again."})}finally{i(L)}});function w(){var r,e;const t=(e=(r=document.querySelector(".card"))==null?void 0:r.getBoundingClientRect())==null?void 0:e.height;t&&window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map