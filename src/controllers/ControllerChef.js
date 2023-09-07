import ModelChef from "../models/ModelChef.js";

class ControllerChef{

    static async getChefCarnes(req, res, next) {
        res.json( await ModelChef.getChefCarnes());
    }


    static async updateChefC(req, res, next) {
        res.json( await ModelChef.updateChefC());
    }
}

export default ControllerChef;