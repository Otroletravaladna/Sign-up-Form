const invalidColor = document.querySelector(":root");
const input = document.querySelectorAll("input");
const confirmPass = document.getElementById("pass-confirm");
const pass = document.getElementById("pass");
const submit = document.querySelector("button");




input.forEach((item) => {
    item.addEventListener("focus", () => {
        invalidColor.style.setProperty("--invalid", "rgba(255, 0, 0, .4)");
        item.classList.add("input");
    })
})

submit.addEventListener("click", () => {
    if (confirmPass.value === pass.value) {
        confirmPass.setCustomValidity("");
    } else if (confirmPass.value != pass.value) {
        confirmPass.setCustomValidity("Passwords must match");
        confirmPass.reportValidity();
    }
})

confirmPass.addEventListener("focus", () => {
    pass.reportValidity();
    if (pass.valid === false) {
        pass.setCustomValidity("Password must have at least 8 characters");
    } else if (pass.valid === true) {
        pass.setCustomValidity("");
    }
});