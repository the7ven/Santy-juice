// Menu hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Fermer le menu au clic sur un lien
document.querySelectorAll(".nav-menu li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

function goToSlide(index) {
  showSlide(index);
}

// Auto-play slider
setInterval(() => {
  changeSlide(1);
}, 5000);
