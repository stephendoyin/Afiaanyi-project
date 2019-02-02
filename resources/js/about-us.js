$(function () {
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
            for(let i = 0; i < linksHeader.length; i++){
                linksHeader[i].classList.add("header__nav-link--bg");
            }
        } else {
            header.removeClass('header__top-container--shadow');
            let img = document.querySelector(".header__top-container img");
            img.src = "resources/img/market-logo.svg";
            document.querySelector(".greeting").classList.remove("greeting--bg");
            document.querySelector(".user__name").classList.remove("user__name--bg");
            let linksHeader = document.querySelectorAll("a.header__nav-link");
            for(let i = 0; i < linksHeader.length; i++){
                linksHeader[i].classList.remove("header__nav-link--bg");
            }
        }
    });
});
