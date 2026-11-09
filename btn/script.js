const check = document.querySelector("#c_box");
const sbmit = document.querySelector("#s_btn");

check.addEventListener("change", () => {
    // sbmit.disabled = !check.checked

    if (check.checked) {
        sbmit.disabled = false;
        sbmit.classList.add("able");
    } else {
        sbmit.disabled = true;
        sbmit.classList.remove("able")
    }
});