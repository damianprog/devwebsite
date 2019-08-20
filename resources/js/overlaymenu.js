window.addEventListener('resize', setMediaElements);

let overlay = document.querySelector(".overlay");
let hamburger = document.querySelector(".hamburger");


function setMediaElements() {
    if(document.documentElement.clientWidth > 928) {
        hamburger.style.display = "none";
        overlay.style.width = "0";
    } else if (document.documentElement.clientWidth <= 928 && overlay.clientWidth === 0){
        hamburger.style.display = "block";
    }
}

function openNav() {
    if (overlay.clientWidth === 0) {
        overlay.style.width = "100%";
        hamburger.style.display = "none";
    } else {
        overlay.style.width = "0";
        hamburger.style.display = "block";
    }

}