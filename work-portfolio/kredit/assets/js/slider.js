require('bootstrap-slider/dist/bootstrap-slider');

let sliderRange = $(".range-slider"),
    mobileTickPosition = [0, 10, 50, 90, 100 ],
    desktopTickPosition = [0, 6, 50, 94, 100 ],
    slideConfig = {
        '#range-money': {
            step: 100,
            value: 80000,
            ticks: [0, 10000, 150000, 300000, 310000],
            ticks_labels: ["", "10.000", "150.000", "300.000", ""],
            ticks_positions: mobileTickPosition
        },
        '#range-days': {
            step: 1,
            value: 18,
            ticks: [0, 1, 18, 36, 37],
            ticks_labels:["", "1", "18", "36", ""],
            ticks_positions: mobileTickPosition
        }
    };


sliderRange.each(function () {
    let el = $(this),
        rangeValue = $(el.data('input')),
        config = slideConfig[el.data('input')];

    config.ticks_positions = window.innerWidth < 768 ? mobileTickPosition : desktopTickPosition;
    el.slider(config);

    rangeValue.val(el.slider('getValue'));
    el.on('change', (e) => {
        rangeValue.val(e.value.newValue);
    });

    rangeValue.change((e) => {
        el.slider('setValue', $(e.target).val());
    });
});

$(window).resize(function () {
    console.log(window.innerWidth);
    sliderRange.each(function () {
        let el = $(this);

        el.slider(
            'setAttribute',
            'ticks_positions',
            window.innerWidth < 768 ? mobileTickPosition : desktopTickPosition
        );
    });
});
