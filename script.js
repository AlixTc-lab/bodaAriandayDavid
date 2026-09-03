/*======================================================
CUENTA REGRESIVA
David & Ariadna
09 de enero de 2027 - 2:30 PM
======================================================*/

const fechaEvento = new Date(2027, 0, 9, 14, 30, 0).getTime();

function actualizarContador(){

const ahora = new Date().getTime();

const diferencia = fechaEvento - ahora;

if(diferencia <= 0){

    document.getElementById("dias").textContent = "00";
    document.getElementById("horas").textContent = "00";
    document.getElementById("minutos").textContent = "00";
    document.getElementById("segundos").textContent = "00";

    return;
}

const dias = Math.floor(
    diferencia / (1000 * 60 * 60 * 24)
);

const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
);

const minutos = Math.floor(
    (diferencia % (1000 * 60 * 60))
    / (1000 * 60)
);

const segundos = Math.floor(
    (diferencia % (1000 * 60))
    / 1000
);

document.getElementById("dias").textContent =
    String(dias).padStart(2,"0");

document.getElementById("horas").textContent =
    String(horas).padStart(2,"0");

document.getElementById("minutos").textContent =
    String(minutos).padStart(2,"0");

document.getElementById("segundos").textContent =
    String(segundos).padStart(2,"0");

}

actualizarContador();

setInterval(actualizarContador,1000);

/*======================================================
LUCIÉRNAGAS
======================================================*/

const stars = document.querySelector(".stars");

if(stars){

for(let i = 0; i < 160; i++){

    const s = document.createElement("div");

    s.classList.add("star");

    s.style.left =
        Math.random() * 100 + "%";

    s.style.animationDuration =
        (Math.random() * 8 + 5) + "s";

    s.style.animationDelay =
        (Math.random() * 5) + "s";

    s.style.width =
        (Math.random() * 3 + 1) + "px";

    s.style.height =
        s.style.width;

    stars.appendChild(s);

}

}

/*======================================================
MÚSICA
======================================================*/

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

if(music && btn){

btn.addEventListener("click", () => {

    if(music.paused){

        music.play()
            .then(() => {
                btn.innerHTML = "🔊";
            })
            .catch(() => {
                btn.innerHTML = "🎵";
            });

    }else{

        music.pause();

        btn.innerHTML = "🎵";

    }

});

}

/*======================================================
GALERÍA SWIPER
======================================================*/

new Swiper(".miGaleria", {

loop:true,

centeredSlides:true,

slidesPerView:1,

spaceBetween:20,

autoplay:{
    delay:3000,
    disableOnInteraction:false
},

pagination:{
    el:".swiper-pagination",
    clickable:true
},

navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
},

breakpoints:{

    768:{
        slidesPerView:2,
        spaceBetween:25
    }

}

});