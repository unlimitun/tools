import{t as X}from"./throttle-1cd3618f.js";import{d as Y,f as n,g as D,c as F,a as r,u as P,n as j,o as z}from"./index-e53b38a5.js";const E={class:"h-[255px] w-[255px] rounded-full overflow-hidden relative"},N={class:"h-[256px] w-[256px] relative"},V={class:"h-[256px] w-8 relative"},J=Y({__name:"index",setup(W){const h=n(),g=n(),C=n(),b=n(),M=n(),I=n(),u=n(!1),p=()=>{u.value=!0},v=()=>{u.value=!1},f=n({r:255,g:0,b:0,a:255}),m=n(0),w=n(0),k=n({r:255,g:255,b:255,a:255}),_=()=>{if(h.value===void 0)return;const e=h.value.getContext("2d");for(let t=0;t<256;t+=1){const o=e==null?void 0:e.createLinearGradient(0,0,0,255),a=d(s({r:255,g:255,b:255,a:255},f.value,t));o.addColorStop(0,a),o.addColorStop(1,"black"),e.fillStyle=o,e.fillRect(t,0,1,255)}},s=(e,t,o)=>{const a=Math.round((t.r-e.r)*o/255+e.r),l=Math.round((t.g-e.g)*o/255+e.g),c=Math.round((t.b-e.b)*o/255+e.b),i=Math.round((t.a-e.a)*o/255+e.a);return{r:a,g:l,b:c,a:i}},T=()=>{const e=C.value.getContext("2d"),t=e.createConicGradient(0,127,127);t.addColorStop(0,"rgb(255, 0, 0)"),t.addColorStop(1/6,"rgb(255, 255, 0)"),t.addColorStop(2/6,"rgb(0, 255, 0)"),t.addColorStop(3/6,"rgb(0, 255, 255)"),t.addColorStop(4/6,"rgb(0, 0, 255)"),t.addColorStop(5/6,"rgb(255, 0, 255)"),t.addColorStop(1,"rgb(255, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,256,256),e.fillStyle="rgba(255,255,255,1)",e.beginPath(),e.arc(127,127,60,0,Math.PI*2),e.fill()},H=e=>e<60?s({r:255,g:0,b:0,a:255},{r:255,g:255,b:0,a:255},e*255/60):e<120?s({r:255,g:255,b:0,a:255},{r:0,g:255,b:0,a:255},(e-60)*255/60):e<180?s({r:0,g:255,b:0,a:255},{r:0,g:255,b:255,a:255},(e-120)*255/60):e<240?s({r:0,g:255,b:255,a:255},{r:0,g:0,b:255,a:255},(e-180)*255/60):e<300?s({r:0,g:0,b:255,a:255},{r:255,g:0,b:255,a:255},(e-240)*255/60):s({r:255,g:0,b:255,a:255},{r:255,g:0,b:0,a:255},(e-300)*255/60),x=e=>{const t=e.offsetX-127,o=e.offsetY-127;let a=0;t==0&&(o>0?a=270:o<0&&(a=90)),t>0&&o>0&&(a=Math.atan(o/t)*180/Math.PI),t<0&&o>0&&(a=180+Math.atan(o/t)*180/Math.PI),t<0&&o<=0&&(a=180+Math.atan(o/t)*180/Math.PI),t>0&&o<=0&&(a=360+Math.atan(o/t)*180/Math.PI),f.value=H(a),_(),R();const l=b.value.getContext("2d");l.beginPath(),l.clearRect(0,0,255,255),l.strokeStyle="rgba(0,0,0,0.3)";const c=60*Math.cos(a/180*Math.PI)+127,i=60*Math.sin(a/180*Math.PI)+127,G=127*Math.cos(a/180*Math.PI)+127,L=127*Math.sin(a/180*Math.PI)+127;l.moveTo(c,i),l.lineTo(G,L),l.stroke()},y=X(e=>{u.value&&x(e)},20),S=e=>{const t=g.value.getContext("2d"),o=e.offsetX,a=e.offsetY;t.beginPath(),t.clearRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,0.3)",t.lineWidth=1,t.moveTo(o,0),t.lineTo(o,256),t.moveTo(0,a),t.lineTo(256,a),t.stroke(),m.value=o,w.value=a,R()},$=e=>{u.value&&S(e)},R=()=>{const e=s({r:255,g:255,b:255,a:255},f.value,m.value);k.value=s(e,{r:0,g:0,b:0,a:255},w.value)},d=e=>{const{r:t,g:o,b:a,a:l}=e;return`rgba(${t},${o},${a},${l})`},B=()=>{const e=M.value.getContext("2d"),t=e.createLinearGradient(0,0,0,255),{r:o,g:a,b:l}=f.value,c=d({r:o,g:a,b:l,a:255}),i=d({r:o,g:a,b:l,a:0});t.addColorStop(0,c),t.addColorStop(1,i),e.fillStyle=t,e.fillRect(0,0,32,256)};return D(()=>{_(),T(),B()}),(e,t)=>(z(),F("div",{class:"h-full w-full flex flex-wrap justify-center items-center",onMouseup:v},[r("div",E,[r("canvas",{ref_key:"circleCanvasRef",ref:C,height:"255",width:"255",class:"h-full w-full"},null,512),r("canvas",{onClick:x,onMousedown:p,onMouseup:v,onMousemove:t[0]||(t[0]=(...o)=>P(y)&&P(y)(...o)),ref_key:"circleMaskCanvasRef",ref:b,height:"255",width:"255",class:"h-full w-full absolute top-0 left-0"},null,544)]),r("div",N,[r("canvas",{ref_key:"mainCanvasRef",ref:h,height:"256",width:"256",class:"h-full w-full"},null,512),r("canvas",{ref_key:"mainMaskCanvasRef",ref:g,height:"256",width:"256",class:"h-full w-full absolute top-0 left-0",onMousedown:p,onMouseup:v,onMousemove:$,onClick:S},null,544)]),r("div",V,[r("canvas",{ref_key:"lineCanvasRef",ref:M,height:"256",width:"32",class:"h-full w-full"},null,512),r("canvas",{ref_key:"lineMaskCanvasRef",ref:I,height:"256",width:"32",class:"h-full w-full absolute"},null,512)]),r("div",{class:"w-20 h-10",style:j({backgroundColor:d(k.value)})},null,4)],32))}});export{J as default};