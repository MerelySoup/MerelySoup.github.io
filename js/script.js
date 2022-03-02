$(function() {
    $('.gallery__slider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: true,
        waitForAnimate: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});