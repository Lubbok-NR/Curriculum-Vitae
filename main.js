document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards-banner-1', { delay: 500 });
ScrollReveal().reveal('.cards-banner-2', { delay: 500 });
ScrollReveal().reveal('.cards-banner-3', { delay: 500 });
ScrollReveal().reveal('.social', { delay: 500 });