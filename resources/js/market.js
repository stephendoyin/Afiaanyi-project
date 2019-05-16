

// let slideOuterContainer = $(".market__product-wrapper");
// let slideInnerContainer = $(".market_product_slider_wrapper");

// let sliderz = $(".product_c_f_R");
// if (sliderz.length > 4) {
//     let widthOfInnerContainer = sliderz.length * 25;
//     let finalWidth = widthOfInnerContainer + "%";
//     slideInnerContainer.css("width", finalWidth);
// } else {
//     slideInnerContainer.css("width", "100%");
//     slideInnerContainer.css('left', '0%');
//     $(".product_c_f_R:first-child").css("visibility", "visible");
// }


// function nextSlider() {
//     slideInnerContainer.animate({ left: '-50%' }, 400, function () {
//         slideInnerContainer.css('left', '-25%');
//         $('.product_c_f_R').last().after($('.product_c_f_R').first());
//     });
// }

// function previousSlider() {
//     slideInnerContainer.animate({ left: '0%' }, 400, function () {
//         slideInnerContainer.css('left', '-25%');
//         $('.product_c_f_R').first().before($('.product_c_f_R').last());
//     });
// }

// // setInterval(nextSlider, 8000);
// document.querySelector(".slider__next").addEventListener("click", function () {
//     if (sliderz.length > 4) {
//         nextSlider();
//     } else {
//         return;
//     }
// });

// document.querySelector(".slider__prev").addEventListener("click", function () {
//     if (sliderz.length > 4) {
//         nextSlider();
//     } else {
//         return;
//     }
// });

// //second slider
// let slideOuterContainerTwo = $(".market__product-wrapper--two");
// let slideInnerContainerTwo = $(".market_product_slider_wrapper--two");

// let sliderzTwo = $(".product__crf");

// if (sliderzTwo.length > 4) {
//     let widthOfInnerContainerTwo = sliderzTwo.length * 25;
//     let finalWidthTwo = widthOfInnerContainerTwo + "%";
//     slideInnerContainerTwo.css("width", finalWidthTwo);
// } else {
//     slideInnerContainerTwo.css("width", "100%");
//     slideInnerContainerTwo.css('left', '0%');
//     $(".product__crf:first-child").css("visibility", "visible");
// }


// function nextSliderTwo() {
//     slideInnerContainerTwo.animate({ left: '-50%' }, 400, function () {
//         slideInnerContainerTwo.css('left', '-25%');
//         $('.product__crf').last().after($('.product__crf').first());
//     });
// }

// function previousSliderTwo() {
//     slideInnerContainerTwo.animate({ left: '0%' }, 400, function () {
//         slideInnerContainerTwo.css('left', '-25%');
//         $('.product__crf').first().before($('.product__crf').last());
//     });
// }

// // setInterval(nextSlider, 8000);
// document.querySelector(".slider__next--two").addEventListener("click", function () {
//     if (sliderzTwo.length > 4) {
//         nextSliderTwo();
//     } else {
//         return;
//     }
// });

// document.querySelector(".slider__prev--two").addEventListener("click", function () {
//     if (sliderzTwo.length > 4) {
//         previousSliderTwo();
//     } else {
//         return;
//     }
// });


// //third slider
// let thirdSliderInnerContainer = $(".col_wrapper_inner_container");

// let sliderzThree = $(".col_wrapper_inner");

// if (sliderzThree.length > 2) {
//     let widthOfInnerContainerThree = sliderzThree.length * 50;
//     let finalWidthThree = widthOfInnerContainerThree + "%";
//     thirdSliderInnerContainer.css("width", finalWidthThree);
// } else {
//     thirdSliderInnerContainer.css("width", "100%");
//     thirdSliderInnerContainer.css('left', '0%');
//     // $(".col_wrapper_inner:first-child").css("visibility", "visible");
// }

// function nextSliderThree() {
//     thirdSliderInnerContainer.animate({ left: '-100%' }, 400, function () {
//         thirdSliderInnerContainer.css('left', '-50%');
//         $('.col_wrapper_inner').last().after($('.col_wrapper_inner').first());
//     });
// }

