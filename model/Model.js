import DBService from "./DBService.js"

class Model{

constructor()
{
    this.service = new DBService()
}

    All(){
       return this.service.all()
    }

    find(id){
        return this.service.find(id)
    }
}

export default Model