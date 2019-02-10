// //close modal by click window area if modal is showing
// function windowOnClick(event) {
//     if (event.target === modal) {
//       toggleModal();
//     }
//   }


// var okButton = document.querySelector(".ok");
var modal = document.querySelector(".modal_container");


  

//   window.addEventListener("click", windowOnClick);




//toggle modal
function toggleModal(event) {
  modal.classList.toggle("show_modal");
}

