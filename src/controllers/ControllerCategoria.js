import ModelCategoria from "../models/ModelCategoria.js";

class ControllerCategoria{

    static async getCategoria(req, res, next) {
        res.json( await ModelCategoria.getCategoria());
    }
}

export default ControllerCategoria;