const header = $('header');
let headerPosition = $(window).scrollTop();
const offcanvasMenu = $('.offcanvas-collapse');
const offcanvasButton = $('.navbar-toggler[data-toggle="offcanvas"]');

$(window).on('scroll', function () {
    const scrolled = $(this).scrollTop();

    if (offcanvasMenu.hasClass('open')) {
        offcanvasButton.click();
    }

    if (true === header.hasClass('header-hide') && scrolled < headerPosition){
        header.removeClass('header-hide');
    } else if (false === header.hasClass('header-hide') && header.offset().top > headerPosition) {
        header.addClass('header-hide');
    }
    headerPosition = scrolled;
});
