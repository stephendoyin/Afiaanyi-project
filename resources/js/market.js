

let slideOuterContainer = $(".market__product-wrapper");
let slideInnerContainer = $(".market_product_slider_wrapper");

let sliderz = $(".product_c_f_R");

let widthOfInnerContainer = sliderz.length * 25;

let finalWidth = widthOfInnerContainer + "%";

slideInnerContainer.css("width", finalWidth);

function nextSlider() {
    slideInnerContainer.animate({ left: '-50%' }, 400, function () {
        slideInnerContainer.css('left', '-25%');
        $('.product_c_f_R').last().after($('.product_c_f_R').first());
    });
}

function previousSlider() {
    slideInnerContainer.animate({ left: '0%' }, 400, function () {
        slideInnerContainer.css('left', '-25%');
        $('.product_c_f_R').first().before($('.product_c_f_R').last());
    });
}

// setInterval(nextSlider, 8000);
document.querySelector(".slider__next").addEventListener("click", nextSlider);

document.querySelector(".slider__prev").addEventListener("click", previousSlider);

//second slider
let slideOuterContainerTwo = $(".market__product-wrapper--two");
let slideInnerContainerTwo = $(".market_product_slider_wrapper--two");

let sliderzTwo = $(".product__crf");

let widthOfInnerContainerTwo = sliderzTwo.length * 25;

let finalWidthTwo = widthOfInnerContainerTwo + "%";

slideInnerContainerTwo.css("width", finalWidthTwo);

function nextSliderTwo() {
    slideInnerContainerTwo.animate({ left: '-50%' }, 400, function () {
        slideInnerContainerTwo.css('left', '-25%');
        $('.product__crf').last().after($('.product__crf').first());
    });
}

function previousSliderTwo() {
    slideInnerContainerTwo.animate({ left: '0%' }, 400, function () {
        slideInnerContainerTwo.css('left', '-25%');
        $('.product__crf').first().before($('.product__crf').last());
    });
}

// setInterval(nextSlider, 8000);
document.querySelector(".slider__next--two").addEventListener("click", nextSliderTwo);

document.querySelector(".slider__prev--two").addEventListener("click", previousSliderTwo);


//third slider
// let thirdSliderOuterContainer = $(".")
let thirdSliderInnerContainer = $(".col_wrapper_inner_container");

let sliderzThree = $(".col_wrapper_inner");

let widthOfInnerContainerThree = sliderzThree.length * 50;

let finalWidthThree = widthOfInnerContainerThree + "%";

thirdSliderInnerContainer.css("width", finalWidthThree);

function nextSliderThree() {
    thirdSliderInnerContainer.animate({ left: '-100%' }, 400, function () {
        thirdSliderInnerContainer.css('left', '-50%');
        $('.col_wrapper_inner').last().after($('.col_wrapper_inner').first());
    });
}

function previousSliderThree() {
    thirdSliderInnerContainer.animate({ left: '0%' }, 400, function () {
        thirdSliderInnerContainer.css('left', '-50%');
        $('.col_wrapper_inner').first().before($('.col_wrapper_inner').last());
    });
}

document.querySelector(".slider__next_two").addEventListener("click", nextSliderThree);

document.querySelector(".slider__prev_two").addEventListener("click", previousSliderThree);


let fourthSliderInnerContainer = $(".col_wrapper_inner_container--two");

let sliderzFour = $(".col_wrapper_inner--two");

let widthOfInnerContainerFour = sliderzFour.length * 50;

let finalWidthFour = widthOfInnerContainerFour + "%";

fourthSliderInnerContainer.css("width", finalWidthFour);

function nextSliderFour() {
    fourthSliderInnerContainer.animate({ left: '-100%' }, 400, function () {
        fourthSliderInnerContainer.css('left', '-50%');
        $('.col_wrapper_inner--two').last().after($('.col_wrapper_inner--two').first());
    });

}

function previousSliderFour() {
    fourthSliderInnerContainer.animate({ left: '0%' }, 400, function () {
        fourthSliderInnerContainer.css('left', '-50%');
        $('.col_wrapper_inner--two').first().before($('.col_wrapper_inner--two').last());
    });
}

document.querySelector(".slider__next_three").addEventListener("click", nextSliderFour);

document.querySelector(".slider__prev_three").addEventListener("click", previousSliderFour);



let navLinks = document.querySelectorAll(".market__nav-link");
let navImgs = document.querySelectorAll(".market__nav-link img")

for (let i = 0; i < navImgs.length; i++) {
    navLinks[i].addEventListener("mouseover", function () {
        navImgs[i].src = "resources/img/nav__forward--gold.svg";
    })
    navLinks[i].addEventListener("mouseout", function () {
        navImgs[i].src = "resources/img/nav__forward.svg";
    })
}


let fifthSliderInnerContainer = $(".col_wrapper_inner_container--three");

let sliderzFive = $(".col_wrapper_inner--three");

let widthOfInnerContainerFive = sliderzFive.length * 50;

let finalWidthFive = widthOfInnerContainerFive + "%";

fifthSliderInnerContainer.css("width", finalWidthFive);

function nextSliderFive() {
    fifthSliderInnerContainer.animate({ left: '-100%' }, 400, function () {
        fifthSliderInnerContainer.css('left', '-50%');
        $('.col_wrapper_inner--three').last().after($('.col_wrapper_inner--three').first());
    });
}

function previousSliderFive() {
    fifthSliderInnerContainer.animate({ left: '0%' }, 400, function () {
        fifthSliderInnerContainer.css('left', '-50%');
        $('.col_wrapper_inner--fifth').first().before($('.col_wrapper_inner--fifth').last());
    });
}

document.querySelector(".slider__next_four").addEventListener("click", nextSliderFive);

document.querySelector(".slider__prev_four").addEventListener("click", previousSliderFive);
