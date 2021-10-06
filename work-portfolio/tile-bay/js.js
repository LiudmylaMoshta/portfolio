$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1,
                vertical: false,
            }
        }
    ]
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    // dots: true,
    // centerMode: true,
    // focusOnSelect: true,
    vertical: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                vertical: false,
                arrows: false,
            }
        },
        {
            breakpoint: 360,
            settings: {
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: false,
                arrows: false,
            }
        }
    ]
});






$('.slider-list-catalog').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 499,
            settings: {
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});
