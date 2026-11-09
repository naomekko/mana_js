const list = document.querySelector("#menu");
const menuList = [
    {
        photo: "img01.jpg",
        title: "いちご",
        price: "500円"

    },
    {
        photo: "img02.jpg",
        title: "みかん",
        price: "400円"

    },
    {
        photo: "img03.jpg",
        title: "キュウイ",
        price: "300円"

    },
    {
        photo: "img04.jpg",
        title: "りんご",
        price: "700円"

    },
    {
        photo: "img05.jpg",
        title: "ぶどう",
        price: "800円"

    },
    {
        photo: "img06.jpg",
        title: "もも",
        price: "900円"

    },
]
// for (let i = 0; i < menuList.length; i++) {
//     const { photo, title, price } = menuList[i];
//     const contents = `
//     <div>
//         <img src="./img/${photo}" alt="">
//         <p>${title}</p>
//         <p>${price}</p>
//     </div>    
//     `;
//     list.insertAdjacentHTML('beforeend', contents);
// }

menuList.forEach((menuItem) => {
    const { photo, title, price } = menuItem;
    const contents = `
    <div>
        <img src="./img/${photo}" alt="">
         <p>${title}</p>
       <p>${price}</p>
    </div>    
     `;
    list.insertAdjacentHTML('beforeend', contents);
})