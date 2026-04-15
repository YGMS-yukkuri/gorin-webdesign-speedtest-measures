const menu = document.getElementById("contextmenu")

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    X = e.clientX;
    Y = e.clientY;

    menu.style.top = `${Y}px`;
    menu.style.left = `${X}px`;
    menu.classList.add("active")
})

window.addEventListener("click", () => {
    menu.classList.remove("active")
})