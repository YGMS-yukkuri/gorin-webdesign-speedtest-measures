const passInp = document.getElementById("pass");
const TXTLength = document.getElementById("length")
const TXTBig = document.getElementById("big")
const TXTSmall = document.getElementById("small")
const TXTNum = document.getElementById("num")
const TXTSpace = document.getElementById("space")
const TXTMark = document.getElementById("mark")
const DIV = document.getElementById("DIV")

const RegBig = /[A-Z]/;
const RegSmall = /[a-z]/;
const RegNum = /[0-9]/;
const RegSpace = /\s/
const RegMark = /[^A-Za-z0-9]/

let length = 0;
let isLength = false
let isBig = false;
let isSmall = false;
let isNum = false;
let isSpace = false;
let isMark = false;

passInp.addEventListener("keyup", () => {
    VALUE = passInp.value
    length = VALUE.length
    if (length <= 8 || length >= 16) {
        TXTLength.classList.remove("ok")
        isLength = false;
    } else {
        TXTLength.classList.add("ok")
        isLength = true
    }


    if (RegBig.test(VALUE)) {
        TXTBig.classList.add("ok")
        isBig = true
    } else {
        TXTBig.classList.remove("ok")
        isBig = false
    }

    if (RegSmall.test(VALUE)) {
        TXTSmall.classList.add("ok")
        isSmall = true
    } else {
        TXTSmall.classList.remove("ok")
        isSmall = false
    }

    if (RegNum.test(VALUE)) {
        TXTNum.classList.add("ok")
        isNum = true
    } else {
        TXTNum.classList.remove("ok")
        isNum = false
    }

    if (!RegSpace.test(VALUE)) {
        TXTSpace.classList.add("ok")
        isSpace = true
    } else {
        TXTSpace.classList.remove("ok")
        isSpace = false
    }

    if (RegMark.test(VALUE)) {
        TXTMark.classList.add("ok")
        isMark = true
    } else {
        TXTMark.classList.remove("ok")
        isMark = false
    }

    if (isLength && isBig && isMark && isNum && isSmall && isSpace) {
        DIV.textContent = "利用可能";
    } else {
        DIV.textContent = "";
    }
})