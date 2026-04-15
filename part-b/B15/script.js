const Alldiv = document.querySelectorAll("div")
const d = document.querySelector("body")
let wheel = 0;
let Div;

document.addEventListener("click", (e) => {
    if (Div) Div.classList.remove("ac")
    Div = e.target
    Div.classList.add("ac")
})

window.addEventListener("wheel", (e) => {
    if (!Div) return
    const Cwheel = e.deltaY
    wheel += Cwheel
    Div.style.transform = `rotateY(${wheel} deg)`
})