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

            551: {
                items: 2,
                },

            801: {
                items: 3,
                },

            1451: {
                items: 4,
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

// Filter

const selectsFilter = document.querySelectorAll('.select-filter');
const selectsFilterActiv = document.querySelectorAll('.select-filter-active');
const selectFilterHeader = document.querySelectorAll('.select-filter__header');
const closeFilterContainer = document.querySelector('.filter-header__close');
const openFilterContainer = document.querySelector('#open_filter_container');
const sectionFilter = document.querySelector('#section_filter');


// Open-close FILTER
openFilterContainer.addEventListener('click', function() {
    openFilterContainer.classList.toggle('none');
    sectionFilter.classList.toggle('none');

})

closeFilterContainer.addEventListener('click', function() {
    openFilterContainer.classList.toggle('none');
    sectionFilter.classList.toggle('none');
})


console.log(openFilterContainer);
// Open-close SELECTS FILTER
selectsFilter.forEach(element => {
    element.addEventListener('click', function() {
        element.classList.toggle('none');
        element.nextElementSibling.classList.toggle('none');

        });
    });

selectFilterHeader.forEach(element => {
    element.addEventListener('click', function() {
        element.parentElement.previousElementSibling.classList.toggle('none');
        element.parentElement.classList.toggle('none');

    })
});






        
