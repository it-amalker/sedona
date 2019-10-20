var modal = document.querySelector(".modal");
var buttonOpen = document.querySelector(".reservation-button");

buttonOpen.addEventListener("click", function() {
    modal.classList.toggle("modal--show");
    modal.classList.toggle("modal--close");
})
