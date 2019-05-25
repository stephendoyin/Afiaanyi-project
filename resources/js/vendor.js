
let dropDownContainer = document.querySelector(".full--nav");
let dropDownTrigger = document.querySelector(".header__resp_menu-button-container");
let newEl = dropDownContainer.cloneNode(true);
dropDownTrigger.appendChild(newEl);


let menuIconMega = $(".header__resp_menu-btn");
let menuModalMega = $(".nav_menu__resp-mega-menu");

menuIconMega.click(function () {

    if (screen.availWidth <= 1100) {
        menuModalMega.animate({ left: "0%" });
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
    }

});


$(window).click(function (e) {
    if (e.target.className === "nav_menu__resp-mega-menu") {
        //remv the modal
        menuModalMega.animate({ left: "-100%" });
        // height of the document
        document.body.style.height = "auto";
        //make the document scrollable again
        document.body.style.overflow = "auto";
        // document.querySelector(".menu_icon").style.visibility = "visible";
    }
});


$(".close_mega_menu").click(function () {
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



$(function () {

    $(".minus__material").click(function () {
        $(".minus__material").css("display", "none");
        $(".plus__material").css("display", "block");
        $(".material--toggle").css("display", "none");
    });

    $(".plus__material").click(function (e) {
        $(".plus__material").css("display", "none");
        $(".minus__material").css("display", "block");
        $(".material--toggle").css("display", "block");
    });


    $(".minus__discount").click(function () {
        $(".minus__discount").css("display", "none");
        $(".plus__discount").css("display", "block");
        $(".discount--toggle").css("display", "none");
    });

    $(".plus__discount").click(function (e) {
        $(".plus__discount").css("display", "none");
        $(".minus__discount").css("display", "block");
        $(".discount--toggle").css("display", "block");
    });

    $(".minus__ratings").click(function () {
        $(".minus__ratings").css("display", "none");
        $(".plus__ratings").css("display", "block");
        $(".ratings--toggle").css("display", "none");
    });

    $(".plus__ratings").click(function (e) {
        $(".plus__ratings").css("display", "none");
        $(".minus__ratings").css("display", "block");
        $(".ratings--toggle").css("display", "block");
    });

    $(".minus__score").click(function () {
        $(".minus__score").css("display", "none");
        $(".plus__score").css("display", "block");
        $(".score--toggle").css("display", "none");
    });

    $(".plus__score").click(function (e) {
        $(".plus__score").css("display", "none");
        $(".minus__score").css("display", "block");
        $(".score--toggle").css("display", "block");
    });

    $(".minus__brand").click(function () {
        $(".minus__brand").css("display", "none");
        $(".plus__brand").css("display", "block");
        $(".brand--toggle").css("display", "none");
    });

    $(".plus__brand").click(function (e) {
        $(".plus__brand").css("display", "none");
        $(".minus__brand").css("display", "block");
        $(".brand--toggle").css("display", "block");
    });

    $(".minus__price").click(function () {
        $(".minus__price").css("display", "none");
        $(".plus__price").css("display", "block");
        $(".price--toggle").css("display", "none");
    });

    $(".plus__price").click(function (e) {
        $(".plus__price").css("display", "none");
        $(".minus__price").css("display", "block");
        $(".price--toggle").css("display", "block");
    });

    $(".minus__colour").click(function () {
        $(".minus__colour").css("display", "none");
        $(".plus__colour").css("display", "block");
        $(".colour--toggle").css("display", "none");
    });

    $(".plus__colour").click(function (e) {
        $(".plus__colour").css("display", "none");
        $(".minus__colour").css("display", "block");
        $(".colour--toggle").css("display", "block");
    });

    $(".minus__size").click(function () {
        $(".minus__size").css("display", "none");
        $(".plus__size").css("display", "block");
        $(".size--toggle").css("display", "none");
    });

    $(".plus__size").click(function (e) {
        $(".plus__size").css("display", "none");
        $(".minus__size").css("display", "block");
        $(".size--toggle").css("display", "block");
    });

    $(".minus__ship").click(function () {
        $(".minus__ship").css("display", "none");
        $(".plus__ship").css("display", "block");
        $(".ship--toggle").css("display", "none");
    });

    $(".plus__ship").click(function (e) {
        $(".plus__ship").css("display", "none");
        $(".minus__ship").css("display", "block");
        $(".ship--toggle").css("display", "block");
    });

    let imgs = [
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg',
        'resources/img/product-list/product-images/product-one.svg',
        'resources/img/product-list/product-images/product-two.svg'
    ];

    let product = document.querySelector(".product-list__container");
    // let productCard = document.querySelector(".product__card");

    for (let i = 0; i < imgs.length; i++) {
        let productCard = `
        <div class="product__card">
                            <div class="product-modal">
                                <div class="product-modal__content">
                                <button class="quick-view">Quick View</button>
                                </div>
                            </div>
                            <div class="paper">
                            <div class="product-image">
                            <div class="badge__new-container">
                            <div class="badge__new">NEW</div>
                            </div>
                            <div class="img__overlay">
                                <img src="${imgs[i]}" class="product__img" alt="product">
                            </div>
                                <span class="product__badge"></span>
                            </div>

                                <div>
                                <span class="brand__name">Google</span>
                                <hr>
                                <span class="full__brand-name">
                                    Google Pixel 3 XL, Android 9, 4GB RAM...
                                </span>

                                    <div class="price-details">
                                    <p class="price">
                                    &#x20A6;55,990.00
                                    </p>
                                    <p class="percentage__off">
                                        22%
                                    </p>
                                </div>
                                    <div class="ratings-numbers">
                                    <div class="ratings">
                                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                                        <img src="resources/img/ratins-none.svg" height="10px" width="10px" alt="rating">
                                    </div>
                                        <div class="numbers">
                                            (889)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;

        product.innerHTML += productCard;
    }

    let histroyProductCount = 2;

    let history = document.querySelector(".search__product-container");

    for (let i = 0; i < histroyProductCount; i++) {
        let product = `
        <div class="product__card">
                            <div class="product-modal">
                                <div class="product-modal__content">
                                <button class="quick-view">Quick View</button>
                                </div>
                            </div>
                            <div class="paper">
                            <div class="product-image">
                            <div class="badge__new-container">
                            <div class="badge__new">NEW</div>
                            </div>
                            <div class="img__overlay">
                                <img src="${imgs[i]}" class="product__img" alt="product">
                            </div>
                                <span class="product__badge"></span>
                            </div>

                                <div>
                                <span class="brand__name">Google</span>
                                <hr>
                                <span class="full__brand-name">
                                    Google Pixel 3 XL, Android 9, 4GB RAM...
                                </span>

                                    <div class="price-details">
                                    <p class="price">
                                    &#x20A6;55,990.00
                                    </p>
                                    <p class="percentage__off">
                                        22%
                                    </p>
                                </div>
                                    <div class="ratings-numbers">
                                    <div class="ratings">
                                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                                        <img src="resources/img/ratings.svg" height="10px" width="10px" alt="rating">
                                        <img src="resources/img/ratins-none.svg" height="10px" width="10px" alt="rating">
                                    </div>
                                        <div class="numbers">
                                            (889)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;
        history.innerHTML += product;
    }
    // $(".header__full-nav-link").hover(function () {
    //     $(".dropdown__header").css("display", "block");
    // }, function () {
    //     $(".dropdown__header").css("display", "none");
    // });
});


var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
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
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
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
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);




$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500000,
        values: [0, 500000],
        slide: function (event, ui) {
            $("#amount1").val(ui.values[0]);
            $("#amount2").val(ui.values[1]);
        }
    });
    $("#amount1").val($("#slider-range").slider("values", 0));
    $("#amount2").val($("#slider-range").slider("values", 1));


    $("#amount1").bind("change paste keyup", function () {
        $("#slider-range").slider("", 7000)

    });
});

