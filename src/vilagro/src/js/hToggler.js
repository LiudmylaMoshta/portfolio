import $ from 'jquery';

export default () => {
    let nav1 = $('.navbar-collapse-1');
    let nav2 = $('.navbar-collapse-2');
    $('.close').click(() => {
        $('.navbar-collapse-close').collapse('hide');
    });

    nav1.on('show.bs.collapse', () => {
        $('.navbar-collapse-call').collapse('show')
    });
    nav2.on('show.bs.collapse', () => {
        $('.navbar-collapse-call').collapse('show')
    });
    nav1.on('hide.bs.collapse', () => {
        $('.navbar-collapse-call').collapse('show')
    });
    nav2.on('hide.bs.collapse', () => {
        $('.navbar-collapse-call').collapse('show')
    });

}