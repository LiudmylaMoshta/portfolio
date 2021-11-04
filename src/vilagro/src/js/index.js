window.$ = window.jQuery = require('jquery');
require('bootstrap');
require('slick-carousel');
require('@fortawesome/fontawesome-free/js/all');
require('../style/index.scss');
require('@fancyapps/ui/dist/fancybox.umd');
require('./images');

import hToggler from "./hToggler";
hToggler();



$('.slider-for-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: '.slider-nav-gallery',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        },
    ]
});

$('.slider-nav-gallery').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for-gallery',
    dots: true,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1299,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                // autoplay: true,
                // autoplaySpeed: 5000,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: false,
            }
        }
    ]
});


$('.slider-for-gallery-4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    asNavFor: '.slider-nav-gallery-4',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        },
    ]
});

$('.slider-nav-gallery-4').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for-gallery-4',
    dots: true,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1299,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: false,
            }
        }
    ]
});


$('.slider-idea').slick({
    // infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1299,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                centerMode: false,
                variableWidth: false,
                autoplaySpeed: 5000,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                centerMode: false,
                variableWidth: false,
                autoplaySpeed: 5000,
            }
        },
    ]
});
$('.slider-interior').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: false,
    autoplaySpeed: 5000,
        responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // autoplay: true,
                autoplaySpeed: 5000,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // autoplay: true,
                autoplaySpeed: 5000,
            }
        },
    ]
});

$('.slider-list-reviews').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // infinite: false,
    autoplaySpeed: 5000,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // autoplay: true,
                autoplaySpeed: 5000,
            }
        },
    ]
});
$('.slider-reviews-internet').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // infinite: false,
    autoplaySpeed: 5000,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // autoplay: true,
                autoplaySpeed: 5000,
            }
        },
        {
            breakpoint: 1299,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                // autoplay: true,
                autoplaySpeed: 5000,
            }
        },
    ]
});


var btn = $('#button'); //создаем переменную для кнопки

$(window).scroll(function() {
    if ($(window).scrollTop() > 500) { //отслеживаем высоту от верха страницы в 500px
        btn.addClass('show'); // присваиваем кнопке класс show для управления видимостью
    } else {
        btn.removeClass('show'); // если меньше 500px от верха страницы убираем класс show
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300'); //при клике на кнопку плавно прокручиваем до верха body
});


function itemSlider (classSlider, classCaunter) {
    $(classSlider).on('afterChange', function(event, slick, currentSlide){
        $(classCaunter).text(currentSlide + 1);
    });
}

itemSlider('.slider-list-reviews', '.number');
itemSlider('.slider-number-item', '.number2');
itemSlider('.slider-interior-wrapper', '.number3');
itemSlider('.slider-reviews-internet', '.number4');