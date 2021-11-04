import $ from 'jquery';
import 'slick-carousel';
import 'bootstrap';

export default () => {
    const vacanciesConf = {
        infinite: false,
        pauseOnHover: false,
        mobileFirst: true,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 767,
                settings: "unslick"
            }
        ]
    };
    const vacanciesWrapper = $('#vacancies-tabs');

    if (window.innerWidth < 768 && !vacanciesWrapper.hasClass('slick-initialization')) {
        vacanciesWrapper.slick(vacanciesConf);

        $('[data-toggle="tab"]').on('show.bs.tab', function (e) {
            $('.active[data-toggle="tab"]:not(#'+e.target.id+')').removeClass('active');
        })
    }

    $(window).resize(function () {
        if (window.innerWidth < 768 && !vacanciesWrapper.hasClass('slick-initialized')) {
            vacanciesWrapper.slick(vacanciesConf);
            $('[data-toggle="tab"]').on('show.bs.tab', function (e) {
                $('.active[data-toggle="tab"]:not(#'+e.target.id+')').removeClass('active');
            })
        }
    });
}
