const loading = document.querySelector("#loading");

// window.addEventListener('load', () => {
//     loading.classList.add('complete');
// });

// setTimeout(() => {
//     loading.classList.add('complete')
// }, 3000
// )

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         loading.classList.add('complete');
//     }, 1500
//     )
// });
const MIN_TIME = 1500; // 最低限見せたい時間(ミリ秒)
const startTime = Date.now();

window.addEventListener('load', () => {
    const elapsed = Date.now() - startTime;
    // 読み込みにかかった時間    
    const wait = Math.max(MIN_TIME - elapsed, 0);
    // 足りない分だけ待つ    
    setTimeout(() => {
        loading.classList.add('complete');
    }, wait);
});