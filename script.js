function scrollDown(){
window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});
}

const text =
"Hari ini adalah hari spesial. Hari dimana kamu lahir di dunia ini.... Davina Anindya Azahra";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

function createSakura(){

const sakura =
document.createElement("div");

sakura.classList.add("sakura");

sakura.innerHTML = "🌸";

sakura.style.left =
Math.random()*100+"vw";

sakura.style.fontSize =
Math.random()*20+15+"px";

sakura.style.animationDuration =
Math.random()*8+8+"s";

document
.getElementById("sakura-container")
.appendChild(sakura);

setTimeout(()=>{
sakura.remove();
},15000);

}

setInterval(createSakura,350);

const reveal =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveal.forEach(el=>{

const pos =
el.getBoundingClientRect().top;

if(pos < window.innerHeight-100){

el.classList.add("active");

}

});

});