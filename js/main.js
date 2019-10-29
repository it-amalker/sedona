let modal = document.querySelector(".modal");
let buttonOpen = document.querySelector(".reservation-button");

if (modal) {
    buttonOpen.addEventListener("click", function() {
        modal.classList.toggle("modal--show");
        modal.classList.toggle("modal--close");
    })
}

