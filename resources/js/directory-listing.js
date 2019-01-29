var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "header__form-select":*/
x = document.getElementsByClassName("header__form-select");
console.log(x);
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

let select = document.querySelectorAll("header .select-selected");
select[0].classList.add('header__form-input--left');
select[1].classList.add('header__form-input--middle');
select[2].classList.add('header__form-input--right');
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

$(function () {
    let cardCount = 6;

    let container = document.querySelector(".info-cards__container");

    let card = `
    <div class="info-card__container">

                        <div class="card">
                            <div class="info-card__upper-section">
                                <img class="info-card__logo" width="60px" height="60px" src="resources/img/directory/comp-icon.svg">
                                <p class="info-card__content">GG Nweze Automobile</p>
                                <p class="info-card__content">
                                    <span class="info-card__rating">
                                        1/4
                                    </span>
                                    <span>0 review</span>
                                    <span>
                                        <img height="12px" width="12px" class="info-card__icon info-card__icon--left-space"
                                            src="resources/img/directory-listing/like.svg">
                                        0 likes
                                    </span>
                                </p>

                                <p class="info-card__location">
                                    <img class="info-card__icon  height=" 13px" width="13px" src="resources/img/directory-listing/location.svg">
                                    <span>
                                        40, Awka Road, Awka, Anambra State
                                    </span>
                                </p>

                                <p class="info-card__hire">
                                    <img class="info-card__icon height=" 13px" width="13px" src="resources/img/directory-listing/hired.svg">
                                    <span>Hired 1 time</span>
                                </p>

                                <p class="info-card__responds">
                                    <img class="info-card__icon height=" 13px" width="13px" src="resources/img/directory-listing/response.png">
                                    <span>responds in 3hrs</span>
                                </p>

                                <p class="info-card__visited">
                                    <img class="info-card__icon height=" 13px" width="13px" src="resources/img/directory-listing/group.svg">
                                    <span>
                                        visited 82 times
                                    </span>
                                </p>
                            </div>

                            <div class="info-card__discription">
                                Description: GG Nweze Automoblie is an automotive
                                company offering sales of automotive accessories,
                                gaskets, fire extinguishers, bolt and nuts...

                            </div>

                            <div class="info-card__services">
                                Services: sales of automotive accessories, gaskets,
                                fire extinguishers,

                            </div>

                            <button class="btn">
                                Contact
                            </button>

                        </div>
                    </div>
    `;

    for (let x = 0; x < cardCount; x++){
        container.innerHTML += card;
    }
});
