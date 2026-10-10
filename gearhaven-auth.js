// gearhaven-auth.js - SISTEMA UNICO PARA TODAS LAS PAGINAS
// Guardalo en la raiz junto a index.html como gearhaven-auth.js
// Luego en cada HTML pon: <script src="./gearhaven-auth.js"></script> antes de </body>

function ghDetectNavUser(){
  try{
    let raw = localStorage.getItem('gearhaven_current_user');
    if(!raw) return null;
    let u = JSON.parse(raw);
    if(!u || u.logged===false) return null;
    return u;
  }catch(e){ return null; }
}

function ghUpdateNavUser(){
  let guest = document.getElementById('ghNavUserGuest');
  let logged = document.getElementById('ghNavUserLogged');
  if(!guest ||!logged) return;
  let u = ghDetectNavUser();
  if(u){
    guest.classList.add('hidden'); guest.classList.remove('flex');
    logged.classList.remove('hidden'); logged.classList.add('flex');
    let name = u.username || u.name || (u.email? u.email.split('@')[0] : 'User');
    let elName = document.getElementById('ghNavName');
    let elAvatar = document.getElementById('ghNavAvatar');
    let elDropName = document.getElementById('ghDropName');
    let elDropEmail = document.getElementById('ghDropEmail');
    if(elName) elName.innerText = name;
    if(elAvatar) elAvatar.innerText = name.charAt(0).toUpperCase();
    if(elDropName) elDropName.innerText = name;
    if(elDropEmail) elDropEmail.innerText = u.email || '';
  } else {
    guest.classList.remove('hidden'); guest.classList.add('flex');
    logged.classList.add('hidden'); logged.classList.remove('flex');
    let dd = document.getElementById('ghUserDropdown');
    if(dd) dd.classList.add('hidden');
  }
}

function ghToggleUserMenu(e){
  if(e){ e.preventDefault(); e.stopPropagation(); }
  let dd = document.getElementById('ghUserDropdown');
  if(dd) dd.classList.toggle('hidden');
}

function ghLogout(e){
  if(e){ e.preventDefault(); e.stopPropagation(); }
  let cart = localStorage.getItem('gearhaven_cart');
  let lang = localStorage.getItem('gearhaven_lang');
  localStorage.removeItem('gearhaven_current_user');
  localStorage.removeItem('gearhaven_user');
  localStorage.removeItem('currentUser');
  localStorage.removeItem('user');
  localStorage.removeItem('gearhaven_accounts');
  localStorage.removeItem('gearhaven_session');
  sessionStorage.clear();
  if(cart) localStorage.setItem('gearhaven_cart', cart);
  if(lang) localStorage.setItem('gearhaven_lang', lang);

  if(location.pathname.includes('account')){
    location.href = './index.html';
  } else {
    location.reload();
  }
}
function logout(e){ ghLogout(e); }

document.addEventListener('click', function(e){
  let w = document.getElementById('ghNavUserWrap');
  if(w &&!w.contains(e.target)){
    let dd = document.getElementById('ghUserDropdown');
    if(dd) dd.classList.add('hidden');
  }
});

document.addEventListener('DOMContentLoaded', ghUpdateNavUser);
setTimeout(ghUpdateNavUser, 300);

// BOTON GLOBAL MIDNIGHT - aparece en todas menos en midnight.html
(function(){
  if(location.pathname.includes('midnight')) return;
  document.addEventListener('DOMContentLoaded', function(){
    let btn = document.createElement('button');
    btn.id = 'ghMidnightReturn';
    btn.innerHTML = '&#x1F319; Midnight';
    btn.onclick = () => location.href = './midnight.html';
    btn.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:9999; background:linear-gradient(135deg,#8b5cf6,#4c1d95); color:white; border:1px solid #8b5cf6; padding:12px 18px; border-radius:999px; font-weight:900; font-size:11px; letter-spacing:0.5px; box-shadow:0 8px 25px rgba(139,92,246,0.4); cursor:pointer; transition:all 0.2s;';
    btn.onmouseenter = () => btn.style.transform = 'scale(1.05)';
    btn.onmouseleave = () => btn.style.transform = 'scale(1)';
    document.body.appendChild(btn);
  });
})();