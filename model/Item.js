import Model from "./Model.js"

class Item extends Model{
    constructor({title, id, description ,value,img,discount}){
        super()
        this.title = title
        this.description = description
        this.value = value;
        this.img = img;
        this.id = id;
        this.discount = discount
    }

    get Title(){
        return this.title
    }

    applyDiscount(){
        return this.value * this.discount
    }
}

export default Item