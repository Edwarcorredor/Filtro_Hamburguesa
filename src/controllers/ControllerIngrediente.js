import ModelIngrediente from "../models/ModelIngrediente.js";

class ControllerIngrediente{

    static async getStockMenor(req, res, next) {
        res.json( await ModelIngrediente.getStockMenor());
    }
}

export default ControllerIngrediente;