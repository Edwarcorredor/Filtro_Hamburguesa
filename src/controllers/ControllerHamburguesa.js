import ModelHamburguesa from "../models/ModelHamburguesa.js";

class ControllerHamburguesa{

    static async getHamburguesaVeg(req, res, next) {
        res.json( await ModelHamburguesa.getHamburguesaVeg());
    }
}

export default ControllerHamburguesa;