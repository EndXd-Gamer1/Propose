const yes=document.getElementById("yes");
const no=document.getElementById("no");
const card=document.getElementById("card");
const yesSound=document.getElementById("yesSound");
const noSound=document.getElementById("noSound");
const laughSound=document.getElementById("laughSound");

function unlock(){
const p=document.getElementById("pass").value;
if(p==="love"){
document.getElementById("lock").style.display="none";
card.classList.remove("hidden");
}else{
document.getElementById("wrong").innerText="Wrong 💔";
}
}

/* no chase */
function moveNo(){
noSound.currentTime=0;
noSound.play();
const area=document.querySelector(".buttons");
no.style.left=Math.random()*(area.clientWidth-no.offsetWidth)+"px";
no.style.top=Math.random()*(area.clientHeight-no.offsetHeight)+"px";
}
no.addEventListener("mouseenter",moveNo);
no.addEventListener("touchstart",moveNo);

/* fireworks */
function fireworks(){
for(let i=0;i<80;i++){
const f=document.createElement("div");
f.innerHTML="🎆";
f.style.position="absolute";
f.style.left="50%";
f.style.top="50%";
f.style.transition="1.4s";
document.body.appendChild(f);
const x=(Math.random()-0.5)*600;
const y=(Math.random()-1)*600;
setTimeout(()=>{f.style.transform=`translate(${x}px,${y}px)`;f.style.opacity=0},20);
setTimeout(()=>f.remove(),1400);
}
}

/* laughing rain */
function laughRain(){
for(let i=0;i<60;i++){
const e=document.createElement("div");
e.className="laugh";
e.innerHTML="😂";
e.style.left=Math.random()*100+"vw";
e.style.animationDuration=2+Math.random()*3+"s";
document.body.appendChild(e);
setTimeout(()=>e.remove(),5000);
}
}

yes.onclick=()=>{
showMeme();
};



function showMeme(){
fireworks();
laughRain();

document.getElementById("laughSound").play();

card.innerHTML=`
<div class="memeBox">😂🤣😜</div>
<div class="memeText">Kaisa laga mera majak</div>
`;
}
