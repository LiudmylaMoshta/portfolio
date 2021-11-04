require('jquery')
require('bootstrap')
require('slick-carousel')
require('@fortawesome/fontawesome-free/js/all');
require('../style/index.scss')
require('./stepper.min.js')
require('bootstrap-slider/src/js/bootstrap-slider')
require('./menu')

let labels = $('label[for="price-range"]').children();
$('#price-range').slider();
$('#price-range').on('slide', function (event) {

    labels.each((key, val) => $(val).html(event.value[key]));

});
$('.slider-product').slick({
    // infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: "unslick"

        },

    ]
});
$('.slider-sales-product').slick({
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

$('.slider-reviews-product').slick({
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});




