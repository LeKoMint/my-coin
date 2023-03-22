// Carusel
const owl = $('.owl-carousel');
owl.owlCarousel(
   {
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                },

            501: {
                items: 2,
                },

            801: {
                items: 3,
                }
    },
    
});


$('.header-slider__carusel__next').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.header-slider__carusel__prew').click(function() {
    owl.trigger('prev.owl.carousel');
})
// dots
$('.slider-dot dot--active').click(function() {
    owl.trigger('owl-dot active');
})
$('.slider-dot').click(function() {
    owl.trigger('owl-dot');
})

