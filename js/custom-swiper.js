$(document).ready(function () {
var swiper = new Swiper('.swiper_bnr', {

  autoplay: {
     delay: 3000,
     disableOnInteraction: false
   },
   //autoplay:false,

  effect: 'fade', //"slide", "fade", "cube", "coverflow", "flip"

  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  speed: 1200,
  mousewheel: false,
  watchSlidesProgress: true,
  parallax: true,
  spaceBetween:0,

  // If we need pagination
   pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper_bnr .swiper-button-next',
    prevEl: '.swiper_bnr .swiper-button-prev',
  },

});

var swiper = new Swiper(".swiper-courses", {
  slidesPerView: 1,
  spaceBetween: 15,
    mousewheel: false,
    speed:1200,
  centeredSlides: false,
  freeMode: false,
  grabCursor: true,
  loop: false,
 // autoplay:false,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".spresence .swiper-button-next",
    prevEl: ".spresence .swiper-button-prev"
 
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
         spaceBetween: 20
        
    },
    768: {
      slidesPerView: 1.1,
         spaceBetween: 20
      
    },
     
      992: {
      slidesPerView: 1,
         
      
    },
     
  }
});  
    
    });