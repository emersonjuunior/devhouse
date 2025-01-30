const btnOpen = document.querySelector("#btn-open")
const btnClose = document.querySelector("#btn-close")
const mobileMenu = document.querySelector("#mobile-menu")

btnOpen.addEventListener("click", (e) => {
    mobileMenu.classList.remove("hidden")
})

btnClose.addEventListener("click", (e) => {
    mobileMenu.classList.add("hidden")
})