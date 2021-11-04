import $ from "jquery";

require('jquery');
require('bootstrap');
require('slick-carousel');
// require('@fortawesome/fontawesome-free/js/all');
require('../style/index.scss');
require('./images');
require('./product-slider')

import toggler from "./toggler";
import vacancies from "./vacancies";
import repair from "./repair";

let productSlickConfig = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                dots: true,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
};

$('.slider-slick-product').slick(productSlickConfig);
$('.tab-top-product a[data-toggle="tab"]').on('shown.bs.tab', function () {
    $('.slider-slick-product').slick('destroy');
    $('.slider-slick-product').slick(productSlickConfig);
});

$('.slider-welcome-banner').slick(
    {
        dots: true
    }
);

// $('.tab-menu li a').on('click', function(){
//     var target = $(this).attr('data-rel');
//     $('.tab-menu li a').removeClass('active');
//     $(this).addClass('active');
//     $("#"+target).fadeIn('slow').siblings(".tab-box").hide();
//     return false;
// });

$('.root-dropdown').hover(function(){
    $('.nav-link.nav-link-toggle[data-toggle="dropdown"]', this).trigger('click');
});


$('.list-product').slick({
    // infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // dots: true,
    settings: "unslick",
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
            }
        },{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
                dots: true,
            }
        }
    ]
});
jQuery('.btn-trade').click( function(e) {
    jQuery('.collapse').collapse('hide');
});

$(function() {
    $(document).click(function (event) {
        $('.menu-mobile').collapse('hide');
    });
});


// $('.pills-wrapper > .nav-pills a[data-toggle="tab"]').on('show.bs.tab', function (e) {
//
//     console.log(e.target);
//     // $('.pills-wrapper > .nav-pills a[data-toggle="tab"]:not(#'+e.target.id+')').removeClass('active');
// });

// //context menu for orders table
// $(document).on("contextmenu", "body", function (event) {
//     //we won't show the default context menu
//     event.preventDefault();
//
//     //showing it close to our cursor
//     $('#menu').dropdown('toggle').css({
//         top: (event.pageY) + "px",
//         left: (event.pageX) + "px"
//     });
// });
toggler();
vacancies();
repair();
