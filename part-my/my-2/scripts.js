/**
 * @type {HTMLElement}
 */
const cube = document.querySelector(".cube")
let rotate = 0

document.addEventListener("wheel", (e) => {
    DELTA = e.deltaY
    rotate += DELTA
    cube.style.transform = `rotateY(${rotate}deg)`
})