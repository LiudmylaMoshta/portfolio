import $ from 'jquery';

export default () => {
    $('.list-price-repair-title').click(function () {
        $(this).toggleClass('opened');
        $(this).next().toggleClass('opened')
    });
}