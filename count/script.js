const cnt = document.querySelector("#count");
const area = document.querySelector("#text");
area.addEventListener("keyup", () => {
    cnt.textContent = area.value.length;
    if (area.value.length >= 100) {
        cnt.classList.add("attention");
    } else {
        cnt.classList.remove("attention");
    }
});