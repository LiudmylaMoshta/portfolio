const $ = require('jquery');
require('bootstrap');
require('@fortawesome/fontawesome-free/js/all');
require('../css/main.scss');
require('holderjs/holder');
require('slick-carousel/slick/slick');
require('./slider');

$('.slider-logo').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
