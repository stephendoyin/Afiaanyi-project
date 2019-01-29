function secondSlide() {
    let secondSlide = $('.gallery-img');

    secondSlide.animate({ left: '0%' }, 2000, function () {

        secondSlide.css('left', '-54%');

        $('.gallery__img').first().before($('.gallery__img').last());
        $('.gallery__img').last().after($('.gallery__img ').first());
    });
}





    function thirdSlider() {
        let thirdSlide = $('.gallery-img');

        thirdSlide.animate({ left: '-108%' }, 2000, function () {

            thirdSlide.css('left', '-54%');

            $('.gallery__img').last().after($('.gallery__img ').first());
        });
    }

    setInterval(thirdSlider, 9000);