// function previousSliderThree() {
//     thirdSliderInnerContainer.animate({ left: '0%' }, 400, function () {
//         thirdSliderInnerContainer.css('left', '-50%');
//         $('.col_wrapper_inner').first().before($('.col_wrapper_inner').last());
//     });
// }

// document.querySelector(".slider__next_two").addEventListener("click", function () {
//     if (sliderzThree.length > 2) {
//         nextSliderThree();
//     } else {
//         return;
//     }
// });

// document.querySelector(".slider__prev_two").addEventListener("click", function () {
//     if (sliderzThree.length > 2) {
//         previousSliderThree();
//     } else {
//         return;
//     }
// });


// let fourthSliderInnerContainer = $(".col_wrapper_inner_container--two");

// let sliderzFour = $(".col_wrapper_inner--two");

// if (sliderzFour.length > 2) {
//     let widthOfInnerContainerFour = sliderzFour.length * 50;
//     let finalWidthFour = widthOfInnerContainerFour + "%";
//     fourthSliderInnerContainer.css("width", finalWidthFour);
// } else {
//     fourthSliderInnerContainer.css("width", "100%");
//     fourthSliderInnerContainer.css('left', '0%');
//     $(".col_wrapper_inner--two:first-child").css("visibility", "visible");
// }



// function nextSliderFour() {
//     fourthSliderInnerContainer.animate({ left: '-100%' }, 400, function () {
//         fourthSliderInnerContainer.css('left', '-50%');
//         $('.col_wrapper_inner--two').last().after($('.col_wrapper_inner--two').first());
//     });

// }

// function previousSliderFour() {
//     fourthSliderInnerContainer.animate({ left: '0%' }, 400, function () {
//         fourthSliderInnerContainer.css('left', '-50%');
//         $('.col_wrapper_inner--two').first().before($('.col_wrapper_inner--two').last());
//     });
// }

// document.querySelector(".slider__next_three").addEventListener("click", function () {

//     if (sliderzFour.length > 2) {
//         nextSliderFour();
//     } else {
//         return;
//     }

// });

// document.querySelector(".slider__prev_three").addEventListener("click", function () {
//     if (sliderzFive.length > 2) {
//         previousSliderFour();
//     }
// });



// let navLinks = document.querySelectorAll(".market__nav-link");
// let navImgs = document.querySelectorAll(".market__nav-link img")

// for (let i = 0; i < navImgs.length; i++) {
//     navLinks[i].addEventListener("mouseover", function () {
//         navImgs[i].src = "resources/img/nav__forward--gold.svg";
//     })
//     navLinks[i].addEventListener("mouseout", function () {
//         navImgs[i].src = "resources/img/nav__forward.svg";
//     })
// }


// let fifthSliderInnerContainer = $(".col_wrapper_inner_container--three");

// let sliderzFive = $(".col_wrapper_inner--three");

// if (sliderzFive.length > 2) {
//     let widthOfInnerContainerFive = sliderzFive.length * 50;
//     let finalWidthFive = widthOfInnerContainerFive + "%";
//     fifthSliderInnerContainer.css("width", finalWidthFive);
// } else {
//     fifthSliderInnerContainer.css("width", "100%");
//     fifthSliderInnerContainer.css('left', '0%');
//     $(".col_wrapper_inner_container--three:first-child").css("visibility", "visible");
// }



// function nextSliderFive() {
//     fifthSliderInnerContainer.animate({ left: '-100%' }, 400, function () {
//         fifthSliderInnerContainer.css('left', '-50%');
//         $('.col_wrapper_inner--three').last().after($('.col_wrapper_inner--three').first());
//     });
// }

// function previousSliderFive() {
//     fifthSliderInnerContainer.animate({ left: '0%' }, 400, function () {
//         fifthSliderInnerContainer.css('left', '-50%');
//         $('.col_wrapper_inner--fifth').first().before($('.col_wrapper_inner--fifth').last());
//     });
// }

// document.querySelector(".slider__next_four").addEventListener("click", function () {
//     if (sliderzFive.length > 2) {
//         nextSliderFive();
//     } else {
//         return;
//     }
// });

// document.querySelector(".slider__prev_four").addEventListener("click", function () {
//     if (sliderzFive.length > 2) {
//         previousSliderFive();
//     } else {
//         return;
//     }
// });



