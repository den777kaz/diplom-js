!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.querySelectorAll(".call-btn"),t=document.querySelectorAll(".discount-btn"),n=document.querySelectorAll(".check-btn"),o=document.querySelectorAll(".consultation-btn"),l=document.querySelector(".popup-call"),c=document.querySelector(".popup-discount"),r=document.querySelector(".popup-check"),d=document.querySelector(".popup-consultation"),s=(e,t)=>{e.forEach(e=>{e.addEventListener("click",()=>{t.style.display="block"})})};s(e,l),s(t,c),s(n,r),s(o,d);const u=e=>{e.addEventListener("click",t=>{let n=t.target;n.classList.contains("popup-close")?(t.preventDefault(),e.style.display=""):(n=n.closest(".popup-dialog"))||(e.style.display="none")})};u(l),u(c),u(r),u(d)};var l=()=>{const e=document.getElementById("accordion-two"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".panel-collapse");e.addEventListener("click",e=>{e.preventDefault();let o=e.target;(o=o.closest(".panel-heading")).classList.contains("panel-heading")&&t.forEach((e,t)=>{e===o&&(e=>{for(let t=0;t<n.length;t++)n[t].style.display=e===t?"block":"none"})(t)})})};var c=()=>{const e=document.querySelector(".add-sentence-btn"),t=document.querySelectorAll(".hide-item");e.addEventListener("click",()=>{t.forEach(e=>{e.classList.remove("hidden")}),e.style.display="none"})};var r=()=>{document.getElementById("myonoffswitch");const e=document.getElementById("accordion"),t=document.querySelectorAll(".panel-head"),n=document.querySelectorAll(".construct-btn"),o=document.querySelectorAll(".text-panels"),l=document.getElementById("collapseOne"),c=document.getElementById("collapseTwo"),r=document.getElementById("collapseThree"),d=document.getElementById("collapseFour");n.forEach(e=>{e.addEventListener("click",e=>{let t=e.target;e.preventDefault(),t.closest(".next-btn-one")?(c.style.display="block",l.style.display="none"):t.closest(".next-btn-two")?(r.style.display="block",c.style.display="none"):t.closest(".next-btn-three")&&(d.style.display="block",r.style.display="none")})});e.addEventListener("click",e=>{let n=e.target;(n=n.closest(".panel-head"))&&(e.preventDefault(),t.forEach((e,t)=>{e===n&&(e=>{for(let t=0;t<o.length;t++)o[t].style.display=e===t?"block":"none"})(t)}))})};var d=()=>{const e=document.getElementById("myonoffswitch"),t=document.getElementById("myonoffswitch-two"),n=document.querySelectorAll(".expand"),o=(document.getElementById("distance"),document.getElementById("calc-result")),l=document.querySelector(".diameter-one"),c=document.querySelector(".diameter-two"),r=document.querySelector(".ring-amount-one"),d=document.querySelector(".ring-amount-two");function s(){let s,u,a,i,p=0,m=0;const y=l.options[l.selectedIndex].index,f=r.options[r.selectedIndex].index,h=c.options[c.selectedIndex].index,g=d.options[d.selectedIndex].index;a=1===y?2e3:0,1===f?s=3e3:2===f?s=5e3:0===f&&(s=0),i=1===h?3e3:0,1===g?u=4500:2===g?u=7500:0===g&&(u=0);n[2].disabled=!0,n[3].disabled=!0,e.checked?(n[2].disabled=!0,n[3].disabled=!0):!1===e.checked&&(n[2].disabled=!1,n[3].disabled=!1),t.checked?p=e.checked?1e4+a+s+(m=1e3):25e3+a+s+i+u+(m=2e3):m=0,e.checked?p=1e4+a+s+m:e.checked||(p=25e3+a+s+i+u+m),o.value=p}l.addEventListener("change",s),r.addEventListener("change",s),d.addEventListener("change",s),c.addEventListener("change",s),t.addEventListener("change",s),e.addEventListener("change",s),s()};var s=()=>{const e=document.createElement("div");e.textContent="",e.style.cssText="font-size: 1.2rem;";const t=document.getElementById("consult-popup-form"),n=document.getElementById("check-popup-form"),o=document.getElementById("discount-popup-form"),l=document.getElementById("call-popup-form"),c=document.getElementById("discForm"),r=document.getElementById("question-form"),d=document.getElementById("consul-order-form"),s=t=>{t.addEventListener("submit",o=>{o.preventDefault(),t.appendChild(e),e.textContent="Loading...";const l=new FormData(t);let c={};l.forEach((e,t)=>{c[t]=e}),n(c).then(t=>{if(200!==t.status)throw new Error("status network not 200!");e.textContent="thank you! We will contact you shortly!"}).catch(t=>{e.textContent="Something was wrong",console.error(t)}),t.reset()});const n=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:JSON.stringify(e)})};s(t),s(n),s(o),s(l),s(r),s(c),s(d)};var u=()=>{const e=document.querySelectorAll(".phone-user");console.log("inputsTel: ",e),e.forEach(e=>{const t=/[^\+0-9]/gi;e.addEventListener("input",()=>{e.value=e.value.replace(t,"")})})};(()=>{})(),o(),l(),c(),r(),d(),s(),u()}]);