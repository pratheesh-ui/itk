
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#header').addClass('header-active');
    } else {
       $('#header').removeClass('header-active');
    }
});   


  
    

   
AOS.init({
  duration: 1200,
  once: true,
})