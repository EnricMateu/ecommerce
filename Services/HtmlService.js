
class HtmlService {


    create(type,content) {
        const node =  document.createElement(type)
        node.innerHTML = content
        return node
    }

    appendChildToParent(child, parentSelector){
        const parent = document.querySelector(parentSelector)
        parent.appendChild(child)
    }

    remove(selector){
        let node=document.querySelector(selector);
        node.remove();
    }





}
export default HtmlService
