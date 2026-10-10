// GEARHAVEN V27 - TODO CONSERVADO + MAS BRILLOSO
(function(){
  document.querySelectorAll('#ghBtnNew,#ghPanelNew,#ghBtn,#ghPanel,#ghDcModal').forEach(e=>e.remove());

  const TG = "https://t.me/gearhaven_client_support_bot?start=web_lead";
  const WA = `https://wa.me/593979294075?text=${encodeURIComponent("Hi, I need assistance for GEARHAVEN GG")}`;
  const DC_INVITE = "https://discord.gg/t27YYQdbqK";
  const WORKER_URL = "https://gearhaven-client-support.riasdeath77.workers.dev";

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();
  (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true; s1.src='https://embed.tawk.to/6ac73c4a35f62834c66179bd/1k4d470ia';
    s1.charset='UTF-8'; s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  })();

  const css=`
  iframe[src*="tawk.to"]{ bottom:20px !important; right:20px !important; transform: scale(0.75) !important; transform-origin: bottom right !important; }

  #ghBtnNew{
    position:fixed;bottom:118px;right:22px;z-index:9999999;
    width:54px;height:54px;
    background: radial-gradient(circle at 28% 28%, #ede9fe 0%, #c4b5fd 12%, #a78bfa 25%, #8b5cf6 45%, #7c3aed 65%, #6d28d9 80%, #4c1d95 100%);
    border-radius:50%;
    border:2px solid #fff;
    display:flex;align-items:center;justify-content:center;
    cursor:pointer;
    box-shadow: 
      0 0 0 4px rgba(139,92,246,0.2),
      0 0 20px rgba(139,92,246,0.6),
      0 8px 28px rgba(109,40,217,0.6),
      inset 0 2px 4px rgba(255,255,255,1),
      inset 0 -2px 3px rgba(0,0,0,0.4);
    transition: all .35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    overflow:hidden;
    animation: ghFloat 2.8s ease-in-out infinite, ghGlow 2s ease-in-out infinite alternate;
  }
  #ghBtnNew::before{
    content:'';position:absolute;top:-60%;left:-60%;width:220%;height:220%;
    background: linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.7) 50%, transparent 65%);
    transform: rotate(20deg) translateX(-110%);
    animation: ghShine 2.8s ease-in-out infinite;
  }
  #ghBtnNew::after{
    content:'';position:absolute;top:10%;left:18%;width:32%;height:32%;
    background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.3) 40%, transparent 75%);
    border-radius:50%; filter:blur(0.5px);
  }
  #ghBtnNew:hover{transform:scale(1.15) translateY(-3px);box-shadow:0 0 0 6px rgba(139,92,246,0.3),0 0 35px rgba(139,92,246,0.8),0 14px 36px rgba(109,40,217,0.7),inset 0 2px 5px rgba(255,255,255,1)}
  @keyframes ghFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
  @keyframes ghShine{0%{transform:rotate(20deg) translateX(-110%)}55%{transform:rotate(20deg) translateX(110%)}100%{transform:rotate(20deg) translateX(110%)}}
  @keyframes ghGlow{0%{box-shadow:0 0 0 4px rgba(139,92,246,0.2),0 0 20px rgba(139,92,246,0.6),0 8px 28px rgba(109,40,217,0.6),inset 0 2px 4px rgba(255,255,255,1)}100%{box-shadow:0 0 0 4px rgba(139,92,246,0.3),0 0 28px rgba(139,92,246,0.8),0 8px 28px rgba(109,40,217,0.7),inset 0 2px 4px rgba(255,255,255,1)}}
  #ghBtnNew svg{width:25px;height:25px;fill:white;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.5));z-index:2}

  #ghPanelNew{position:fixed;bottom:120px;right:22px;z-index:10000000;width:360px;max-width:calc(100vw - 32px);background:linear-gradient(180deg,rgba(21,26,64,0.98) 0%,rgba(15,19,51,0.98) 100%);backdrop-filter:blur(20px);border:1px solid rgba(139,92,246,0.35);border-radius:20px;display:none;flex-direction:column;overflow:hidden;box-shadow:0 0 0 1px rgba(139,92,246,0.2),0 20px 60px rgba(0,0,0,.7),0 0 40px rgba(139,92,246,0.18)}
  #ghPanelNew.open{display:flex;animation:ghPop .32s cubic-bezier(0.175, 0.885, 0.32, 1.275)}
  @keyframes ghPop{from{transform:translateY(12px) scale(.94);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}
  #ghHead{padding:16px;background:linear-gradient(135deg,#1a1f4b 0%,#151a40 50%,#0f1333 100%);border-bottom:1px solid rgba(139,92,246,0.25);position:relative}
  #ghHead::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#8b5cf6,transparent)}
  .ghLive{display:inline-flex;align-items:center;gap:6px;background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.5);color:#22c55e;font-size:8px;font-weight:800;padding:4px 10px;border-radius:100px;box-shadow:0 0 12px rgba(34,197,94,0.25)}
  .ghLive i{width:5px;height:5px;background:#22c55e;border-radius:50%;display:inline-block;box-shadow:0 0 8px #22c55e;animation:ghBlink 1.5s infinite}
  @keyframes ghBlink{0%,100%{opacity:1}50%{opacity:.4}}
  .ghOpt{display:flex;align-items:center;gap:12px;padding:12px;border-radius:14px;border:1px solid rgba(42,51,102,0.8);background:linear-gradient(135deg,#111536 0%,#0e1230 100%);color:white;text-decoration:none;cursor:pointer;transition:all .22s}
  .ghOpt:hover{transform:translateY(-1px);border-color:rgba(139,92,246,0.5);box-shadow:0 6px 16px rgba(0,0,0,0.3)}
  .ghIc{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 3px 10px rgba(0,0,0,0.2),inset 0 1px 1px rgba(255,255,255,0.2)}
  .ghIc svg{width:22px;height:22px;fill:white}
  #ghDcModal{position:fixed;inset:0;z-index:10000001;background:rgba(0,0,0,.75);backdrop-filter:blur(10px);display:none;align-items:center;justify-content:center;padding:20px}
  #ghDcModal.open{display:flex}
  `;

  const headset = `<svg viewBox="0 0 24 24"><path d="M12 1C5.9 1 1 4.9 1 10v6c0 2.2 1.8 4 4 4h1v-6H4v-4c0-3.3 2.7-6 6-6s6 2.7 6 6v4h-2v6h1c2.2 0 4-1.8 4-4v-6c0-5.1-4.9-9-11-9z"/></svg>`;
  const telegramIcon = `<svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.697.065-1.226-.46-1.901-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`;
  const whatsappIcon = `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>`;
  const discordIcon = `<svg viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,21.28,0c.87.64,1.75,1.32,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" fill="white"/></svg>`;
  const liveIcon = `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/><circle cx="12" cy="10" r="1.5"/><circle cx="16" cy="10" r="1.5"/><circle cx="8" cy="10" r="1.5"/></svg>`;

  const html=`
  <button id="ghBtnNew">${headset}</button>
  <div id="ghPanelNew">
    <div id="ghHead">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div class="ghLive"><i></i> LIVE SUPPORT</div>
        <button id="ghXNew" style="background:rgba(30,37,74,0.8);border:1px solid rgba(42,51,102,0.8);width:26px;height:26px;border-radius:50%;color:#8b92c9;cursor:pointer">✕</button>
      </div>
      <div style="margin-top:10px;font-size:19px;font-weight:900;color:white">Quick <span style="background:linear-gradient(90deg,#a78bfa,#8b5cf6 30%,#22c55e 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Support</span></div>
      <div style="margin-top:4px;font-size:11px;color:#8b92c9">For <b style="color:#c2c8e8">custom orders</b> or any question. Avg reply <b style="color:#a78bfa">< 3 min</b></div>
    </div>
    <div style="padding:12px;display:flex;flex-direction:column;gap:8px">
      <div class="ghOpt" id="ghLiveChatBtn" style="border-color:rgba(34,197,94,0.5);background:linear-gradient(135deg,rgba(34,197,94,.14),rgba(139,92,246,.08))">
        <div class="ghIc" style="background:linear-gradient(135deg,#22c55e,#16a34a)">${liveIcon}</div>
        <div style="flex:1"><b style="font-size:13px">Live Chat - Chat Now</b><br><span style="font-size:10px;color:#22c55e">● Online - Personalized offers</span></div>
        <div style="opacity:.6">↗</div>
      </div>
      <a class="ghOpt" href="${TG}" target="_blank"><div class="ghIc" style="background:linear-gradient(135deg,#229ED9,#1c8cc0)">${telegramIcon}</div><div style="flex:1"><b style="font-size:13px">Telegram</b><br><span style="font-size:10px;color:#8b92c9">Custom orders • Fastest</span></div><div>↗</div></a>
      <a class="ghOpt" id="ghWaBtn" href="${WA}" target="_blank"><div class="ghIc" style="background:linear-gradient(135deg,#25D366,#1da851)">${whatsappIcon}</div><div style="flex:1"><b style="font-size:13px">WhatsApp</b><br><span style="font-size:10px;color:#8b92c9">Quick help • +593 979 294 075</span></div><div>↗</div></a>
      <div class="ghOpt" id="ghDcBtn"><div class="ghIc" style="background:linear-gradient(135deg,#5865F2,#4752c4)">${discordIcon}</div><div style="flex:1"><b style="font-size:13px">Join Discord</b><br><span style="font-size:10px;color:#8b92c9">Community • Tickets</span></div><div>↗</div></div>
    </div>
  </div>
  <div id="ghDcModal"><div style="width:340px;background:linear-gradient(180deg,#0f1333 0%,#0a0e26 100%);border:1px solid rgba(139,92,246,0.3);border-radius:20px;padding:20px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.5)"><div style="width:56px;height:56px;margin:0 auto 14px;border-radius:14px;background:linear-gradient(135deg,#5865F2,#4752c4);display:flex;align-items:center;justify-content:center">${discordIcon}</div><div style="color:white;font-size:15px;font-weight:800;margin-bottom:8px">Welcome to GEARHAVEN!</div><div style="color:#8b92c9;font-size:12px;margin-bottom:16px">Contact a <b style="color:white">MANAGER</b> inside.</div><a id="ghDcJoin" href="${DC_INVITE}" target="_blank" style="display:block;width:100%;padding:12px;background:linear-gradient(135deg,#5865F2,#4752c4);color:white;border-radius:12px;text-decoration:none;font-weight:800;margin-bottom:10px">Join Discord →</a><button id="ghDcClose" style="background:transparent;border:0;color:#8b92c9;font-size:12px;cursor:pointer">Cancel</button></div></div>`;

  const s=document.createElement('style'); s.innerHTML=css; document.head.appendChild(s);
  const w=document.createElement('div'); w.innerHTML=html; document.body.appendChild(w);
  
  const btn=document.getElementById('ghBtnNew'), panel=document.getElementById('ghPanelNew'), x=document.getElementById('ghXNew');
  let hoverTimeout, isPinned=false;
  function openPanel(){ clearTimeout(hoverTimeout); panel.classList.add('open'); }
  function closePanel(){ if(isPinned) return; hoverTimeout=setTimeout(()=>panel.classList.remove('open'), 280); }
  btn.addEventListener('mouseenter', openPanel);
  btn.addEventListener('click', ()=>{ isPinned=true; openPanel(); });
  panel.addEventListener('mouseenter', ()=>clearTimeout(hoverTimeout));
  panel.addEventListener('mouseleave', ()=>{ if(!isPinned) closePanel(); });
  x.onclick=()=>{ isPinned=false; panel.classList.remove('open'); };
  document.getElementById('ghDcBtn').onclick=()=>document.getElementById('ghDcModal').classList.add('open');
  document.getElementById('ghDcClose').onclick=()=>document.getElementById('ghDcModal').classList.remove('open');
  document.getElementById('ghDcModal').onclick=(e)=>{ if(e.target.id==='ghDcModal') e.currentTarget.classList.remove('open'); };
  document.getElementById('ghLiveChatBtn').onclick=()=>{ panel.classList.remove('open'); isPinned=false; try{ window.Tawk_API.maximize(); }catch{} };
  document.getElementById('ghWaBtn').onclick=()=>{ try{ fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'whatsapp_lead',source:'website'})}); }catch{} };
  document.getElementById('ghDcJoin').onclick=()=>{ try{ fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'discord_lead',source:'website'})}); }catch{} };
})();
