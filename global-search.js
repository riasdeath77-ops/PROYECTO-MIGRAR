let allCache=null;
async function getAllProducts(){
 if(allCache) return allCache;
 let list=[];
 try{
   let r=await fetch('./all_services.json?v='+Date.now());
   if(r.ok){
     let data=await r.json();
     for(let cat in data){ data[cat].forEach(p=> list.push({...p, category:cat})); }
   }
 }catch(e){}
 allCache=list; return list;
}
async function doSearch(q, boxId){
 let box=document.getElementById(boxId); if(!box) return;
 if(q.length<2){ box.classList.add('hidden'); return; }
 let all=await getAllProducts();
 let m=all.filter(p=> p.title.toLowerCase().includes(q) || p.sub.toLowerCase().includes(q)).slice(0,10);
 if(m.length==0){ box.innerHTML=`<div class="p-4 text-[11px] text-center">No results</div>`; }
 else{
   box.innerHTML=m.map(p=>`<a href="${p.link}" class="flex gap-3 p-3 hover:bg-[#1a204f] border-b"><img src="${p.img}" class="w-[36px] h-[36px] rounded"><div class="flex-1"><div class="text-[11px] font-bold">${p.title}</div><div class="text-[9px] text-[#8b92c9]">${p.sub} - $${p.price}</div></div></a>`).join('');
 }
 box.classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded',()=>{
 document.getElementById('globalSearch')?.addEventListener('input', function(){ doSearch(this.value.toLowerCase().trim(),'globalResults'); });
 document.getElementById('globalSearchMobile')?.addEventListener('input', function(){ doSearch(this.value.toLowerCase().trim(),'globalResultsMobile'); });
});