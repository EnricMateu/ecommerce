import Item from "../model/Item.js";
const data = {
  title: "asdasda",
  description: "asdasd",
  value: 22,
  discount: 0.9
};

class ItemController {
  constructor(){
    this.item= new Item(data)
  }
  index() {
    return this.item.All();
  }
  show(id){
    const item = this.item.find(id)
    return item;
  }
  
}
export default ItemController;