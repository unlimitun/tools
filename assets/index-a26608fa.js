import{d as P,f as g,c as k,a,F as Q,r as X,w as U,v as E,o as _}from"./index-b557bd84.js";const Y={class:"h-full w-full flex justify-center items-center overflow-auto"},Z={key:1,class:"flex w-full h-full flex-nowrap items-center justify-center"},$=a("div",{class:"text-center"},"卷积核",-1),ee={class:"flex flex-wrap h-36 w-36 border border-black justify-around content-around"},te=["onUpdate:modelValue"],ae={class:"text-center"},le=a("div",{class:"text-center"},"偏移值:",-1),oe=P({__name:"index",setup(se){const x=g(),y=g(),I=g(),s=g(),T=g(),c=g(),A=()=>{x.value&&x.value.click()},H=()=>{console.log(x.value.files),x.value.files&&x.value.files.length>0&&(y.value=x.value.files[0],L())},L=()=>{if(y.value===void 0)return;const e=new Image,o=new FileReader;o.readAsDataURL(y.value),o.onload=()=>{const b=o.result;e.src=b,e.onload=()=>{if(s.value){const t=I.value.clientHeight,l=I.value.clientWidth,p=s.value.getContext("2d"),w=e.height,m=e.width,r=m/w;s.value.height=w,s.value.width=m;const d=l/t;console.log(w,m,r,t,l,d),d>r?(s.value.style.height=t+"px",s.value.style.width=t*r+"px",c.value.style.height=t+"px",c.value.style.width=t*r+"px"):(s.value.style.width=l+"px",s.value.style.height=l/r+"px",c.value.style.width=l+"px",c.value.style.height=l/r+"px"),p==null||p.drawImage(e,0,0)}}}},C=()=>{var V,F;const e=Math.sqrt(u.value.length),o=(e-1)/2,b=-1*o,t=s.value.width,l=s.value.height,p=(F=(V=s.value)==null?void 0:V.getContext("2d"))==null?void 0:F.getImageData(0,0,t,l),w=u.value,m=(v,f)=>{let R=0,D=0,j=0;for(let h=b;h<=o;h+=1)for(let n=b;n<=o;n+=1){const B=Number(w[(h+(e-1)/2)*e+n+(e-1)/2]),J=p.data[((h+f)*t+n+v)*4],K=p.data[((h+f)*t+n+v)*4+1],O=p.data[((h+f)*t+n+v)*4+2];R+=J*B,D+=K*B,j+=O*B}return[R,D,j,255]},r=c.value.getContext("2d");c.value.height=l-e+1,c.value.width=t-e+1;const d=r.createImageData(t-e+1,l-e+1),q=(e-1)/2,G=t-1-(e-1)/2,W=(e-1)/2,z=l-1-(e-1)/2;for(let v=W;v<=z;v+=1)for(let f=q;f<=G;f+=1){const[R,D,j,h]=m(f,v),n=(v*(t-e+1)+f)*4;d.data[n]=R+i.value,d.data[n+1]=D+i.value,d.data[n+2]=j+i.value,d.data[n+3]=h}r.putImageData(d,0,0)},u=g(new Array(9).fill(0)),i=g(0),M=()=>{u.value=[-1,-1,-1,-1,9,-1,-1,-1,-1],i.value=0,C()},N=()=>{u.value=[-1,0,0,0,-1,0,0,0,2],i.value=128,C()},S=()=>{u.value=[0,0,0,.33,.33,.33,0,0,0],i.value=0,C()};return(e,o)=>(_(),k("div",Y,[a("input",{ref_key:"inputRef",ref:x,type:"file",class:"hidden",onChange:H},null,544),y.value===void 0?(_(),k("button",{key:0,onClick:A,class:"h-8 w-24 border border-black cursor-pointer select-none"}," 上传图片 ")):(_(),k("div",Z,[a("div",{ref_key:"baseContainerRef",ref:I,class:"h-full flex justify-center items-center flex-grow flex-shrink"},[a("canvas",{ref_key:"baseCanvasRef",ref:s},null,512)],512),a("div",null,[$,a("div",ee,[(_(!0),k(Q,null,X(u.value,(b,t)=>U((_(),k("input",{type:"text",key:"c"+t,class:"h-10 w-10 border border-black text-center","onUpdate:modelValue":l=>u.value[t]=l},null,8,te)),[[E,u.value[t],void 0,{number:!0}]])),128))]),a("div",ae,[le,U(a("input",{"onUpdate:modelValue":o[0]||(o[0]=b=>i.value=b),class:"w-20 text-center"},null,512),[[E,i.value,void 0,{number:!0}]])]),a("div",{class:"text-center"},[a("button",{onClick:C,class:"h-8 w-24 border cursor-pointer select-none border-black mt-4"}," 计算卷积 ")]),a("div",{class:"text-center"},[a("button",{onClick:M,class:"h-8 w-24 border cursor-pointer select-none border-black mt-4"}," 锐化 ")]),a("div",{class:"text-center"},[a("button",{onClick:N,class:"h-8 w-24 border cursor-pointer select-none border-black mt-4"}," 浮雕 ")]),a("div",{class:"text-center"},[a("button",{onClick:S,class:"h-8 w-24 border cursor-pointer select-none border-black mt-4"}," 动态模糊 ")])]),a("div",{class:"h-full flex justify-center items-center flex-grow flex-shrink",ref_key:"targetContainerRef",ref:T},[a("canvas",{ref_key:"targetCanvasRef",ref:c},null,512)],512)]))]))}});export{oe as default};