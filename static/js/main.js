jQuery(document).ready(function ($) {
    jQuery('#portfolios').owlCarousel({
        stagePadding: 400,
        loop: true,
        margin: 66,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            600: {
                items: 1,
                stagePadding: 150
            },
            1000: {
                items: 1,
                stagePadding: 250
            },
            1500: {
                items: 1,
                stagePadding: 400
            }
        }
    });
});
