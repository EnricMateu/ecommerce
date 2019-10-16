import ItemController from "./controller/ItemController.js"
import { ItemView } from "./views/Item.view.js"
import Item from "./model/Item.js";
import HtmlService from "./Services/HtmlService.js";
import {ItemModal} from './views/ItemModal.view.js'
import {CartView} from "./views/Cart.view.js";
let Htmlservice = new HtmlService()
const CreateCart=function(){
    const content = CartView()
    let nodo=Htmlservice.create("div" , content);
    Htmlservice.appendChildToParent(nodo,"#app")


}
CreateCart()

const button = document.querySelector("#showAll");

button.addEventListener("click",()=>{

   const itemController = new ItemController();
   const all = itemController.index()



   ///


    let html = ""
   all.forEach(itemArray=>{
       const item = new Item(itemArray)
       const itemView = ItemView(item)
       html+= itemView;
   })
let nodo = Htmlservice.create("div", html)

 nodo.classList.add("articulos")


Htmlservice.appendChildToParent(nodo, "#app")
const moreInfo= document.querySelectorAll(".moreInfo")
moreInfo.forEach((item, index)=>{
    item.addEventListener("click", (event)=>{
        const id = event.target.id
        const item = itemController.show(id)

        const itemModal = ItemModal(item);
        const itemModalNode = Htmlservice.create("div",itemModal)
        Htmlservice.appendChildToParent(itemModalNode,"#app")

        let btnClose=document.querySelector('#close');
        let buyNow = document.querySelector('.shoppingCart')

        function closeIt(){
            Htmlservice.remove('.modal');
        }

        btnClose.addEventListener('click',()=>closeIt());




     })

})

})


