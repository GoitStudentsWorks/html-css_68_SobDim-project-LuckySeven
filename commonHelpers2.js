(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();(()=>{const c=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),n=document.createElement("div");n.classList.add("overlay"),n.style.display="none";const e=()=>{const s=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!s),c.classList.toggle("is-open"),s?r():t()},t=()=>{n.style.display="block";const s="disableBodyScroll";bodyScrollLock[s](document.body)},r=()=>{n.style.display="none",c.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)};o.addEventListener("click",e),l.addEventListener("click",r),document.querySelectorAll(".js-close-menu").forEach(s=>{s.addEventListener("click",r)}),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&r()}),document.body.appendChild(n)})();
//# sourceMappingURL=commonHelpers2.js.map
