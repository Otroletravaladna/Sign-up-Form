const invalidColor = document.querySelector(":root");
const input = document.querySelectorAll("input");


input.forEach((item) => {
    item.addEventListener("focus", () => {
        invalidColor.style.setProperty("--required", "red");
        item.classList.add("input");
    })
})
