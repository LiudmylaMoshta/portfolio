$('.nav-pills').click(function () {
    $(this).toggleClass('show');
})

$('a[data-toggle="pill"]').on('shown.bs.tab', function () {
    const parent = $(this).data('parent');
    const item = $(this).parent();
    item.toggleClass('active', true);
    item.prevAll().toggleClass('active', false);
    item.nextAll().toggleClass('active', false);
    $(parent).toggleClass('show', false);
})

// $('[data-clone-btn]').click(function () {
//     $($(this).parent().prevAll().get().reverse()).clone().appendTo('.form-windowsill-wrapper > .top-row-wrapper');
// });
