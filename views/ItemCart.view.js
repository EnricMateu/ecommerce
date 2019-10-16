export const ItemCart = (item) => {

    return `
    <div class="shoppingCart">
        <i id="close" class="far fa-window-close"></i>
        <h2>${item.title}</h2>
        <img src="${item.img}">
        <h3>${item.value}</h3>
    </div>
    `
}


