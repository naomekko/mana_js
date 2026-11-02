const color_c = document.querySelector("#color_check");
const color = document.querySelector("#color");

const colorBg = () => {
    document.body.style.backgroundColor = color.value;
    if (color.value === "#ffffff") {
        color_c.textContent = `カラーコード:${color.value}（white）`
    } else if (color.value === "#000000") {
        color_c.textContent = `カラーコード:${color.value}(black)`
    } else {
        color_c.textContent = `カラーコード:${color.value}`
    }
}

color.addEventListener('input', colorBg);