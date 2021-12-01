// navbar searchBox
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
});