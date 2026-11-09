const scrollRate = () => {
    const bar = document.querySelector("#bar");
    // どのくらいスクロースしたか取得できる
    const scrolled = window.scrollY;
    // ページ全体の高さ
    const pageHeight = document.documentElement.scrollHeight;
    // 表示領域の高さ
    const viewHight = document.documentElement.clientHeight;
    // スクロールされた割合の計算
    const parcent = scrolled / (pageHeight - viewHight) * 100;
    bar.style.width = `${parcent}%`

}

window.addEventListener("scroll", scrollRate)