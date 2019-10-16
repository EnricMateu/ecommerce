import data from "../data.js";
class DBService {
    all(){
        return data
    }
    find(id){
        return data.find(item =>item.id===  id)
    }

    delete(){
        return  console.log("DELETE")
    }
}

export default DBService
