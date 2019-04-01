
$(document).ready(function () {
    let owl = $(".owltwo");
    owl.owlCarousel({
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            1180: {
                items: 2,
            }
        },
        autoplay: true,
        loop: true,
        dots: true,
        dotsEach: true,
        autoplayTimeout: 8000
    });

    $('.next').click(function () {
        owl.trigger('next.owl.carousel');
    })


    $('.previous').click(function () {
        owl.trigger('prev.owl.carousel');
    })
});