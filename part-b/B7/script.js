const allbox = document.querySelectorAll(".draginner")

let draggingItem = null;

document.addEventListener("dragstart", (e) => {
    draggingItem = e.target
    draggingItem.classList.add("dragging")
})

document.addEventListener("dragover", (e) => {
    e.preventDefault()

    const upperItem = e.target.closest(".draginner")
    if (!upperItem) return;

    const rect = upperItem.getBoundingClientRect();
    const draggingrect = draggingItem.getBoundingClientRect()
    console.log(rect.bottom);

    const parent = upperItem.parentElement;

    if (draggingrect.bottom > rect.bottom) {
        console.log("UP");
        parent.insertBefore(draggingItem, upperItem)
    } else {
        console.log("DOWN");
        parent.insertBefore(draggingItem, upperItem.nextElementSibling)
    }
})

document.addEventListener("drop", (e) => {
    let array = []
    const allbox_2 = document.querySelectorAll(".draginner")
    allbox_2.forEach(element => {
        TXT = element.textContent
        array.push(TXT)
    });
    elementC = document.createElement("p")
    elementC.textContent = array;
    elementC.classList.add("result");

    if(document.querySelector(".result")) {
        document.querySelector(".result").remove();
    }

    document.body.appendChild(elementC);
})