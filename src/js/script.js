$(document).ready(function(){
   $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<img class ="carousel__btn-prev" src="img/carousel/chevron-left-solid.png" alt="chevron-left">',
      nextArrow: '<img class ="carousel__btn-next" src="img/carousel/chevron-right-solid.png" alt="chevron-left">',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               arrows: false
            }
         }
      ]
   });

 });
    