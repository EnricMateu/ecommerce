export const ItemModal = (item) => {
    return`
    <div class="modal">
        <i id="close" class="far fa-window-close"></i>
            <h1>${item.title}</h1>
            <img class="imageModal" src="${item.img}">
            <p>${item.description}</p>
        <button id="buyit">Buy Me</button>
    </div>
    `
}
