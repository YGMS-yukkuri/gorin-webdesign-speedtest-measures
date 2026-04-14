const inp = document.querySelector("textarea")
const high = document.getElementById("high")

const maxLen = 140;

const p = document.getElementById("p")

document.addEventListener("input", (e) => {
    change()
})

function change() {
    len = inp.value.length
    nokori = maxLen - len

    if (nokori <= 0) {
        p.style.background = "#f00"
    } else if (nokori < 20) {
        p.style.background = "yellow"
    } else {
        p.style.background = "#fff"
    }

    const VAL = inp.value

    if (VAL.slice(140)) {
        const AfVAL = VAL.slice(0,140) + "<span style='background: orange;'>" + VAL.slice(140) + "</span>"
        high.innerHTML = AfVAL
    }


    p.textContent = `残り${nokori}文字`
}