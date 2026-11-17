const overlay=document.getElementById('mailOverlay');
const mail=document.getElementById('mail3d');
const showMail=document.getElementById('showMail');
const closeMail=document.getElementById('closeMail');
const readInvite=document.getElementById('readInvite');
function openEnvelope(){overlay.classList.add('active');overlay.setAttribute('aria-hidden','false');mail.classList.remove('opened');hearts(innerWidth/2,innerHeight/2,16)}
function hideEnvelope(){overlay.classList.remove('active');overlay.setAttribute('aria-hidden','true');mail.classList.remove('opened')}
showMail.addEventListener('click',openEnvelope);
closeMail.addEventListener('click',hideEnvelope);
overlay.querySelector('.overlay-shade').addEventListener('click',hideEnvelope);
mail.addEventListener('click',()=>mail.classList.add('opened'));
readInvite.addEventListener('click',e=>{e.stopPropagation();mail.classList.add('opened');setTimeout(()=>{hideEnvelope();document.getElementById('invitation').scrollIntoView({behavior:'smooth'})},900)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')hideEnvelope()});

const audio=document.getElementById('bgMusic');
document.getElementById('musicBtn').addEventListener('click',async()=>{
 const label=document.getElementById('musicText');
 if(audio.paused){try{await audio.play();label.textContent='MUSIC ON'}catch{label.textContent='ADD MUSIC.MP3'}}
 else{audio.pause();label.textContent='MUSIC OFF'}
});

// Wedding date: 9 January 2027, 10:00 AM IST. Change the time if required.
const target=new Date('2027-01-09T10:00:00+05:30').getTime();
function tick(){
 const left=target-Date.now();
 if(left<=0){document.querySelector('.countdown').innerHTML='<p>Our forever begins today! ♥</p>';return}
 const vals={days:Math.floor(left/86400000),hours:Math.floor(left%86400000/3600000),minutes:Math.floor(left%3600000/60000),seconds:Math.floor(left%60000/1000)};
 for(const [id,val] of Object.entries(vals)){const el=document.getElementById(id);if(el)el.textContent=String(val).padStart(id==='days'?3:2,'0')}
}
tick();setInterval(tick,1000);

function hearts(x,y,count=10){
 for(let i=0;i<count;i++){const h=document.createElement('span');h.className='heart-particle';h.textContent=Math.random()>.35?'♥':'✦';h.style.left=x+'px';h.style.top=y+'px';h.style.fontSize=(12+Math.random()*15)+'px';h.style.setProperty('--drift',(Math.random()-.5)*230+'px');h.style.animationDelay=(Math.random()*.25)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),1900)}
}
document.addEventListener('click',e=>{if(e.target.closest('button'))hearts(e.clientX,e.clientY,7)});
document.getElementById('yesBtn').addEventListener('click',()=>{document.getElementById('rsvpMessage').textContent='We cannot wait to celebrate with you! ♥';hearts(innerWidth/2,innerHeight*.75,20)});
document.getElementById('blessBtn').addEventListener('click',()=>{location.href='mailto:?subject='+encodeURIComponent('Wedding blessings for Roopa & Saju RS')+'&body='+encodeURIComponent('Wishing you a lifetime of love and happiness!')});

// Generate a light star field so the welcome scene feels alive.
const starLayer=document.getElementById('stars');
for(let i=0;i<38;i++){const s=document.createElement('i');s.style.cssText=`position:absolute;left:${Math.random()*100}%;top:${Math.random()*75}%;width:${Math.random()*2+1}px;height:${Math.random()*2+1}px;border-radius:50%;background:#fff4f7;opacity:${Math.random()*.7+.2};box-shadow:0 0 8px #ffd8e5;animation:twinkle ${2+Math.random()*4}s ease-in-out ${Math.random()*3}s infinite alternate`;starLayer.appendChild(s)}
const style=document.createElement('style');style.textContent='@keyframes twinkle{to{opacity:.18;transform:scale(.55)}}';document.head.appendChild(style);

// Scroll-in reveals
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.15});
document.querySelectorAll('.section .eyebrow,.section h2,.body-copy,.detail,.glass-invite').forEach(el=>{el.classList.add('scroll-reveal');revealObserver.observe(el)});
const revealCSS=document.createElement('style');revealCSS.textContent='.scroll-reveal{opacity:0;transform:translateY(22px);transition:opacity .8s ease,transform .8s ease}.scroll-reveal.visible{opacity:1;transform:translateY(0)}';document.head.appendChild(revealCSS);

const music = document.getElementById("bgMusic");

function startMusic() {
    music.play().catch(error => {
        console.log("Music playback blocked by browser");
    });
}


document.addEventListener("click", function () {
    startMusic();
}, { once: true });