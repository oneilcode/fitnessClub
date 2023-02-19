"use strict";

const swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
   },
});