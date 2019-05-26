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

    $(".first-row__launch-container").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });

});


let filterDropDown = document.querySelectorAll(".filter__drop-down");
let filterSortButton = document.querySelector(".filter_button--sort");
let filterSortButtonTwo = document.querySelector(".filter_button--two");
let filterDropItem = document.querySelectorAll(".filter__drop_item ");

filterSortButton.addEventListener("click", function () {
    filterDropDown[0].classList.toggle("filter__drop-down--view");
});

filterSortButtonTwo.addEventListener("click", function () {
    filterDropDown[1].classList.toggle("filter__drop-down--view");
});

// for (let x = 0; x < filterDropItem.length; x++) {
//     

// }
for (let i = 0; i < filterDropItem.length; i++) {

    filterDropItem[i].addEventListener('click', function () {
        setTimeout(function () {
            filterDropDown[0].classList.remove("filter__drop-down--view");
        }, 200)
    })

};
for (let i = 0; i < filterDropItem.length; i++) {

    filterDropItem[i].addEventListener('click', function () {
        setTimeout(function () {
            filterDropDown[1].classList.remove("filter__drop-down--view");
        }, 200)
    })

};



window.addEventListener("click", function (e) {
    if (!((e.target.classList[1] === "filter_button--sort") || (e.target.classList[0] === "filter__drop_item"))) {
        filterDropDown[0].classList.remove("filter__drop-down--view");
    }
    if (!((e.target.classList[1] === "filter_button--two") || (e.target.classList[0] === "filter__drop_item"))) {
        filterDropDown[1].classList.remove("filter__drop-down--view");
    }
});




let caseTextOriginal = document.querySelectorAll(".first-row__content")
let caseText = document.querySelectorAll(".first-row__content")

let initialText = [];

for (let i = 0; i < caseTextOriginal.length; i++) {
    initialText.push(caseTextOriginal[i].textContent);
    console.log(initialText[i]);
}


let screenRespValues = [640]


window.addEventListener("resize", function () {
    textResize();

})




textResize();



function textResize() {
    if (window.screen.availWidth > 640) {
        for (let n = 0; n < caseText.length; n++) {
            caseText[n].textContent = initialText[n];
        }
    }
    else if ((window.screen.availWidth <= 640)) {
        for (let i = 0; i < caseText.length; i++) {
            let newText = initialText[i];
            caseText[i].textContent = newText.trim().substring(0, 100) + "...";
        }
    }
}