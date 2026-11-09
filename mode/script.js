const btn = document.querySelector("#switch");
btn.addEventListener('click', () => {
    document.body.classList.toggle('darktheme');
    if (btn.textContent === "ダークライトにする") {
        btn.textContent = "ライトモードにする"
    } else if (btn.textContent === "ライトモードにする") {
        btn.textContent = "ダークライトにする"
    }
});