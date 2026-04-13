const savediv = document.querySelector(".save")
const searchdiv = document.querySelector(".search")

let Time = 0


setInterval(() => {
    if (Time < 0) {
        savediv.textContent = ""
        searchdiv.classList.remove("show")
    }
    Time--
}, 1000);

document.addEventListener("keydown",(e) => {
    e.preventDefault();
    if (e.key === "s" && e.ctrlKey) {
        savediv.textContent = "保存しました！"
        Time = 3
    }

    if (e.key === "z" && e.ctrlKey) {
        savediv.textContent = "操作を取り消しました"
        Time = 3
    }

    if (e.key === "f" && e.ctrlKey) {
        Time = 8
        searchdiv.classList.add("show")
    }
})