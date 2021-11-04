import $ from 'jquery';
import 'slick-carousel';
import 'bootstrap';

export default () => {
    const repairSliderConfig = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 991,
                settings: 'unslick'
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    sToScroll: 1,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    };
    const repairSlider = $('.list-category-repair');
    if (window.innerWidth < 991) {
        repairSlider.slick(repairSliderConfig);
        $('[data-toggle="tab"]').on('show.bs.tab', function (e) {
            $('.active[data-toggle="tab"]:not(#'+e.target.id+')').removeClass('active');
        })
    }

    $(window).resize(function () {
        if (window.innerWidth < 992 && !repairSlider.hasClass('slick-initialized')) {
            repairSlider.slick(repairSliderConfig);
            $('[data-toggle="tab"]').on('show.bs.tab', function (e) {
                $('.active[data-toggle="tab"]:not(#'+e.target.id+')').removeClass('active');
            })
        }
    })
}
