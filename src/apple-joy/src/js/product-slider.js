require('../style/item-product.scss');

$('.banner-slider .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    prevArrow: '<button class="slick-prev slick-arrow d-lg-none" aria-label="Previous" type="button" style="">Previous</button>',
    nextArrow: '<button class="slick-next slick-arrow d-lg-none" aria-label="Next" type="button" style="">Next</button>',
    // dots: true,
    dotsClass: "slick-dots dots-lg-hide",
    asNavFor: '.slider-nav'
});
$('.banner-slider .slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical:true,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    verticalSwiping:true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                vertical: false,
            }
        },
    ]
});