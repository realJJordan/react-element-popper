"use strict";module.exports=function({from:t=12,duration:o=400,transition:e}={}){return t<0&&(t=0),function({popper:r,arrow:n,data:{position:i,getTransform:p,popper:{top:f,left:s},arrow:{top:l,left:u}}}){let[a]=i.split("-"),m={top:0,left:0};function c(t){t.style.transition=e||o+"ms"}function d(t,o,e){t.style.transform=p(o,e)}["left","right"].includes(a)?m.left+="right"===a?t:-t:m.top+="bottom"===a?t:-t,d(r,s+m.left,f+m.top),n&&d(n,u+m.left,l+m.top),setTimeout((()=>{c(r),d(r,s,f),n&&(c(n),d(n,u,l))}),18)}};
