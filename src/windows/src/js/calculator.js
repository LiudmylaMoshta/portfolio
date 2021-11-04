const categoryList = $('.form-category input[type="radio"]');

$(document).ready(function () {
    document.dispatchEvent(new Event('init-category'))
});

function checkCategory() {
    categoryList.each(function () {
        let categoryItem = $(this);

        if (categoryItem.prop('checked')) {
            categoryItem.parent().removeClass('d-none');
        }
    });
}

document.addEventListener('init-category', () => {
    checkCategory()
}) ;

categoryList.click(function () {
    $('.form-category-item').toggleClass('d-none');
    checkCategory();
});

categoryList.change(function () {
    $('.form-category-item:not(.d-none)').addClass('d-none');
    checkCategory();
});

$('.category-window, .category-balcony, .category-french-balcony, .category-exit-balcony').on('hide.bs.collapse hidden.bs.collapse', function () {
    const el = $(this);

    if($('#' + $('#' + el.attr('aria-labelledby')).attr('for')).prop('checked')) {
        el.collapse('show');
    }
});

$('input[type=radio][name=furniture-type]').change(function () {
    const el = $(this);

    $('#preview').attr('class', 'furniture-type-' + el.val());
});
$('.mobile-select').click(function () {
    const el = $(this);

    if (window.innerWidth < 992) {
        el.toggleClass('show');
    }
    $('#' + el.attr('id') + ' input[type=radio]:not(:checked)').parent().toggleClass('d-none');

})
$('.mobile-select label').click(function(event){
    event.stopPropagation();
});

$('.brands input[type=radio]').change(function () {
    const el = $(this);
    const models = $('#models input[type=radio][data-brand='+el.val()+']')

    models.first().prop('checked', true);
    models.first().parent().toggleClass('d-none')

    $('#models input[type=radio]:checked').parent().toggleClass('d-none')
    $('#models input[type=radio]:not([data-brand='+el.val()+'])').parent().toggleClass('mobile-d-none', true)
    models.parent().toggleClass('mobile-d-none', false)
})

$('#models input[type=radio]').change(function () {
    const el = $(this);
    const model = $('#brands input[type=radio][value='+el.data('brand')+']:not(:checked)')

    model.prop('checked', true);
    model.parent().toggleClass('d-none', false)
    el.parent().toggleClass('d-none', false);
    $('#models input[type=radio]:not(:checked)').parent().toggleClass('d-none', true)
    $('#brands input[type=radio]:not([value='+el.data('brand')+'])').parent().toggleClass('d-none', true)
});
