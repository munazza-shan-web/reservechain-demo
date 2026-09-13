const waitlist=document.querySelector('#waitlistForm');
if(waitlist){waitlist.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(waitlist);const entry={name:d.get('name'),email:d.get('email'),type:d.get('type'),ts:new Date().toISOString()};let list=JSON.parse(localStorage.getItem('reservechain_waitlist')||'[]');list.push(entry);localStorage.setItem('reservechain_waitlist',JSON.stringify(list));waitlist.reset();document.querySelector('#formMsg').style.display='block';});}
const y=document.querySelector('#year'); if(y)y.textContent=new Date().getFullYear();
