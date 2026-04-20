
const hamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("nav-menu");
const linksMenu = document.querySelectorAll(".nav-menu a");

if (hamburguesa && menu) {
    hamburguesa.addEventListener("click", () => {
        menu.classList.toggle("active");
        hamburguesa.classList.toggle("active");
    });
}

linksMenu.forEach(link => {
    link.addEventListener("click", () => {
        if (menu && hamburguesa) {
            menu.classList.remove("active");
            hamburguesa.classList.remove("active");
        }
    });
});

const track = document.getElementById("carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function updateCarousel() {
    if (!track) return;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

if (nextBtn && prevBtn && slides.length > 0) {
    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        updateCarousel();
    });
});

let startX = 0;
let endX = 0;

const trackContainer = document.querySelector(".carousel-track-container");

if (trackContainer) {
    trackContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    trackContainer.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
}

function handleSwipe() {
    const diff = startX - endX;
    const minSwipeDistance = 50;

    if (Math.abs(diff) < minSwipeDistance) return;

    if (diff > 0) {
        currentSlide = (currentSlide + 1) % slides.length;
    } else {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }

    updateCarousel();
}