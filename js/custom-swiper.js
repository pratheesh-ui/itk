const swiper = new Swiper('.swiper', {

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
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});