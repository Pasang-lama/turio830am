$(document).ready(function(){
    $(".banner").owlCarousel({
        items: 1,
        autoplay : true,
        loop : true,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-up"></i>','<i class="fa-solid fa-arrow-down"></i>']
    });

    $(".best-selling-tours-slider").owlCarousel({
        items: 3,
        loop : true,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        margin: 50
    });
  });