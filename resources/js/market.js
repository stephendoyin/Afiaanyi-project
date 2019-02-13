
$(document).ready(function () {





    // let productCount = 3;

    // for (let x = 0; x < productCount; x++) {
    //     let card = `
    //         <div class="product__card">
    //         <div class="product-modal">
    //             <div class="product-modal__content">
    //                 <button class="quick-view">Quick View</button>
    //             </div>
    //         </div>
    //         <div class="paper">
    //             <div class="product-image">
    //                 <div class="badge__new-container">
    //                     <div class="badge__new">NEW</div>
    //                 </div>
    //                 <div class="img__overlay">
    //                     <img src="resources/img/ear-phone.jpg" class="product__img" alt="product">
    //                 </div>
    //                 <span class="product__badge"></span>
    //             </div>

    //             <div>
    //                 <span class="brand__name">Google</span>
    //                 <hr>
    //                 <span class="full__brand-name">
    //                     Google Pixel 3 XL, Android 9, 4GB RAM, 64GB ROM...
    //                 </span>

    //                 <div class="price-details">
    //                     <p class="price">
    //                         &#x20A6;500,000
    //                     </p>
    //                     <p class="percentage__off">
    //                         22%
    //                     </p>
    //                 </div>
    //                 <div class="ratings-numbers">
    //                     <div class="ratings">
    //                         <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
    //                         <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
    //                         <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
    //                         <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
    //                         <img src="resources/img/ratins-none.svg" height="10px" width="10px" alt="rating">
    //                     </div>
    //                     <div class="numbers">
    //                         (889)
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     `;
    //     let topProduct = document.querySelectorAll(".market__product-wrapper");
    //     topProduct[0].innerHTML += card;
    //     topProduct[1].innerHTML += card;
    // console.log(topProduct[1])
    // let mrkt = document.querySelector(".mrkt__prd");
    // mrkt.innerHtml += card;
    // };

 



});

let slideOuterContainer = $(".market__product-wrapper");
let slideInnerContainer = $(".market_product_slider_wrapper");

let sliderz = $(".product_c_f_R");
console.log(sliderz);

let widthOfInnerContainer = sliderz.length * 25;

let finalWidth = widthOfInnerContainer + "%";

slideInnerContainer.css("width", finalWidth);

function nextSlider() {
    slideInnerContainer.animate({ left: '-50%' }, 400, function () {
        slideInnerContainer.css('left', '-25%');
        $('.product_c_f_R').last().after($('.product_c_f_R').first());
    });
    console.log("called slideerm next")
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
console.log(sliderzTwo);

let widthOfInnerContainerTwo = sliderzTwo.length * 25;

let finalWidthTwo = widthOfInnerContainerTwo + "%";

slideInnerContainerTwo.css("width", finalWidthTwo);

function nextSliderTwo() {
    slideInnerContainerTwo.animate({ left: '-50%' }, 400, function () {
        slideInnerContainerTwo.css('left', '-25%');
        $('.product__crf').last().after($('.product__crf').first());
    });
    console.log("called slideerm next")
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
console.log(sliderzThree);

let widthOfInnerContainerThree = sliderzThree.length * 50;

let finalWidthThree = widthOfInnerContainerThree + "%";

thirdSliderInnerContainer.css("width", finalWidthThree);

function nextSliderThree() {
    thirdSliderInnerContainer.animate({ left: '-100%' }, 400, function () {
        thirdSliderInnerContainer.css('left', '-50%');
        $('.col_wrapper_inner').last().after($('.col_wrapper_inner').first());
    });
    console.log("called slideerm next")
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
    console.log("called slideerm next");
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
let navImg = document.querySelectorAll(".market__nav-link img")

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function () {
        navImg[i].src = "resources/img/nav__forward--gold.svg";
    })
    navLinks[i].addEventListener("mouseout", function () {
        navImg[i].src = "resources/img/nav__forward.svg";
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
    console.log("called slideerm next");
}

function previousSliderFive() {
    fifthSliderInnerContainer.animate({ left: '0%' }, 400, function () {
        fifthSliderInnerContainer.css('left', '-50%');
        $('.col_wrapper_inner--fifth').first().before($('.col_wrapper_inner--fifth').last());
    });
}

document.querySelector(".slider__next_four").addEventListener("click", nextSliderFive);

document.querySelector(".slider__prev_four").addEventListener("click", previousSliderFive);
