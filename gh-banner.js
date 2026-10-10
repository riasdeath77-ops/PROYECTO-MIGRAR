// GH-BANNER FLOATING - NO DAÑA HTML
(function(){
  if(localStorage.getItem('ghBannerClosed')==='1') return;
  const css=`
  #ghTopBanner{position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:9999998;
  background:rgba(17,21,54,0.96);backdrop-filter:blur(12px);border:1px solid #2a3366;
  border-radius:100px;padding:8px 8px 8px 16px;display:flex;align-items:center;gap:12px;
  box-shadow:0 10px 30px rgba(0,0,0,.5);font-family:Inter,system-ui,sans-serif;
  white-space:nowrap;max-width:calc(100vw - 20px);animation:ghBannerIn .4s ease}
  @keyframes ghBannerIn{from{transform:translateX(-50%) translateY(-20px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}
  #ghTopBanner span{color:white;font-size:12.5px;font-weight:800}
  #ghTopBanner a{background:linear-gradient(135deg,#8b5cf6,#6d28d9);color:white;padding:6px 14px;border-radius:100px;text-decoration:none;font-size:11px;font-weight:900}
  #ghTopBanner a:hover{transform:scale(1.05)}
  #ghTopClose{background:#1e254a;border:1px solid #2a3366;color:#8b92c9;width:26px;height:26px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center}
  @media(max-width:600px){#ghTopBanner span{font-size:10.5px} #ghTopBanner{top:10px; padding:6px 6px 6px 12px}}
  `;
  const s=document.createElement('style'); s.innerHTML=css; document.head.appendChild(s);
  const b=document.createElement('div'); b.id='ghTopBanner';
  b.innerHTML=`<span>&#x1F4E6; CUSTOM ORDERS AVAILABLE</span><a href="https://t.me/gearhaven_client_support_bot" target="_blank">Chat on Telegram &#x2192;</a><button id="ghTopClose">&#x2715;</button>`;
  document.body.appendChild(b);
  document.getElementById('ghTopClose').onclick=()=>{
    b.style.transition='all .3s'; b.style.transform='translateX(-50%) translateY(-20px)'; b.style.opacity='0';
    setTimeout(()=>b.remove(),300);
    localStorage.setItem('ghBannerClosed','1');
  };
})();