// $(".first-row-rateBox").rate({
//     type: 0,
//     length: 5,
//     // value: 4,
//     half: true,
//     decimal: true,
//     readonly: true,
//     text: false,
//     textList: ['Bad', 'Poor', 'Medium', 'Good', 'Perfect'],
//     theme: '#E6B712',
//     size: '10px',
//     gutter: '2px',
//     selectClass: 'fxss_rate_select',
//     incompleteClass: '',
//     customClass: 'first-star-rating'
// });

$(".first-row-rateBox").starRating({
    totalStars: 5,
    readOnly: true,
    emptyColor: 'lightgray',
    hoverColor: 'lightgray',
    activeColor: '#E6B712',
    starShape: 'rounded',
    starSize: 15,
    initialRating: 4,
    strokeWidth: 0,
    useGradient: false,
    callback: function (currentRating, $el) {
        alert('rated ' + currentRating);
        console.log('DOM element ', $el);
    }
});

$(".modal_body_second-row-rateBox").starRating({
    totalStars: 5,
    readOnly: true,
    emptyColor: 'lightgray',
    hoverColor: 'lightgray',
    activeColor: '#E6B712',
    starShape: 'rounded',
    starSize: 20,
    initialRating: 4.8,
    strokeWidth: 0,
    useGradient: false,
    callback: function (currentRating, $el) {
        alert('rated ' + currentRating);
        console.log('DOM element ', $el);
    }
});

// //store btn in a variable
// let quickViewButton = document.querySelectorAll(".quick-view");
// let closeButton = document.querySelector(".close_button");

// closeButton.addEventListener("click", function () {
//     toggleModal();
// })

// //add click event on all button
// for (let i = 0; i < quickViewButton.length; i++) {
//     quickViewButton[i].addEventListener("click", function (e) {
//         toggleModal();
//         console.log("event triggered")
//     })
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }


// window.addEventListener("click", windowOnClick);


//increase quantity code

// let increaseButton = document.querySelector(".modal_quantity__increase");
// let reduceButton = document.querySelector(".modal_quantity__reduce");
// let inputValue = document.querySelector(".modal_quantity__input");
// let max = 20;
// let min = 1;

// increaseButton.addEventListener("click", function () {
//     increaseInput();
// });

// reduceButton.addEventListener("click", function () {
//     reduceInput();
// });


// function increaseInput() {
//     if (inputValue.value < max) {
//         inputValue.value++;
//     } else {
//         return;
//     }
// }

// function reduceInput() {
//     if (inputValue.value > min) {
//         inputValue.value--;
//     } else {
//         return;
//     }
// }


// let thumbnailContainers = document.querySelectorAll(".modal_product__thumbnail");

// let largeImage = document.querySelector(".modal_body__second_column img")

// let src = document.querySelectorAll(".modal_product__thumbnail img").src



//loop thru all thumbnails

// for (let i = 0; i < thumbnailContainers.length; i++) {

//     thumbnailContainers[i].addEventListener("click", function () {
//         let newSrc = thumbnailContainers[i].childNodes[1].src
//         largeImage.src = newSrc;

//     });


// }

window.addEventListener("resize", moveDropDownPostion())


function moveDropDownPostion() {

    let dropDownContainer = document.querySelector(".full--nav");
    let dropDownTrigger = document.querySelector(".header__resp_menu-button-container");
    let navig = document.querySelector("nav");
    if (screen.availWidth < 1280) {
        dropDownTrigger.appendChild(dropDownContainer);
    } else {
        navig.appendChild(dropDownContainer);
    }

}


let menuIconMega = $(".header__menu_icon");
let menuModalMega = $(".nav_menu__resp");

menuIconMega.click(function () {
    menuModalMega.animate({ left: "0%" });
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
    // document.querySelector(".menu_icon").style.visibility = "hidden";
});

$(window).click(function (e) {
    if (e.target.className === "nav_menu__resp") {
        //remv the modal
        menuModalMega.animate({ left: "-100%" });
        // height of the document
        document.body.style.height = "auto";
        //make the document scrollable again
        document.body.style.overflow = "auto";
        // document.querySelector(".menu_icon").style.visibility = "visible";
    }
});


