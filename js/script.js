$(document).ready(function() {
    $('.slider').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arr.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arr_2.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});