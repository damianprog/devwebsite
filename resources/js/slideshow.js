let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.querySelectorAll(".hq-slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    slides[slideIndex].style.opacity = 1;

    slideIndex++;

    if (slideIndex === slides.length) {
        slideIndex = 0
    }

    setTimeout(showSlides, 6000);
}
