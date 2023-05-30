let hamburger = document.getElementsByClassName("hamburger")[0];
let ulvisible = document.querySelectorAll(".ulvisible");

hamburger.addEventListener("click",(e) => {
    ulvisible.forEach((element) => {
        element.style.display = element.style.display === "none" ? "block" : "none";
    })
});