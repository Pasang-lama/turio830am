$(document).ready(function(){
    // $(".banner").owlCarousel({
    //     items: 1,
    //     autoplay : true,
    //     loop : true,
    //     nav: true,
    //     dots: false,
    //     // margin : 20,
    //     navText: ['<i class="fa-solid fa-arrow-up"></i>','<i class="fa-solid fa-arrow-down"></i>']
    // });

    $(".best-selling-tours-slider").owlCarousel({
        items: 3,
        loop : true,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        margin: 40,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            991 : {
                items: 3,
            }
        }
    });
  });