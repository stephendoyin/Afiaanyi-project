let container = document.querySelector(".info-cards__container");

let cardsPerPage = 6;

let card = `
    <div class="info-card__container">

                <div class="card">
                    <div class="info-card__upper-section">
                        <img class="info-card__logo" width="60px" height="60px" src="resources/img/directory/comp-icon.svg">
                        <p class="info-card__title">Rufus Thomas And Company Limited</p>
                        <p class="info-card__content">
                            <span class="info-horizontal"><img class="info-card__icon" src="resources/img/directory/star.svg">4/5 rating</span>
                            <span class="info-horizontal"><img class="info-card__icon info-card__icon--left-space" src="resources/img/directory/like.svg">1
                                review</span>
                            <span class="info-horizontal"><img class="info-card__icon info-card__icon--left-space" src="resources/img/directory/hired.svg">hired
                                1 time</span>
                        </p>
                        <p class="info-card__content">
                            <span class="info-horizontal"><img class="info-card__icon" src="resources/img/directory/verified.svg">Verified info</span>
                            <span class="info-horizontal"><img class="info-card__icon info-card__icon--left-space" src="resources/img/directory/checked.svg">Phone
                                number</span>
                        </p>
                        <p class="info-card__content">
                            <span class="info-horizontal"><img class="info-card__icon" src="resources/img/directory/checked.svg">Email Address</span>
                            <span class="info-horizontal"><img class="info-card__icon info-card__icon--left-space" src="resources/img/directory/checked.svg">Bank
                                Details</span>
                        </p>
                    </div>

                    <div class="info-card__lower-section">
                        <div class="info-card__lower-container">
                            <div class="info-card__phone">
                                <img class="info-card__icon info-card__icon--align" src="resources/img/directory/phone.svg">
                                <span>09099717070</span>
                            </div>
                            <a href="">
                                <img src="resources/img/directory/more.svg">
                            </a>

                        </div>

                    </div>
                </div>
            </div>
    `;

for (let i = 0; i < cardsPerPage; i++) {
    container.innerHTML += card;
}

function swapHeader() {
    //caches a jQuery object containing the header element
    var header = $(".header__top-container");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 210) {
            header.addClass('header__top-container--shadow');
            let img = document.querySelector(".header__top-container img");
            img.src = "resources/img/logo-white.png";
            document.querySelector(".greeting").classList.add("greeting--bg");
            document.querySelector(".user__name").classList.add("user__name--bg");
            let linksHeader = document.querySelectorAll("a.header__nav-link");
            for (let i = 0; i < linksHeader.length; i++) {
                linksHeader[i].classList.add("header__nav-link--bg");
            }
        } else {
            header.removeClass('header__top-container--shadow');
            let img = document.querySelector(".header__top-container img");
            img.src = "resources/img/market-logo.svg";
            document.querySelector(".greeting").classList.remove("greeting--bg");
            document.querySelector(".user__name").classList.remove("user__name--bg");
            let linksHeader = document.querySelectorAll("a.header__nav-link");
            for (let i = 0; i < linksHeader.length; i++) {
                linksHeader[i].classList.remove("header__nav-link--bg");
            }
        }
    });
};

swapHeader();

// let slideInnerContainer = $(".sliderContainer");
// let slideOuterContainer = $(".slider__container");

// let slides = $(".slider__self-container");

// let widthOfInnerContainer = slides.length * 50;

// let finalWidth = widthOfInnerContainer + "%";

// slideInnerContainer.css("width", finalWidth);




// function nextSlider() {
//     slideInnerContainer.animate({ left: '-100%' }, 400, function () {
//         slideInnerContainer.css('left', '-50%');
//         $('.slider__self-container').last().after($('.slider__self-container').first());

//     });
// }

// setInterval(nextSlider, 8000);


// function previousSlider() {
//     slideInnerContainer.animate({ left: '0%' }, 400, function () {
//         slideInnerContainer.css('left', '-50%');
//         $('.slider__self-container').first().before($('.slider__self-container').last());
//     });
// }

// document.querySelector(".previous").addEventListener("click", function () {
//     previousSlider();
// });

// document.querySelector(".next").addEventListener("click", function () {
//     nextSlider();
// });





$(".first-row-rateBox").starRating({
    totalStars: 5,
    readOnly: true,
    emptyColor: 'lightgray',
    hoverColor: 'lightgray',
    activeColor: '#E6B712',
    starShape: 'rounded',
    starSize: 18,
    initialRating: 4,
    strokeWidth: 0,
    useGradient: false,
    callback: function (currentRating, $el) {
        alert('rated ' + currentRating);
        console.log('DOM element ', $el);
    }
});


$(".second-row-rateBox").starRating({
    totalStars: 5,
    readOnly: true,
    emptyColor: 'lightgray',
    hoverColor: 'lightgray',
    activeColor: '#E6B712',
    starShape: 'rounded',
    starSize: 18,
    initialRating: 4,
    strokeWidth: 0,
    useGradient: false,
    callback: function (currentRating, $el) {
        alert('rated ' + currentRating);
        console.log('DOM element ', $el);
    }
});

$(".third-row-rateBox").starRating({
    totalStars: 5,
    readOnly: true,
    emptyColor: 'lightgray',
    hoverColor: 'lightgray',
    activeColor: '#E6B712',
    starShape: 'rounded',
    starSize: 18,
    initialRating: 4,
    strokeWidth: 0,
    useGradient: false,
    callback: function (currentRating, $el) {
        alert('rated ' + currentRating);
        console.log('DOM element ', $el);
    }
});

$(document).ready(function () {
    let owl = $(".owl-one");
    owl.owlCarousel({
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            620: {
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