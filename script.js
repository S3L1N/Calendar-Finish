window.addEventListener("DOMContentLoaded", () => {

    const boxes = document.querySelectorAll(".box")
    console.log(boxes)

    boxes.forEach((box) => {

        box.addEventListener("click", () => {
            box.classList.toggle("active")
        })
    })
})