$(".menu__close").click(function () {
    menuModalMega.animate({ left: "-100%" });
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
    // document.querySelector(".menu_icon").style.visibility = "visible";

});


const megaMenuLink = document.querySelectorAll(".resp-menu__mega-link-title-header");

const megaMenuDropDown = document.querySelectorAll(".resp-menu__mega-wrapper");

const megaMenuArrow = document.querySelectorAll(".header__mega_menu-arrow");


for (let x = 0; x < megaMenuLink.length; x++) {
    megaMenuLink[x].addEventListener("click", function () {
        for (let z = 0; z < megaMenuLink.length; z++) {
            if (z !== x) {
                // megaMenuArrow[z].classList
                megaMenuDropDown[z].classList.remove("resp-menu__mega-wrapper--view");
                megaMenuArrow[z].classList.remove("header__mega_menu-arrow--rotate");
            }
        }
        megaMenuDropDown[x].classList.toggle("resp-menu__mega-wrapper--view");
        megaMenuArrow[x].classList.toggle("header__mega_menu-arrow--rotate");
    }
    );
}


$(document).ready(function () {
    let owl = $(".owl-one");
    owl.owlCarousel({
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            500: {
                items: 1
            },

            760: {
                items: 2
            },
            980: {
                items: 3,
            },
            1280: {
                items: 4
            }
        }
    });

    // $('.next').click(function () {
    //     owl.trigger('next.owl.carousel');
    // })


    // $('.previous').click(function () {
    //     owl.trigger('prev.owl.carousel');
    // })
});

$(document).ready(function () {
    let owl = $(".owl-two");
    owl.owlCarousel({
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            500: {
                items: 1
            },
            760: {
                items: 2
            },
            980: {
                items: 3,
            },
            1280: {
                items: 4
            }
        }
    });

    // $('.next').click(function () {
    //     owl.trigger('next.owl.carousel');
    // })


    // $('.previous').click(function () {
    //     owl.trigger('prev.owl.carousel');
    // })
});

$(document).ready(function () {
    let owl = $(".owl-three");
    owl.owlCarousel({
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            500: {
                items: 1
            },
            760: {
                items: 2
            },
            1110: {
                items: 1
            },
            1280: {
                items: 1
            },
            1281: {
                items: 2
            }
        }
    });

    // $('.next').click(function () {
    //     owl.trigger('next.owl.carousel');
    // })


    // $('.previous').click(function () {
    //     owl.trigger('prev.owl.carousel');
    // })
});


$(document).ready(function () {
    let owl = $(".owl-four");
    owl.owlCarousel({
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            500: {
                items: 1
            },

            760: {
                items: 2
            },
            980: {
                items: 3,
            },
            1280: {
                items: 4
            }
        }
    });
});


$(document).ready(function () {
    let owl = $(".owl-five");
    owl.owlCarousel({
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            500: {
                items: 1
            },
            760: {
                items: 2
            },
            1110: {
                items: 1
            },
            1280: {
                items: 1
            },
            1281: {
                items: 2
            }
        }
    });

    // $('.next').click(function () {
    //     owl.trigger('next.owl.carousel');
    // })


    // $('.previous').click(function () {
    //     owl.trigger('prev.owl.carousel');
    // })
});


$(document).ready(function () {
    let owl = $(".owl-six");
    owl.owlCarousel({
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            500: {
                items: 1
            },
            760: {
                items: 2
            },
            1110: {
                items: 1
            },
            1280: {
                items: 1
            },
            1281: {
                items: 2
            }
        }
    });

    // $('.next').click(function () {
    //     owl.trigger('next.owl.carousel');
    // })


    // $('.previous').click(function () {
    //     owl.trigger('prev.owl.carousel');
    // })
});



$(document).ready(function () {
    let owl = $(".owl-seven");
    owl.owlCarousel({
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            500: {
                items: 1
            },
            760: {
                items: 2
            },
            1110: {
                items: 1
            },
            1280: {
                items: 1
            },
            1281: {
                items: 2
            }
        }
    });

    // $('.next').click(function () {
    //     owl.trigger('next.owl.carousel');
    // })


    // $('.previous').click(function () {
    //     owl.trigger('prev.owl.carousel');
    // })
});




var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);