$(function () {
    $("#slider-range--menu").slider({
        range: true,
        min: 0,
        max: 500000,
        values: [0, 500000],
        slide: function (event, ui) {
            $("#amount1--menu").val(ui.values[0]);
            $("#amount2--menu").val(ui.values[1]);
        }
    });
    $("#amount1--menu").val($("#slider-range--menu").slider("values", 0));
    $("#amount2--menu").val($("#slider-range--menu").slider("values", 1));


    $("#amount1").bind("change paste keyup", function () {
        $("#slider-range").slider("", 7000)

    });
});

$(function () {
    //caches a jQuery object containing the header element
    var header = $(".header__top-container");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.addClass('header__top-container--shadow');
        } else {
            header.removeClass('header__top-container--shadow');
        }
    });
});


$(function () {
    //caches a jQuery object containing the header element
    var header = $(".header__top-container");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        let aside = document.querySelector(".scroll__relative");
        let productList = document.querySelector(".outer__product-container");
        if (scroll >= 625) {
            // console.log(scroll);
            aside.classList.add("scroll__fixed");
            productList.classList.add("outer__product-container--scrolled");
        } else {
            aside.classList.remove("scroll__fixed");
            productList.classList.remove("outer__product-container--scrolled");
        }


    });

});


//store btn in a variable
window.addEventListener("load", function () {
    let quickViewButton = document.querySelectorAll(".quick-view");
    let closeButton = document.querySelector(".close_button");

    console.log(quickViewButton[1]);

    closeButton.addEventListener("click", function () {
        toggleModal();
    })

    //add click event on all button
    for (let i = 0; i < quickViewButton.length; i++) {
        quickViewButton[i].addEventListener("click", function (e) {
            toggleModal();
            console.log("event triggered")
        })
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }


    window.addEventListener("click", windowOnClick);


    // increase quantity code

    let increaseButton = document.querySelector(".modal_quantity__increase");
    let reduceButton = document.querySelector(".modal_quantity__reduce");
    let inputValue = document.querySelector(".modal_quantity__input");
    let max = 20;
    let min = 1;

    increaseButton.addEventListener("click", function () {
        increaseInput();
    });

    reduceButton.addEventListener("click", function () {
        reduceInput();
    });


    function increaseInput() {
        if (inputValue.value < max) {
            inputValue.value++;
        } else {
            return;
        }
    }

    function reduceInput() {
        if (inputValue.value > min) {
            inputValue.value--;
        } else {
            return;
        }
    }


    let thumbnailContainers = document.querySelectorAll(".modal_product__thumbnail");

    let largeImage = document.querySelector(".modal_body__second_column img")

    let src = document.querySelectorAll(".modal_product__thumbnail img").src



    // loop thru all thumbnails

    for (let i = 0; i < thumbnailContainers.length; i++) {

        thumbnailContainers[i].addEventListener("click", function () {
            let newSrc = thumbnailContainers[i].childNodes[1].src
            largeImage.src = newSrc;

        });


    }

})

let filterDropDown = document.querySelector(".filter__drop-down");
let filterSortButton = document.querySelector(".filter_button--sort");
let filterDropItem = document.querySelectorAll(".filter__drop_item ");

filterSortButton.addEventListener("click", function () {
    filterDropDown.classList.toggle("filter__drop-down--view");
});

// for (let x = 0; x < filterDropItem.length; x++) {
//     

// }
for (let i = 0; i < filterDropItem.length; i++) {

    filterDropItem[i].addEventListener('click', function () {
        setTimeout(function () {
            filterDropDown.classList.toggle("filter__drop-down--view");
        }, 200)
    })

};

window.addEventListener("click", function (e) {
    if (!((e.target.classList[1] === "filter_button--sort") || (e.target.classList[0] === "filter__drop_item"))) {
        filterDropDown.classList.remove("filter__drop-down--view");
    }
});


let hoverLink = document.querySelectorAll(".header__full-nav-link");

for (let c = 0; c < hoverLink.length; c++) {
    hoverLink[c].addEventListener("click", function (e) {
        e.preventDefault();
    })
}