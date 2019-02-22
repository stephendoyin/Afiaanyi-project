// function secondSlide() {
//     let secondSlide = $('.gallery-img');

//     secondSlide.animate({ left: '0%' }, 500, function () {

//         secondSlide.css('left', '-54%');

//         $('.gallery__img').first().before($('.gallery__img').last());
//         $('.gallery-label').last().after($('.gallery-label').first());
//     });
// }




//     function thirdSlider() {
//         let thirdSlide = $('.gallery-img');

//         thirdSlide.animate({ left: '-108%' }, 500, function () {

//             thirdSlide.css('left', '-54%');

//             $('.gallery__img').last().after($('.gallery__img ').first());
//             $('.gallery-label').first().before($('.gallery-label').last());
//         });
//     }

//     setInterval(thirdSlider, 9000);

    

//         

//         previous.addEventListener("click", function(){
//             console.log("it")
//             secondSlide();
//         });
//         next.addEventListener("click", function(){

//             thirdSlider();

//         });

let sliderInnerWrapper = $(".gallery-img_inner_wrapper");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let slider = $(".gallery-img-inner");

console.log(slider.length);

if (slider.length  > 2) {
    let widthOfInnerContainer = slider.length * 50;
    let finalWidth = widthOfInnerContainer + "%";
    sliderInnerWrapper.css("width", finalWidth);
} else {
    sliderInnerWrapper.css("width", "100%");
    sliderInnerWrapper.css('left', '0%');
}


function nextSlider() {
    sliderInnerWrapper.animate({ left: '-100%' }, 400, function () {
        sliderInnerWrapper.css('left', '-50%');
        $('.gallery-img-inner').last().after($('.gallery-img-inner').first());
        $(".gallery-label").first().before($('.gallery-label').last());
    });
}

function previousSlider() {
    sliderInnerWrapper.animate({ left: '0%' }, 400, function () {
        sliderInnerWrapper.css('left', '-50%');
        $('.gallery-img-inner').first().before($('.gallery-img-inner').last());
    });
}


next.addEventListener("click", function () {
    if (slider.length > 2) {
        nextSlider();
    } else {
        return;
    }
});

previous.addEventListener("click", function () {
    if (slider.length > 2) {
        previousSlider();
    } else {
        return;
    }
});

setInterval(nextSlider, 9000);