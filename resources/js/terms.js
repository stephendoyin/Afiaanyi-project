let drop = document.querySelectorAll(".dropdown__title");
let image = document.querySelectorAll("img.handle");

    drop[0].addEventListener("click", cb)


function cb(e){
    e.target.childNodes[4].classList.toggle("terms__dropdown--hide");
}


    image[0].addEventListener("click", cbTow)


// for(var i = 0; i < image.length; i++){
//     image[i].addEventListener("click", function(e){
//         e.target.parentNode.childNodes[4].classList.toggle("terms__dropdown--hide");
//     })
// };
function cbTwo(e){
    e.target.parentNode.childNodes[4].classList.toggle("terms__dropdown--hide");
}




































