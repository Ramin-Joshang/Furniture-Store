const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".right-list");
const banner = document.querySelector(".banner");

// navbar searchBox

searchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
});


// window.onload = () => {
//     if (window.innerWidth <= 992) {
//         banner.style.background = "url(/images/Capture2.PNG)"
//     }
//     if (window.innerWidth <= 700) {
//         banner.style.background = "url(/images/slide.jpg)"
//     } else {

//     }
// }


// responsive menu
hamburgerBtn.onclick = () => {
    menu.classList.add("active");
}
banner.onclick = () => {
    menu.classList.remove("active");
}