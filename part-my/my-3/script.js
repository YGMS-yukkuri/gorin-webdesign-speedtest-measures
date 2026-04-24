const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const btn = document.querySelector("button")

let X;
let Y;
let isDraw = false;


canvas.addEventListener("mousemove", (e) => {
    if (isDraw) {
        X = e.x
        Y = e.y
        ctx.strokeStyle = "black"
        ctx.fillStyle = "black"
        ctx.beginPath();
        ctx.fillRect(X,Y,5,5)
        ctx.stroke();
    }
})

canvas.addEventListener("mousedown", (e) => {
    isDraw = true;
})

canvas.addEventListener("mouseup", (e) => {
    isDraw = false;
    ctx.closePath();
})

btn.addEventListener("click", (e)  => {
    ctx.clearRect(0,0,600,300)
})