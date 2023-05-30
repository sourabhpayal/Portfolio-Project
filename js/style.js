let hamburger = document.getElementsByClassName("hamburger")[0];
let ulvisible = document.querySelectorAll(".ulvisible");

hamburger.addEventListener("click",(e) => {
    ulvisible.forEach((element) => {
        element.style.display = element.style.display === "none" ? "block" : "none";
    })
});

let scroll = document.getElementById("scrollarrow");
let section2 = document.getElementsByClassName("section2")[0];
console.log(scroll);
scroll.addEventListener('click', () =>{
    section2.scrollIntoView(true)
    // window.scrollBy(0, 750);
})