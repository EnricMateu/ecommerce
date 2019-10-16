export const ItemView = (item) =>{

    return `
    <div>
        <img class="itemImage" src='${item.img}'>
        <h1>${item.title}</h1>
        <p>${item.value}</p>
        <button class="moreInfo" id="${item.id}"> Mas información </button>
    </div>
    `
}


