!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{const e=document.querySelectorAll(".call-btn"),t=document.querySelectorAll(".discount-btn"),n=document.querySelectorAll(".check-btn"),r=document.querySelectorAll(".consultation-btn"),o=document.querySelector(".popup-call"),i=document.querySelector(".popup-discount"),c=document.querySelector(".popup-check"),l=document.querySelector(".popup-consultation"),s=(e,t)=>{e.forEach(e=>{e.addEventListener("click",()=>{t.style.display="block"})})};s(e,o),s(t,i),s(n,c),s(r,l);const a=e=>{e.addEventListener("click",t=>{let n=t.target;n.classList.contains("popup-close")?(t.preventDefault(),e.style.display=""):(n=n.closest(".popup-dialog"))||(e.style.display="none")})};a(o),a(i),a(c),a(l)};var o=()=>{const e=document.getElementById("accordion-two"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".panel-collapse");e.addEventListener("click",e=>{e.preventDefault();let r=e.target;(r=r.closest(".panel-heading")).classList.contains("panel-heading")&&t.forEach((e,t)=>{e===r&&(e=>{for(let t=0;t<n.length;t++)n[t].style.display=e===t?"block":"none"})(t)})})};var i=()=>{const e=document.querySelector(".add-sentence-btn"),t=document.querySelectorAll(".hide-item");e.addEventListener("click",()=>{t.forEach(e=>{e.classList.remove("hidden")}),e.style.display="none"})};var c=()=>{const e=document.getElementById("accordion"),t=document.querySelectorAll(".panel-head"),n=document.querySelectorAll(".construct-btn"),r=document.querySelectorAll(".text-panels"),o=document.getElementById("collapseOne"),i=document.getElementById("collapseTwo"),c=document.getElementById("collapseThree"),l=document.getElementById("collapseFour");n.forEach(e=>{e.addEventListener("click",e=>{let t=e.target;e.preventDefault(),t.closest(".next-btn-one")?(i.style.display="block",o.style.display="none"):t.closest(".next-btn-two")?(c.style.display="block",i.style.display="none"):t.closest(".next-btn-three")&&(l.style.display="block",c.style.display="none")})});e.addEventListener("click",e=>{let n=e.target;(n=n.closest(".panel-head"))&&(e.preventDefault(),t.forEach((e,t)=>{e===n&&(e=>{for(let t=0;t<r.length;t++)r[t].style.display=e===t?"block":"none"})(t)}))})};var l=()=>{const e=document.getElementById("myonoffswitch"),t=document.getElementById("myonoffswitch-two"),n=document.querySelectorAll(".expand"),r=document.getElementById("distance"),o=document.getElementById("calc-result"),i=document.querySelector(".diameter-one"),c=document.querySelector(".diameter-two"),l=document.querySelector(".ring-amount-one"),s=document.querySelector(".ring-amount-two"),a=document.getElementById("send-data"),d=()=>{n[2].disabled=!0,n[3].disabled=!0,e.checked?(n[2].disabled=!0,n[3].disabled=!0):!1===e.checked&&(n[2].disabled=!1,n[3].disabled=!1)};d();const u={totalResult:0,oneBarrelPrice:1e4,twoBarrelPrice:15e3,diameterBarrelOne:"",diameterBarrelTwo:"",amountBarrelOne:"",amountBarrelTwo:"",ringPrice:0,ringPriceTwo:0,diameterPrice:0,diameterPriceTwo:0,pitPrice:0,pit:!0,distance:0,start:function(){this.getDiameterAmountOne(),this.getDiameterAmountTwo(),this.pitBarrel(),this.showResult()},getDiameterAmountOne:function(){const e=i.options[i.selectedIndex],t=l.options[l.selectedIndex];1===e.index?(this.diameterBarrelOne=e.text,this.diameterPrice=.2*this.oneBarrelPrice):(this.diameterBarrelOne=e.text,this.diameterPrice=0),1===t.index?(this.ringPrice=.3*this.oneBarrelPrice,this.amountBarrelOne=t.text):2===t.index?(this.amountBarrelOne=t.text,this.ringPrice=.5*this.oneBarrelPrice):0===t.index&&(this.amountBarrelOne=t.text,this.ringPrice=0)},getDiameterAmountTwo:function(){const t=c.options[c.selectedIndex],n=s.options[s.selectedIndex];e.checked?(this.diameterBarrelTwo="",this.amountBarrelTwo=""):(1===t.index?(this.diameterPriceTwo=.2*this.twoBarrelPrice,this.diameterBarrelTwo=t.text):(this.diameterPriceTwo=0,this.diameterBarrelTwo=t.text),1===n.index?(this.ringPriceTwo=.3*this.twoBarrelPrice,this.amountBarrelTwo=n.text):2===n.index?(this.ringPriceTwo=.5*this.twoBarrelPrice,this.amountBarrelTwo=n.text):0===n.index&&(this.ringPriceTwo=0,this.amountBarrelTwo=n.text))},pitBarrel:function(){t.checked?(this.pit=!0,e.checked?this.pitPrice=1e3:this.pitPrice=2e3):(this.pitPrice=0,this.pit=!1)},showResult:function(){e.checked?this.totalResult=this.oneBarrelPrice+this.diameterPrice+this.ringPrice+this.pitPrice:e.checked||(this.totalResult=this.oneBarrelPrice+this.twoBarrelPrice+this.diameterPrice+this.ringPrice+this.diameterPriceTwo+this.ringPriceTwo+this.pitPrice),o.value=this.totalResult,this.distance=r.value}};a.addEventListener("click",u.start.bind(u)),e.addEventListener("change",d),console.log(u)};var s=()=>{const e=document.createElement("div");e.textContent="",e.style.cssText="font-size: 1.2rem;";const t=document.getElementById("consult-popup-form"),n=document.getElementById("check-popup-form"),r=document.getElementById("discount-popup-form"),o=document.getElementById("call-popup-form"),i=document.getElementById("discForm"),c=document.getElementById("question-form"),l=document.getElementById("consul-order-form"),s=t=>{t.addEventListener("submit",r=>{r.preventDefault(),t.appendChild(e),e.textContent="Loading...";const o=new FormData(t);let i={};o.forEach((e,t)=>{i[t]=e}),n(i).then(t=>{if(200!==t.status)throw new Error("status network not 200!");e.textContent="thank you! We will contact you shortly!"}).catch(t=>{e.textContent="Something was wrong",console.error(t)}),t.reset()});const n=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:JSON.stringify(e)})};s(t),s(n),s(r),s(o),s(c),s(i),s(l)};var a=()=>{document.querySelectorAll(".phone-user").forEach(e=>{const t=/[^\+0-9]/gi;e.addEventListener("input",()=>{e.value=e.value.replace(t,"")})})};(()=>{})(),r(),o(),i(),c(),l(),s(),a()}]);