var t=document.querySelector(".spider"),e=document.querySelector(".wall"),i={width:e.clientWidth,height:e.clientHeight},h={width:t.clientWidth,height:t.clientHeight},c=i.width-h.width,n=i.height-h.height;e.addEventListener("click",function(i){if(i.target===e){var a=i.offsetY,d=Math.max(0,Math.min(i.offsetX-h.width/2,c)),l=Math.max(0,Math.min(a-h.height/2,n));t.style.top="".concat(l,"px"),t.style.left="".concat(d,"px")}});
//# sourceMappingURL=index.aa921fd6.js.map